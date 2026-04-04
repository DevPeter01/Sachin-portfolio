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
    <div className="font-body text-neutral-900 relative h-screen w-screen overflow-hidden">
      {/* Cinematic Background Layer */}
      <CinematicBackground />

      {/* CENTER CONTENT STAGE (FOCUS AREA) */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[94vw] max-w-6xl h-[95vh] glass-stage overflow-y-auto z-20 animate-stage-in">
        
        {/* Navigation - Fixed inside the stage */}
        <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/5">
          <div className="w-full mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
              <span className="font-display bg-white text-black px-3 py-1.5 rounded font-bold shadow-lg">REEL</span>
              <span className="text-white/60 font-light hidden sm:inline">Sachin Portfolio</span>
            </div>
            <nav className="flex flex-wrap gap-1 text-[9px] md:text-[10px] uppercase tracking-[0.16em]">
              <a href="#intro" className="px-3 py-2 rounded-full text-white/50 hover:text-white transition-colors">Intro</a>
              <a href="#experience" className="px-3 py-2 rounded-full text-white/50 hover:text-white transition-colors">Work</a>
              <a href="#software" className="px-3 py-2 rounded-full text-white/50 hover:text-white transition-colors">Software</a>
              <a href="#favourites" className="px-3 py-2 rounded-full text-white/50 hover:text-white transition-colors">Favourites</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform">Contact</a>
            </nav>
          </div>
        </header>

        {/* Content Flow */}
        <main className="w-full mx-auto px-2 md:px-4 pt-6 pb-20 relative z-10">
          <Hero />
          <Experience />
          <SoftwareSkills />
          <Favourites />
          <Equipment />
          <ContactFooter />
        </main>
      </div>
    </div>
  );
}
