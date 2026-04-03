"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-cream/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <Image
            src="/assets/OLR_Bubble_wRunClub.svg"
            alt="OLR Run Club"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            About
          </a>
          <a
            href="#merch"
            className="text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            Merch
          </a>
          <a
            href="#support"
            className="text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            Support the Cooler
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-cream/10 px-6 py-4 space-y-4">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            About
          </a>
          <a
            href="#merch"
            onClick={() => setIsOpen(false)}
            className="block text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            Merch
          </a>
          <a
            href="#support"
            onClick={() => setIsOpen(false)}
            className="block text-cream/70 hover:text-cream transition-colors text-sm tracking-wide"
          >
            Support the Cooler
          </a>
        </div>
      )}
    </nav>
  );
}
