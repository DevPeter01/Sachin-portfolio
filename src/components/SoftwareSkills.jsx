import React, { useEffect, useRef } from "react";

const skills = [
  { name: "DaVinci Resolve", level: 88, note: "Color · Edit · Grade" },
  { name: "Adobe Premiere Pro", level: 82, note: "Narrative & Reels" },
  { name: "Adobe Photoshop", level: 78, note: "Posters & Frames" },
  { name: "Adobe Lightroom", level: 75, note: "Look & Mood" },
  { name: "Final Cut Pro", level: 70, note: "Mac-based Editing" },
  { name: "Arch Studio", level: 68, note: "Set & Space Visuals" },
  { name: "Pro Tools", level: 65, note: "Basic Audio & Mix" }
];

function SkillMeter({ name, level, note }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.style.width = `${level}%`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="relative bg-gradient-to-br from-white/95 to-[#f5f0e8] rounded-[16px] border border-dashed border-black/20 px-4 py-3 overflow-hidden shadow-lg">
      <span className="absolute top-1.5 right-3 text-[8px] uppercase tracking-[0.18em] text-neutral-500">
        Loading Scene
      </span>
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <div className="text-[12px] uppercase tracking-[0.12em] font-semibold text-neutral-800">{name}</div>
        <div className="text-[11px] text-neutral-600">{note}</div>
      </div>
      <div className="h-2 rounded-full bg-[#ffeecd] shadow-inner overflow-hidden border border-black/10">
        <div
          ref={barRef}
          className="h-full w-0 rounded-full shadow-[0_0_12px_rgba(255,75,75,0.5)] bg-gradient-to-r from-accentRed via-accentYellow to-accentBlue transition-[width] duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
}

export default function SoftwareSkills() {
  return (
    <section id="software" className="mt-20">
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
          
          {/* Director chair silhouette */}
          <div className="absolute top-1/2 right-6 w-8 h-12 bg-amber-500/20 rounded-sm transform rotate-12"></div>
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,90,43,0.15)_0%,transparent_70%)]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-3 mb-6">
            <span className="uppercase tracking-[0.18em] text-[10px] text-amber-200/70 bg-black/40 px-3 py-1.5 rounded-full border border-dashed border-amber-500/30">
              Tools Of The Timeline
            </span>
            <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#2a2218] to-[#3d3020] px-4 py-1.5 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-amber-700/40">
              <span className="text-accentRed">Software</span> <span className="text-amber-100">Skills</span>
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            {skills.map(skill => (
              <SkillMeter key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
