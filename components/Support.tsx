"use client";

const VENMO_HANDLE = "RunOLR";

export default function Support() {
  return (
    <section id="support" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-6">
          Buy Us a Water
        </h2>
        <p className="text-cream/60 text-base leading-relaxed max-w-lg mx-auto mb-10">
          If you&rsquo;ve grabbed a water from the cooler and want to say
          thanks, you can do that here. Truly no pressure. A wave works too.
        </p>

        <a
          href={`https://venmo.com/${VENMO_HANDLE}?txn=pay&note=OLR%20Cooler%20Fund`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-cream/60 hover:border-cream text-cream px-6 py-3 rounded-lg text-sm font-medium transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#008CFF]">
            <path d="M19.5 3.5c.8 1.3 1.2 2.7 1.2 4.3 0 3.4-2.9 7.8-5.2 10.9H9.3L7 3.8l5-.5.9 7.3c.9-1.5 2-3.8 2-5.4 0-1-.2-1.7-.4-2.3l5-1.4z" />
          </svg>
          Send us a tip on Venmo
        </a>

        <p className="text-cream/30 text-xs mt-6">
          @{VENMO_HANDLE} &middot; 100% goes back into waters, ice, and the occasional sticker run.
        </p>
      </div>
    </section>
  );
}
