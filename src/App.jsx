import React from "react";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import SoftwareSkills from "./components/SoftwareSkills.jsx";
import Favourites from "./components/Favourites.jsx";
import Equipment from "./components/Equipment.jsx";
import ContactFooter from "./components/ContactFooter.jsx";

export default function App() {
  return (
    <div className="font-body text-neutral-900">
      {/* Sticky top nav */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-dashed border-black/15">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-neutral-800">
            <span className="font-display bg-accentRed text-[#fffdf7] px-2 py-1">REEL</span>
            <span>Portfolio</span>
          </div>
          <nav className="hidden sm:flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.14em]">
            <a href="#intro" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Intro</a>
            <a href="#experience" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Work</a>
            <a href="#software" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Software</a>
            <a href="#favourites" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Favourites</a>
            <a href="#equipment" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Equipment</a>
            <a href="#contact" className="px-2 py-1 rounded-full border border-transparent hover:border-black/30 hover:bg-accentYellow/30">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-24 pt-6">
        <Hero />
        <Experience />
        <SoftwareSkills />
        <Favourites />
        <Equipment />
        <ContactFooter />
      </main>
    </div>
  );
}
