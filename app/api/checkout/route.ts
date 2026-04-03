import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { items } = (await req.json()) as { items: CartItem[] };

    const line_items = items.map((item) => {
      // Map cart items to Stripe price IDs
      let priceId: string;
      if (item.id === "sticker") {
        priceId = process.env.STRIPE_STICKER_PRICE_ID!;
      } else if (item.id === "tshirt") {
        priceId = process.env.STRIPE_SHIRT_PRICE_ID!;
      } else {
        throw new Error(`Unknown product: ${item.id}`);
      }

      return {
        price: priceId,
        quantity: item.quantity,
      };
    });

    // Collect size metadata for t-shirt orders
    // TODO: Implement size-based inventory tracking in Stripe when ready
    // TODO: Add shirt color variant if needed
    const shirtItems = items.filter((item) => item.id === "tshirt");
    const metadata: Record<string, string> = {};
    if (shirtItems.length > 0) {
      metadata.shirt_sizes = shirtItems
        .map((item) => `${item.size} x${item.quantity}`)
        .join(", ");
    }

    // Collect shipping address for t-shirt orders (needed for Printful fulfillment)
    const hasPhysicalProduct = shirtItems.length > 0;

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items,
      metadata,
      ...(hasPhysicalProduct && {
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
      }),
      success_url: `${req.nextUrl.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/#merch`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout session error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
