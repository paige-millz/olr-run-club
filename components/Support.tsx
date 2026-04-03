"use client";

import { useEffect, useRef } from "react";

export default function Support() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "runolr");
    script.setAttribute("data-description", "Support the cooler!");
    script.setAttribute("data-message", "");
    script.setAttribute("data-color", "#fcf4df");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.async = true;

    document.head.appendChild(script);

    return () => {
      script.remove();
      // Clean up the widget if it was added
      const widget = document.getElementById("bmc-wbtn");
      if (widget) widget.remove();
    };
  }, []);

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

        <div ref={embedRef} className="flex justify-center mb-8">
          <a
            href="https://www.buymeacoffee.com/runolr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/60 hover:border-cream text-cream px-6 py-3 rounded-lg text-sm font-medium transition-colors"
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
            Buy us a water
          </a>
        </div>

        <p className="text-cream/30 text-xs">
          100% goes back into waters, ice, and the occasional sticker run.
        </p>
      </div>
    </section>
  );
}
