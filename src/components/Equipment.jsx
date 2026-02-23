import React from "react";

// Import equipment images
import sonyCamera from "../../assets/sony-a7-iv-28-70-mm.jpg";
import macMini from "../../assets/apple-mac-mini-m4-pro-computer-tower-EKrMyzA-600.jpg";

export default function Equipment() {
  return (
    <section id="equipment" className="mt-20">
      <div className="relative bg-gradient-to-br from-[#1a1410] via-[#2d2420] to-[#1f1a15] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-amber-900/30 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden">
        {/* Background film elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Film strip pattern */}
          <div className="absolute top-4 left-4 w-32 h-24 border-2 border-amber-500/50 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-8 right-8 w-24 h-20 border-2 border-amber-500/50 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-6 left-1/4 w-20 h-16 border-2 border-amber-500/50 rounded-lg transform rotate-3"></div>
          <div className="absolute bottom-10 right-12 w-28 h-20 border-2 border-amber-500/50 rounded-lg transform -rotate-6"></div>
          
          {/* Film reels */}
          <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-amber-500/30 rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-12 h-12 border-4 border-amber-500/30 rounded-full"></div>
          
          {/* Camera silhouette */}
          <div className="absolute top-1/3 left-8 w-10 h-8 bg-amber-500/20 rounded-lg transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-16 w-8 h-6 bg-amber-500/20 rounded-sm transform rotate-6"></div>
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,90,43,0.15)_0%,transparent_70%)]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-3 mb-6">
            <span className="uppercase tracking-[0.18em] text-[10px] text-amber-200/70 bg-black/40 px-3 py-1.5 rounded-full border border-dashed border-amber-500/30">
              Tools Of The Trade
            </span>
            <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#2a2218] to-[#3d3020] px-4 py-1.5 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-amber-700/40">
              <span className="text-accentRed">Equipment</span> <span className="text-amber-100">I Own</span>
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 bg-gradient-to-br from-[#3d3020] to-[#2a2218] rounded-[18px] border border-amber-500/20 shadow-[0_12px_0_rgba(0,0,0,0.3)] overflow-hidden hover:border-amber-500/40 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-accentYellow to-accentPink flex items-center justify-center p-3 overflow-hidden">
                <img 
                  src={sonyCamera} 
                  alt="Sony Alpha A7 Mark IV" 
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-black/85 text-[#fff8e8] px-2 py-1 rounded-full">
                  Sony Alpha A7 Mark IV
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col justify-center gap-2">
                <div className="text-[13px] uppercase tracking-[0.16em] font-semibold text-amber-100">
                  Sony Alpha A7 Mark IV
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-amber-200/60">
                  Primary Camera · Full Frame
                </div>
                <p className="text-[12px] text-amber-100/70">
                  Used for narrative shorts, location scouts, and visual experiments —
                  giving me cinematic depth and flexibility in both natural and controlled light.
                </p>
              </div>
            </article>

            <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 bg-gradient-to-br from-[#3d3020] to-[#2a2218] rounded-[18px] border border-amber-500/20 shadow-[0_12px_0_rgba(0,0,0,0.3)] overflow-hidden hover:border-amber-500/40 transition-all duration-300">
              <div className="relative bg-gradient-to-br from-[#b2f1ff] to-[#ffd7f3] flex items-center justify-center p-3 overflow-hidden">
                <img 
                  src={macMini} 
                  alt="Mac M4" 
                  className="w-full h-full object-cover rounded-[12px]"
                />
                <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-black/85 text-[#fff8e8] px-2 py-1 rounded-full">
                  Mac M4
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col justify-center gap-2">
                <div className="text-[13px] uppercase tracking-[0.16em] font-semibold text-amber-100">
                  Mac M4
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-amber-200/60">
                  Editing & Sound Workstation
                </div>
                <p className="text-[12px] text-amber-100/70">
                  My main post-production base for editing, color and sound, keeping projects fast,
                  responsive, and ready for both student screenings and online releases.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
