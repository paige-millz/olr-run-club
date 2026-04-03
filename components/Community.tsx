export default function Community() {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-cream mb-6">
          Run Old LaGrange
        </h2>
        <p className="text-cream/60 text-base leading-relaxed max-w-lg mx-auto mb-12">
          Old LaGrange Road. Crestwood, KY. About 3.2 miles of flat, fast road
          that runners and cyclists have quietly claimed.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
          {/* Strava Button */}
          <a
            href="https://strava.app.link/nOhAqmCm11b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-cream/40 hover:border-cream hover:bg-cream/10 rounded-lg px-6 py-5 transition-all group"
          >
            {/* Strava icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#FC4C02] shrink-0"
            >
              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169" />
            </svg>
            <div className="text-left">
              <span className="text-cream font-bold text-base block leading-tight">
                Join on Strava
              </span>
              <span className="text-cream/50 text-xs">
                OLR Run Club
              </span>
            </div>
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/Run_OLR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-cream/40 hover:border-cream hover:bg-cream/10 rounded-lg px-6 py-5 transition-all group"
          >
            {/* Instagram icon */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#E1306C] shrink-0"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <div className="text-left">
              <span className="text-cream font-bold text-base block leading-tight">
                @Run_OLR
              </span>
              <span className="text-cream/50 text-xs">
                Follow on Instagram
              </span>
            </div>
          </a>
        </div>

        <p className="text-cream/40 text-sm mt-8">
          Tag us at the cooler. We love seeing it.
        </p>
        <p className="text-cream/30 text-xs mt-3">
          No group runs scheduled. No pressure. Just the road.
        </p>
      </div>
    </section>
  );
}
