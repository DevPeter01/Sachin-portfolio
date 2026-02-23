import React from "react";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import SoftwareSkills from "./components/SoftwareSkills.jsx";
import Favourites from "./components/Favourites.jsx";
import Equipment from "./components/Equipment.jsx";
import ContactFooter from "./components/ContactFooter.jsx";
import CinematicBackground from "./components/CinematicBackground.jsx";

export default function App() {
  return (
    <div className="font-body text-neutral-900 relative min-h-screen">
      {/* Cinematic Background */}
      <CinematicBackground />
      
      {/* Sticky top nav */}
      <header className="sticky top-0 z-40 bg-[#1a1a2e]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
            <span className="font-display bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.5)]">🎬 REEL</span>
            <span className="text-white/80">Portfolio</span>
          </div>
          <nav className="hidden sm:flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em]">
            <a href="#intro" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Intro</a>
            <a href="#experience" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Work</a>
            <a href="#software" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Software</a>
            <a href="#favourites" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Favourites</a>
            <a href="#equipment" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Equipment</a>
            <a href="#contact" className="px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-24 pt-6 relative z-10">
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
