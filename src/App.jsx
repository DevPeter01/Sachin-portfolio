import React from "react";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import SoftwareSkills from "./components/SoftwareSkills.jsx";
import Favourites from "./components/Favourites.jsx";
import Equipment from "./components/Equipment.jsx";
import ContactFooter from "./components/ContactFooter.jsx";
import BackgroundOcean from "./components/BackgroundOcean.jsx";

export default function App() {
  return (
    <div className="font-body text-neutral-100 relative min-h-screen bg-[#0a192f]">
      {/* Animated Ocean Background */}
      <BackgroundOcean />
      
      {/* Sticky top nav - Ocean Glass style */}
      <header className="sticky top-0 z-40 bg-[#0a192f]/60 backdrop-blur-md border-b border-[#00BBF9]/20">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
            <span className="font-display bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] px-3 py-1.5 rounded font-bold shadow-[0_0_15px_rgba(0,245,212,0.4)]">OCEAN</span>
            <span className="text-[#00F5D4] font-bold">Portfolio</span>
          </div>
          <nav className="hidden sm:flex flex-wrap gap-1 text-[10px] uppercase tracking-[0.12em]">
            <a href="#intro" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Intro</a>
            <a href="#experience" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Work</a>
            <a href="#software" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Software</a>
            <a href="#favourites" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Favourites</a>
            <a href="#equipment" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Equipment</a>
            <a href="#contact" className="px-3 py-2 rounded-full text-white/50 hover:text-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all duration-200">Contact</a>
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
