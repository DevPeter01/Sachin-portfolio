import React from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";
import profileImage from "../../assets/profile.jpeg";

export default function Hero() {
  return (
    <ScrollRevealSection id="intro" className="mt-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-center relative">
        {/* Left: photo frame */}
        <div className="relative px-4 z-20">
          <div className="relative rounded-[26px] p-2 bg-white shadow-soft -rotate-2 overflow-hidden border-4 border-sky-400 z-20">
            <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-white relative z-20">
              <img 
                src={profileImage} 
                alt="Sachin R B" 
                className="w-full h-full object-cover relative z-20"
              />
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="relative py-2">
          <div className="hidden md:block absolute -right-10 top-0 rotate-90 font-display text-[11px] tracking-[0.35em] text-neutral-500">
            FILM DIARY
          </div>

          <h1 className="font-display text-[26px] md:text-[30px] uppercase tracking-[0.32em] flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-full border border-black shadow-[0_8px_0_rgba(255,216,92,0.8)] bg-accentRed text-[#fffaf2]">
              SACHIN
            </span>
            <span className="px-3 py-1 rounded-full border border-black shadow-[0_8px_0_rgba(31,31,31,0.5)] bg-accentYellow text-neutral-800">
              R B
            </span>
          </h1>

          <p className="uppercase tracking-[0.18em] text-[11px] text-neutral-700 mb-4 font-medium">
            Film Direction Student · Visual Storytelling · Collaborator
          </p>

          <p className="text-sm max-w-xl mb-5 bg-amber-50 border border-dashed border-amber-300 rounded-[14px] px-4 py-3 text-neutral-700 leading-relaxed">
            I'm a film direction student obsessed with the rhythm of images, emotions, and sound —
            building stories that feel like they were ripped from a vivid, hand-made visual diary.
            I thrive on colorful frames, bold compositions, and collaborative storytelling that turns
            simple ideas into cinematic moments.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-[13px]">
            <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-200/50">
              <h3 className="uppercase tracking-[0.16em] text-[11px] text-neutral-700 mb-2 font-semibold">
                Education
              </h3>
              <ul className="space-y-1.5 text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Diploma in Film Direction — College Name</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Specialization in Cinematic Storytelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span>Workshops in Studio & Location Filmmaking</span>
                </li>
              </ul>
            </div>
            <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-200/50">
              <h3 className="uppercase tracking-[0.16em] text-[11px] text-neutral-700 mb-2 font-semibold">
                Languages
              </h3>
              <ul className="space-y-1.5 text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span><strong className="text-neutral-900">English</strong> — Read, Write, Type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">▸</span>
                  <span><strong className="text-neutral-900">Tamil</strong> — Read, Write</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
