"use client";

import { useState } from "react";
import Image from "next/image";

const SIZES = ["S", "M", "L", "XL", "XXL"];
const BMC_URL = "https://www.buymeacoffee.com/runolr";

type Product = "tee" | "sticker";

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  product: Product;
  size: string;
  quantity: number;
}

export default function Merch() {
  const [view, setView] = useState<"browse" | "form" | "confirmed">("browse");
  const [form, setForm] = useState<OrderForm>({
    name: "",
    email: "",
    phone: "",
    product: "tee",
    size: "L",
    quantity: 1,
  });
  const [submitting, setSubmitting] = useState(false);

  const price = form.product === "tee" ? 35 : 8;
  const total = price * form.quantity;

  function startOrder(product: Product) {
    setForm((f) => ({ ...f, product, size: product === "tee" ? "L" : "", quantity: 1 }));
    setView("form");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Send order notification email via formsubmit.co
    try {
      await fetch("https://formsubmit.co/ajax/paiged115@yahoo.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New OLR Order: ${form.product === "tee" ? `T-Shirt (${form.size})` : "Sticker"} x${form.quantity}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "Not provided",
          Item: form.product === "tee" ? "OLR T-Shirt" : "RR Crossing Sticker",
          Size: form.product === "tee" ? form.size : "N/A",
          Quantity: form.quantity,
          Total: `$${total}`,
          _template: "table",
        }),
      });
    } catch {
      // Still show confirmation even if email fails
    }

    setSubmitting(false);
    setView("confirmed");
  }

  // Browse view — product cards
  if (view === "browse") {
    return (
      <section id="merch" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-4">
            The Drop
          </h2>
          <p className="text-cream/50 text-sm mb-12">
            Merch keeps the cooler stocked. That&rsquo;s the whole business
            model.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sticker Card */}
            <button
              onClick={() => startOrder("sticker")}
              className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col hover:border-cream/40 transition-colors group text-left"
            >
              <div className="flex-1 flex items-center justify-center py-8">
                <Image
                  src="/assets/RR_Crossing_Icon.svg"
                  alt="OLR Railroad Crossing Sticker"
                  width={200}
                  height={200}
                  className="w-40 h-40 object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-cream">
                  RR Crossing Sticker
                </h3>
                <p className="text-cream/60 text-sm">
                  Die-cut. Weatherproof. Goes on your water bottle, your car,
                  your helmet.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-cream font-bold text-lg">$8</span>
                  <span className="border border-cream/60 group-hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors">
                    Order
                  </span>
                </div>
              </div>
            </button>

            {/* T-Shirt Card */}
            <button
              onClick={() => startOrder("tee")}
              className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col hover:border-cream/40 transition-colors group text-left"
            >
              <div className="flex-1 flex items-center justify-center py-8">
                <div className="w-56 h-56 bg-black rounded-lg flex flex-col items-center justify-center border border-cream/10 relative overflow-hidden group-hover:scale-105 transition-transform">
                  <Image
                    src="/assets/OLR_Bubble_wRunClub_cropped.svg"
                    alt="OLR Run Club Tee"
                    width={120}
                    height={89}
                    className="w-28 object-contain"
                  />
                  <span className="text-cream/40 text-[10px] tracking-widest uppercase mt-3">
                    Old Roads. Fast Legs.
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-cream">OLR T-Shirt</h3>
                <p className="text-cream/60 text-sm">
                  Heavyweight tee. Black. OLR on the chest, &ldquo;Old Roads.
                  Fast Legs.&rdquo; on the back.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-cream font-bold text-lg">$35</span>
                  <span className="border border-cream/60 group-hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors">
                    Order
                  </span>
                </div>
              </div>
            </button>
          </div>

          <p className="text-cream/30 text-xs text-center mt-10">
            Pickup at the cooler on Old LaGrange Road.
          </p>
        </div>
      </section>
    );
  }

  // Order form view
  if (view === "form") {
    return (
      <section id="merch" className="py-24 px-6">
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => setView("browse")}
            className="text-cream/40 hover:text-cream text-sm mb-8 flex items-center gap-1 transition-colors"
          >
            &larr; Back to merch
          </button>

          <h2 className="text-3xl font-black text-cream mb-2">
            {form.product === "tee" ? "OLR T-Shirt" : "RR Crossing Sticker"}
          </h2>
          <p className="text-cream/50 text-sm mb-8">
            ${price} each &middot; Pickup at 5890 Old LaGrange Rd
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-cream/70 text-sm mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-transparent border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-cream/60 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-cream/70 text-sm mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="w-full bg-transparent border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-cream/60 focus:outline-none transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-cream/70 text-sm mb-2">
                Phone{" "}
                <span className="text-cream/30">(optional)</span>
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="w-full bg-transparent border border-cream/20 rounded-lg px-4 py-3 text-cream text-sm focus:border-cream/60 focus:outline-none transition-colors"
                placeholder="For pickup coordination"
              />
            </div>

            {form.product === "tee" && (
              <div>
                <label className="block text-cream/70 text-sm mb-2">
                  Size
                </label>
                <div className="flex gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, size: s }))}
                      className={`px-4 py-2 rounded border text-sm font-medium transition-colors ${
                        form.size === s
                          ? "border-cream bg-cream text-background"
                          : "border-cream/20 text-cream/60 hover:border-cream/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="block text-cream/70 text-sm mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      quantity: Math.max(1, f.quantity - 1),
                    }))
                  }
                  className="w-10 h-10 rounded border border-cream/20 text-cream hover:border-cream/40 transition-colors flex items-center justify-center"
                >
                  &minus;
                </button>
                <span className="text-cream font-bold text-lg w-8 text-center">
                  {form.quantity}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setForm((f) => ({ ...f, quantity: f.quantity + 1 }))
                  }
                  className="w-10 h-10 rounded border border-cream/20 text-cream hover:border-cream/40 transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-t border-cream/10 pt-6 flex items-center justify-between">
              <div>
                <span className="text-cream/50 text-sm">Total</span>
                <span className="text-cream font-black text-2xl ml-3">
                  ${total}
                </span>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="bg-cream text-background px-8 py-3 rounded-lg font-bold text-sm hover:bg-cream/90 transition-colors disabled:opacity-50"
              >
                {submitting ? "Placing order..." : "Place Order"}
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  // Confirmation view
  return (
    <section id="merch" className="py-24 px-6">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-5xl mb-6">&#10003;</div>
        <h2 className="text-3xl font-black text-cream mb-4">Order Placed</h2>
        <p className="text-cream/60 text-sm mb-8">
          Thanks, {form.name}! To complete your order, send{" "}
          <span className="text-cream font-bold">${total}</span> via Buy Me a
          Coffee.
        </p>

        <a
          href={BMC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#FFDD00] hover:bg-[#E5C700] text-black px-8 py-4 rounded-lg font-bold text-sm transition-colors mb-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
          </svg>
          Pay ${total} on Buy Me a Coffee
        </a>

        <div className="border border-cream/10 rounded-lg p-6 mt-8 text-left space-y-3">
          <h3 className="text-cream font-bold text-sm">Order Details</h3>
          <div className="text-cream/60 text-sm space-y-1">
            <p>
              {form.product === "tee"
                ? `OLR T-Shirt — Size ${form.size}`
                : "RR Crossing Sticker"}{" "}
              &times; {form.quantity}
            </p>
            <p>Total: ${total}</p>
          </div>
          <div className="border-t border-cream/10 pt-3">
            <p className="text-cream/40 text-xs">
              Pickup at the cooler — 5890 Old LaGrange Rd, Crestwood KY.
              We&rsquo;ll reach out when it&rsquo;s ready.
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setForm({
              name: "",
              email: "",
              phone: "",
              product: "tee",
              size: "L",
              quantity: 1,
            });
            setView("browse");
          }}
          className="text-cream/40 hover:text-cream text-sm mt-8 transition-colors"
        >
          &larr; Back to merch
        </button>
      </div>
    </section>
  );
}
