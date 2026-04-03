"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
};

const SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;

export default function Merch() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [loading, setLoading] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function addToCart(item: Omit<CartItem, "quantity">) {
    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === item.id && i.size === item.size
      );
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  }

  function updateQuantity(id: string, size: string | undefined, delta: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });
      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="merch" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream">
            The Drop
          </h2>
          {cartCount > 0 && (
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-cream/70 hover:text-cream transition-colors"
              aria-label="Open cart"
            >
              <ShoppingBag size={24} />
              <span className="absolute -top-2 -right-2 bg-cream text-background text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}
        </div>
        <p className="text-cream/50 text-sm mb-12">
          Merch keeps the cooler stocked. That&rsquo;s the whole business model.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sticker Card */}
          <div className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col">
            <div className="flex-1 flex items-center justify-center py-8">
              <Image
                src="/assets/OLR_Run_Club_Sticker_Oval.svg"
                alt="OLR Run Club Sticker"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cream">OLR Sticker</h3>
              <p className="text-cream/60 text-sm">
                Weatherproof. Goes on your water bottle, your car, your helmet.
                Printed locally.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-cream font-bold text-lg">$5</span>
                <button
                  onClick={() =>
                    addToCart({ id: "sticker", name: "OLR Sticker", price: 5 })
                  }
                  className="border border-cream/60 hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {/* T-Shirt Card */}
          <div className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col">
            <div className="flex-1 flex items-center justify-center py-8">
              {/* TODO: Add real t-shirt product photo to /public/assets/ */}
              <div className="w-48 h-48 border-2 border-dashed border-cream/30 rounded-lg flex items-center justify-center">
                <span className="text-cream/30 text-sm text-center px-4">
                  photo coming soon
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cream">OLR T-Shirt</h3>
              <p className="text-cream/60 text-sm">
                Heavyweight tee. Black. OLR bubble on the chest.
              </p>
              {/* Size selector */}
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-xs rounded border transition-colors ${
                      selectedSize === size
                        ? "bg-cream text-background border-cream"
                        : "border-cream/30 text-cream/60 hover:border-cream/60"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-cream font-bold text-lg">$28</span>
                <button
                  onClick={() =>
                    addToCart({
                      id: "tshirt",
                      name: "OLR T-Shirt",
                      price: 28,
                      size: selectedSize,
                    })
                  }
                  className="border border-cream/60 hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Printful storefront link */}
        <div className="mt-12 text-center">
          <a
            // TODO: Replace with your public Printful storefront URL once enabled
            // (Dashboard > Store settings > Enable storefront)
            href="https://runolr.printful.me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/40 hover:text-cream/70 transition-colors text-xs underline underline-offset-4 decoration-cream/20"
          >
            Browse the full store on Printful &rarr;
          </a>
        </div>
      </div>

      {/* Cart Overlay */}
      <div
        className={`cart-overlay fixed inset-0 z-50 bg-black/60 ${
          cartOpen ? "open" : ""
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div
        className={`cart-drawer fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-cream/10 flex flex-col ${
          cartOpen ? "open" : ""
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-cream/10">
          <h3 className="text-lg font-bold text-cream">Cart</h3>
          <button
            onClick={() => setCartOpen(false)}
            className="text-cream/50 hover:text-cream transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <p className="text-cream/40 text-sm">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.size || ""}`}
                className="flex items-center justify-between py-3 border-b border-cream/10"
              >
                <div>
                  <p className="text-cream text-sm font-medium">
                    {item.name}
                    {item.size && (
                      <span className="text-cream/50 ml-2">({item.size})</span>
                    )}
                  </p>
                  <p className="text-cream/50 text-xs">
                    ${item.price} each
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, -1)}
                    className="text-cream/50 hover:text-cream transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-cream text-sm w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, 1)}
                    className="text-cream/50 hover:text-cream transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-cream/10 space-y-4">
            <div className="flex justify-between text-cream">
              <span className="font-medium">Subtotal</span>
              <span className="font-bold">${subtotal}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full bg-cream text-background font-bold py-3 rounded hover:bg-cream-secondary transition-colors disabled:opacity-50"
            >
              {loading ? "Redirecting..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
