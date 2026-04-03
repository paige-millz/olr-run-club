"use client";

import Image from "next/image";

const PRINTFUL_STORE = "https://runolr.printful.me";
const TSHIRT_URL = `${PRINTFUL_STORE}/product/mens-premium-heavyweight-tee`;
const STICKER_URL = `${PRINTFUL_STORE}/product/die-cut-stickers`;

export default function Merch() {
  return (
    <section id="merch" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-4">
          The Drop
        </h2>
        <p className="text-cream/50 text-sm mb-12">
          Merch keeps the cooler stocked. That&rsquo;s the whole business model.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sticker Card */}
          <a
            href={STICKER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col hover:border-cream/40 transition-colors group"
          >
            <div className="flex-1 flex items-center justify-center py-8">
              <Image
                src="/assets/OLR_Run_Club_Sticker_Oval.svg"
                alt="OLR Run Club Sticker"
                width={200}
                height={200}
                className="w-48 h-48 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cream">OLR Sticker</h3>
              <p className="text-cream/60 text-sm">
                Weatherproof. Goes on your water bottle, your car, your helmet.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-cream font-bold text-lg">$5</span>
                <span className="border border-cream/60 group-hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors">
                  Shop now
                </span>
              </div>
            </div>
          </a>

          {/* T-Shirt Card */}
          <a
            href={TSHIRT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="merch-card border border-cream/20 rounded-lg p-6 flex flex-col hover:border-cream/40 transition-colors group"
          >
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="w-56 h-56 bg-black rounded-lg flex flex-col items-center justify-center border border-cream/10 relative overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/OLR_Bubble_wRunClub.svg"
                  alt="OLR Run Club"
                  width={120}
                  height={120}
                  className="w-28 h-28 object-contain"
                />
                <span className="text-cream/30 text-[10px] tracking-widest uppercase mt-3">
                  Heavyweight Tee
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-cream">OLR T-Shirt</h3>
              <p className="text-cream/60 text-sm">
                Heavyweight tee. Black. OLR bubble on the chest.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-cream font-bold text-lg">$38</span>
                <span className="border border-cream/60 group-hover:border-cream text-cream px-5 py-2 rounded text-sm font-medium transition-colors">
                  Shop now
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Full store link */}
        <div className="mt-12 text-center">
          <a
            href={PRINTFUL_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/40 hover:text-cream/70 transition-colors text-xs underline underline-offset-4 decoration-cream/20"
          >
            Browse the full store &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
