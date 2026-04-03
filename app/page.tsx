"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Merch from "@/components/Merch";
import Support from "@/components/Support";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="fade-section">
          <About />
        </div>
        <div className="fade-section">
          <Merch />
        </div>
        <div className="fade-section">
          <Support />
        </div>
        <div className="fade-section">
          <Community />
        </div>
      </main>
      <Footer />
    </>
  );
}
