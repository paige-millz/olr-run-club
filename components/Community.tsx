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

        {/* Strava Link Block */}
        <a
          href="https://strava.app.link/nOhAqmCm11b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-4 group"
        >
          {/* Strava wordmark */}
          <svg
            width="120"
            height="24"
            viewBox="0 0 120 24"
            className="text-cream/50 group-hover:text-cream transition-colors"
          >
            <text
              x="0"
              y="20"
              fill="currentColor"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              fontSize="20"
              letterSpacing="2"
            >
              STRAVA
            </text>
          </svg>
          <span className="text-cream/70 group-hover:text-cream transition-colors text-sm underline underline-offset-4 decoration-cream/30 group-hover:decoration-cream/60">
            Join our Strava club
          </span>
        </a>

        <p className="text-cream/30 text-xs mt-6 mb-16">
          No group runs scheduled. No pressure. Just the road.
        </p>

        {/* Instagram Link Block */}
        <a
          href="https://instagram.com/Run_OLR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col items-center gap-4 group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cream/50 group-hover:text-cream transition-colors w-8 h-8"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-cream/70 group-hover:text-cream transition-colors text-sm underline underline-offset-4 decoration-cream/30 group-hover:decoration-cream/60">
            @Run_OLR on Instagram
          </span>
        </a>

        <p className="text-cream/30 text-xs mt-6">
          Tag us at the cooler. We love seeing it.
        </p>
      </div>
    </section>
  );
}
