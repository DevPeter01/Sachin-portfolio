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
    <div className="group relative ocean-glass rounded-xl border border-white/10 px-5 py-4 overflow-hidden transition-all duration-500 hover:border-[#00F5D4]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1">
      {/* Decorative underwater light flicker */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00BBF9]/5 blur-[30px] rounded-full group-hover:bg-[#00F5D4]/10 transition-colors duration-700" />
      
      <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
        <div className="flex flex-col">
          <div className="text-[14px] uppercase tracking-[0.16em] font-bold text-white group-hover:text-[#00F5D4] transition-colors">
            {name}
          </div>
          <div className="text-[10px] uppercase tracking-[0.12em] text-[#00BBF9]/60 font-bold mt-0.5">
            {note}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#00F5D4] font-bold mb-1 drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]">
            Status: Syncing
          </span>
          <div className="text-[11px] font-mono text-[#00BBF9] font-bold">
            {level}%
          </div>
        </div>
      </div>

      <div className="relative h-1.5 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 relative z-10">
        <div
          ref={barRef}
          className="h-full w-0 rounded-full bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#00F5D4] bg-[length:200%_100%] animate-shimmer transition-[width] duration-1000 ease-out relative"
        >
          {/* Glowing head of the progress bar */}
          <div className="absolute right-0 top-0 bottom-0 w-4 shadow-[0_0_15px_#00F5D4] bg-white opacity-40 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function SoftwareSkills() {
  return (
    <section id="software" className="mt-20">
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#09121d] to-[#04080e] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#00BBF9]/20 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden">
        {/* Deep Sea Ripples */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#00F5D4]/20 rounded-full animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-[#00BBF9]/10 rounded-full animate-pulse delay-500 blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-3 mb-8">
            <h2 className="font-display text-[20px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] px-5 py-2 rounded-sm shadow-[0_8px_0_rgba(0,245,212,0.3)] border border-[#00F5D4]/40">
              Software <span className="text-[#0a192f]/70">Skills</span>
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
