import React from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

export default function Equipment() {
  return (
    <ScrollRevealSection id="equipment" className="bg-[#fff7ea]">
      <header className="flex flex-wrap items-baseline gap-3 mb-6">
        <span className="uppercase tracking-[0.18em] text-[10px] text-neutral-600 bg-white/70 px-2 py-1 rounded-full border border-dashed border-black/20">
          Tools Of The Trade
        </span>
        <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-[#fff0cc] px-3 py-1 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-black">
          <span className="text-accentRed">Equipment</span> I Own
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 bg-white/95 rounded-[18px] border border-black/20 shadow-[0_12px_0_rgba(0,0,0,0.18)] overflow-hidden">
          <div className="relative bg-gradient-to-br from-accentYellow to-accentPink flex items-center justify-center p-3">
            <div className="w-[80%] h-[60%] rounded-[18px] bg-black/10 border-2 border-white/80 relative overflow-hidden">
              <div className="absolute inset-2 rounded-[12px] border-2 border-dashed border-white/80" />
            </div>
            <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-black/85 text-[#fff8e8] px-2 py-1 rounded-full">
              Sony Alpha A7 Mark IV
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col justify-center gap-2 text-[13px]">
            <div className="text-[13px] uppercase tracking-[0.16em] font-semibold">
              Sony Alpha A7 Mark IV
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-neutral-600">
              Primary Camera · Full Frame
            </div>
            <p className="text-[12px]">
              Used for narrative shorts, location scouts, and visual experiments 
              giving me cinematic depth and flexibility in both natural and controlled light.
            </p>
          </div>
        </article>

        <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 bg-white/95 rounded-[18px] border border-black/20 shadow-[0_12px_0_rgba(0,0,0,0.18)] overflow-hidden">
          <div className="relative bg-gradient-to-br from-[#b2f1ff] to-[#ffd7f3] flex items-center justify-center p-3">
            <div className="w-[80%] h-[60%] rounded-[18px] bg-black/10 border-2 border-white/80 relative overflow-hidden">
              <div className="absolute inset-2 rounded-[12px] border-2 border-dashed border-white/80" />
            </div>
            <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-black/85 text-[#fff8e8] px-2 py-1 rounded-full">
              Mac M4
            </div>
          </div>
          <div className="px-4 py-3 flex flex-col justify-center gap-2 text-[13px]">
            <div className="text-[13px] uppercase tracking-[0.16em] font-semibold">
              Mac M4
            </div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-neutral-600">
              Editing & Sound Workstation
            </div>
            <p className="text-[12px]">
              My main postproduction base for editing, color and sound, keeping projects fast,
              responsive, and ready for both student screenings and online releases.
            </p>
          </div>
        </article>
      </div>
    </ScrollRevealSection>
  );
}
