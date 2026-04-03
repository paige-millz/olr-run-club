import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  createPrintfulOrder,
  parseShirtSizes,
  SHIRT_VARIANT_MAP,
} from "@/lib/printful";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      console.log("Payment successful:", {
        sessionId: session.id,
        email: session.customer_details?.email,
        metadata: session.metadata,
      });

      // --- Printful auto-fulfillment for t-shirt orders ---
      const shirtSizesRaw = session.metadata?.shirt_sizes;
      if (shirtSizesRaw && process.env.PRINTFUL_API_TOKEN) {
        try {
          const sizes = parseShirtSizes(shirtSizesRaw);
          const items = sizes.map(({ size, quantity }) => ({
            external_variant_id: SHIRT_VARIANT_MAP[size],
            quantity,
          }));

          // Retrieve the full session with shipping/customer details
          const fullSession = await getStripe().checkout.sessions.retrieve(
            session.id
          ) as Stripe.Checkout.Session & { shipping_details?: { name?: string; address?: Stripe.Address } };

          const shipping = fullSession.shipping_details;
          const customer = fullSession.customer_details;

          if (!shipping?.address || !customer?.email) {
            console.error(
              "Missing shipping address or email for Printful order:",
              session.id
            );
            break;
          }

          await createPrintfulOrder(
            {
              external_id: `stripe-${session.id}`,
              recipient: {
                name: shipping.name || customer.name || "OLR Customer",
                email: customer.email,
                address1: shipping.address.line1 || "",
                city: shipping.address.city || "",
                state_code: shipping.address.state || "",
                country_code: shipping.address.country || "US",
                zip: shipping.address.postal_code || "",
              },
              items,
            },
            false // Draft mode — set to true to auto-confirm orders
          );

          console.log("Printful order created for session:", session.id);
        } catch (err) {
          // Log but don't fail the webhook — payment was already collected
          console.error("Printful order creation failed:", err);
        }
      }

      // TODO: Send order confirmation email for sticker orders
      // (stickers are fulfilled manually, not through Printful)

      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
