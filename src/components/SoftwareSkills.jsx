import React, { useEffect, useRef } from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

const skills = [
  { name: "DaVinci Resolve", level: 88, note: "Color · Edit · Grade" },
  { name: "Adobe Premiere Pro", level: 82, note: "Narrative & Reels" },
  { name: "Adobe Photoshop", level: 78, note: "Posters & Frames" },
  { name: "Adobe Lightroom", level: 75, note: "Look & Mood" },
  { name: "Final Cut Pro", level: 70, note: "Macbased Editing" },
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
    <div className="relative bg-white/90 rounded-[16px] border border-black/20 px-4 py-3 overflow-hidden">
      <span className="absolute top-1.5 right-3 text-[8px] uppercase tracking-[0.18em] text-neutral-400">
        Loading Scene
      </span>
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <div className="text-[12px] uppercase tracking-[0.12em] font-semibold">{name}</div>
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
    <ScrollRevealSection id="software" className="bg-[#fff8e8]">
      <header className="flex flex-wrap items-baseline gap-3 mb-6">
        <span className="uppercase tracking-[0.18em] text-[10px] text-neutral-600 bg-white/70 px-2 py-1 rounded-full border border-dashed border-black/20">
          Tools Of The Timeline
        </span>
        <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-[#fff0cc] px-3 py-1 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-black">
          <span className="text-accentRed">Software</span> Skills
        </h2>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map(skill => (
          <SkillMeter key={skill.name} {...skill} />
        ))}
      </div>
    </ScrollRevealSection>
  );
}
