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
          <div className="hidden md:block absolute -right-10 top-0 rotate-90 font-display text-[11px] tracking-[0.35em] text-neutral-400">
            FILM DIARY
          </div>

          <h1 className="font-display text-[26px] md:text-[30px] uppercase tracking-[0.32em] flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-full border border-black shadow-[0_8px_0_rgba(255,216,92,0.8)] bg-accentRed text-[#fffaf2]">
              SACHIN
            </span>
            <span className="px-3 py-1 rounded-full border border-black shadow-[0_8px_0_rgba(31,31,31,0.5)] bg-accentYellow">
              R B
            </span>
          </h1>

          <p className="uppercase tracking-[0.18em] text-[11px] text-neutral-600 mb-4">
            Film Direction Student · Visual Storytelling · Collaborator
          </p>

          <p className="text-sm max-w-xl mb-5 bg-white/70 border border-dashed border-black/20 rounded-[14px] px-3 py-3">
            Im a film direction student obsessed with the rhythm of images, emotions, and sound 
            building stories that feel like they were ripped from a vivid, handmade visual diary.
            I thrive on colorful frames, bold compositions, and collaborative storytelling that turns
            simple ideas into cinematic moments.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 text-[13px]">
            <div>
              <h3 className="uppercase tracking-[0.16em] text-[11px] text-neutral-600 mb-1">
                Education
              </h3>
              <ul className="space-y-1">
                <li>Diploma in Film Direction  College Name</li>
                <li>Specialization in Cinematic Storytelling</li>
                <li>Workshops in Studio & Location Filmmaking</li>
              </ul>
            </div>
            <div>
              <h3 className="uppercase tracking-[0.16em] text-[11px] text-neutral-600 mb-1">
                Languages
              </h3>
              <ul className="space-y-1">
                <li>
                  <strong>English</strong>  Read, Write, Type
                </li>
                <li>
                  <strong>Tamil</strong>  Read, Write
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
