/**
 * Printful API integration for order fulfillment.
 *
 * When a Stripe checkout completes for a t-shirt order, this module
 * creates a corresponding order in Printful for print-on-demand fulfillment.
 *
 * Printful API docs: https://developers.printful.com/docs/
 *
 * Store ID: 17960853
 */

const PRINTFUL_API_URL = "https://api.printful.com";

type PrintfulRecipient = {
  name: string;
  email: string;
  address1: string;
  city: string;
  state_code: string;
  country_code: string;
  zip: string;
};

type PrintfulOrderItem = {
  sync_variant_id?: number;
  external_variant_id?: string;
  quantity: number;
};

type PrintfulOrderPayload = {
  external_id: string;
  recipient: PrintfulRecipient;
  items: PrintfulOrderItem[];
};

function getHeaders(): HeadersInit {
  const token = process.env.PRINTFUL_API_TOKEN;
  if (!token) {
    throw new Error("PRINTFUL_API_TOKEN is not set");
  }
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

/**
 * Create an order in Printful.
 *
 * By default, orders are created in "draft" status so you can review
 * them before they ship. Set `confirm: true` to auto-confirm.
 *
 * NOTE: You'll need to map your Stripe product sizes to Printful
 * sync_variant_ids or external_variant_ids. See the mapping config below.
 */
export async function createPrintfulOrder(
  order: PrintfulOrderPayload,
  confirm = false
): Promise<{ id: number; status: string }> {
  const url = `${PRINTFUL_API_URL}/orders${confirm ? "?confirm=true" : ""}`;

  const res = await fetch(url, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error("Printful order creation failed:", res.status, errorBody);
    throw new Error(`Printful API error: ${res.status}`);
  }

  const data = await res.json();
  return {
    id: data.result.id,
    status: data.result.status,
  };
}

/**
 * Size-to-variant mapping for Printful products.
 *
 * TODO: Fill in your actual Printful sync_variant_ids after setting up
 * products in your Printful dashboard. You can find these IDs by calling:
 *   GET https://api.printful.com/store/products
 *   GET https://api.printful.com/store/products/{id}
 *
 * Alternatively, use external_variant_id if you've set those up in Printful.
 */
export const SHIRT_VARIANT_MAP: Record<string, string> = {
  // Format: "size" -> "external_variant_id"
  // TODO: Replace these placeholder IDs with real Printful variant IDs
  XS: "olr-tshirt-xs",
  S: "olr-tshirt-s",
  M: "olr-tshirt-m",
  L: "olr-tshirt-l",
  XL: "olr-tshirt-xl",
  "2XL": "olr-tshirt-2xl",
};

/**
 * Parse the shirt_sizes metadata string from Stripe into structured data.
 * Input format: "L x1, XL x2"
 * Returns: [{ size: "L", quantity: 1 }, { size: "XL", quantity: 2 }]
 */
export function parseShirtSizes(
  sizeString: string
): { size: string; quantity: number }[] {
  return sizeString.split(",").map((entry) => {
    const trimmed = entry.trim();
    const match = trimmed.match(/^(.+)\s+x(\d+)$/);
    if (!match) {
      throw new Error(`Could not parse size entry: "${trimmed}"`);
    }
    return { size: match[1].trim(), quantity: parseInt(match[2], 10) };
  });
}

/**
 * Get the list of products synced to the Printful store.
 * Useful for verifying variant IDs during setup.
 */
export async function listPrintfulProducts(): Promise<unknown> {
  const res = await fetch(`${PRINTFUL_API_URL}/store/products`, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    throw new Error(`Printful API error: ${res.status}`);
  }

  const data = await res.json();
  return data.result;
}
