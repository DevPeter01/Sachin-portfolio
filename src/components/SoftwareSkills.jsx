import React, { useEffect, useRef } from "react";

const skills = [
  { name: "DaVinci Resolve", level: 88, note: "Color · Edit · Grade" },
  { name: "Adobe Premiere Pro", level: 82, note: "Narrative & Reels" },
  { name: "Adobe Photoshop", level: 78, note: "Posters & Frames" },
  { name: "Adobe Lightroom", level: 100, note: "Look & Mood" },
  { name: "Final Cut Pro", level: 70, note: "Mac-based Editing" },
  { name: "Arc Studio", level: 100, note: "Set & Space Visuals" },
  { name: "Pro Tools", level: 65, note: "Basic Audio & Mix" },
  { name: "Canva", level: 100, note: "Design & Graphics" }
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
    <div className="group relative bg-[#2a2218]/60 backdrop-blur-md rounded-xl border border-white/5 px-5 py-4 overflow-hidden transition-all duration-300 hover:bg-[#3d3020]/80 hover:border-amber-500/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      {/* Decorative corner light */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 blur-[30px] rounded-full group-hover:bg-amber-500/10 transition-colors" />

      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex flex-col">
          <div className="text-[14px] uppercase tracking-[0.16em] font-bold text-amber-50 group-hover:text-amber-400 transition-colors">
            {name}
          </div>
          <div className="text-[10px] uppercase tracking-[0.12em] text-amber-200/40 font-medium mt-0.5">
            {note}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] uppercase tracking-[0.2em] text-amber-500/60 font-bold mb-1">
            Status: Active
          </span>
          <div className="text-[11px] font-mono text-amber-200/80">
            {level}%
          </div>
        </div>
      </div>

      <div className="relative h-1.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
        <div
          ref={barRef}
          className="h-full w-0 rounded-full bg-gradient-to-r from-[#D14538] via-[#D4A373] to-[#D14538] bg-[length:200%_100%] animate-shimmer transition-[width] duration-1000 ease-out relative"
        >
          {/* Glowing head of the progress bar */}
          <div className="absolute right-0 top-0 bottom-0 w-4 shadow-[0_0_15px_#D14538] bg-white opacity-40" />
        </div>
      </div>
    </div>
  );
}

export default function SoftwareSkills() {
  return (
    <section id="software" className="mt-8">
      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/20 px-2 py-4 sm:px-3 sm:py-6 overflow-hidden">
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
          <header className="flex flex-wrap items-baseline gap-3 mb-8">
            <h2 className="font-display text-[20px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#2a2218] to-[#3d3020] px-5 py-2 rounded-full shadow-[0_8px_0_rgba(209,69,56,0.3)] border border-amber-700/40">
              <span className="text-[#D14538]">Software</span> <span className="text-amber-100/90">Skills</span>
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
