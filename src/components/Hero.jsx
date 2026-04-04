import React from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";
import profileImage from "../../assets/profile.jpeg";

export default function Hero() {
  return (
    <ScrollRevealSection id="intro" className="mt-0">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.8fr)] items-start relative px-1">
        {/* Left: photo frame */}
        <div className="relative px-2 z-20">
          <div className="relative rounded-[32px] p-2 bg-[#FAF9F6] shadow-2xl -rotate-2 overflow-hidden border-[8px] border-white z-20">
            <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#EAEAEA] relative z-20">
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
          <div className="hidden md:block absolute -right-14 top-10 rotate-90 font-display text-[10px] tracking-[0.4em] text-neutral-400 uppercase">
            LM DIARY
          </div>

          <h1 className="font-display text-[28px] md:text-[36px] uppercase tracking-[0.4em] flex flex-wrap gap-4 mb-4">
            <span className="px-5 py-2 rounded-full border border-black/10 shadow-[0_8px_0_rgba(209,69,56,0.3)] bg-[#E94E3D] text-white">
              SACHIN
            </span>
            <span className="px-5 py-2 rounded-full border border-black/10 shadow-[0_8px_0_rgba(180,140,100,0.3)] bg-[#D4A373] text-neutral-800">
              R B
            </span>
          </h1>

          <p className="uppercase tracking-[0.2em] text-[13px] text-amber-100 mb-5 font-bold drop-shadow-md">
            Film School Student · Director · Editor
          </p>

          {/* Cinematic Summary Panel */}
          <div className="glass-card-warm paper-texture rounded-[28px] p-6 md:px-8 md:py-10 border border-amber-900/10 w-full mb-10 relative shadow-2xl">
            <p className="text-[14px] md:text-[16px] leading-[2] text-neutral-800 font-medium tracking-wide first-line:uppercase first-line:tracking-widest">
              Hi, I am Sachin. Ever since I can remember, I have loved telling and listening to stories with the people around me.
              <br /><br />
              Films have always been something I love to watch any day, and they have a major influence on my beliefs, personality, and even my style.
              I consciously love being influenced by cinema.
              <br /><br />
              After schooling, I decided to explore this visual storytelling medium and find ways to tell my own stories. I joined a film school, where I have directed a few projects, and I am on my way to creating my masterpiece. I love to collaborate with new people, explore new environments, and learn more, and I hope I can help them as well.
            </p>
          </div>


          <div className="grid gap-5 sm:grid-cols-2 text-[15px] relative z-20">
            {/* Education Card */}
            <div className="glass-card-warm paper-texture rounded-xl p-6 border-t border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
              <h3 className="uppercase tracking-[0.25em] text-[13px] text-[#D14538] mb-5 font-bold flex items-center gap-2">
                <span className="w-2 h-5 bg-[#D14538] rounded-full inline-block" />
                Education
              </h3>
              <ul className="space-y-3 text-[#2B2B2B]">
                <li className="flex items-start gap-3">
                  <span className="text-[#E94E3D] mt-1 text-[10px]">■</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[13px]">BFA - Film Making</span>
                    <span className="text-[11px] text-[#6B5E57] font-medium mt-0.5">2023 - 2027</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E94E3D] mt-1 text-[10px]">■</span>
                  <span className="font-semibold text-[12px] leading-tight text-[#2B2B2B]">LV Prasad College of Media Studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E94E3D] mt-1 text-[10px]">■</span>
                  <span className="font-bold text-[#6B5E57] uppercase tracking-wider text-[10px]">Chennai</span>
                </li>
              </ul>
            </div>

            {/* Languages Card */}
            <div className="glass-card-warm paper-texture rounded-xl p-5 border-t border-white/40 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
              <h3 className="uppercase tracking-[0.2em] text-[11px] text-[#E94E3D] mb-4 font-bold flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#E94E3D] rounded-full inline-block" />
                Languages
              </h3>
              <ul className="space-y-4 text-[#2B2B2B]">
                <li className="flex items-center gap-3 bg-[#EAEAEA]/30 p-2 rounded-lg border border-black/5">
                  <div className="w-8 h-8 rounded-full bg-[#D14538]/10 flex items-center justify-center text-[#D14538] font-bold text-[10px]">EN</div>
                  <div>
                    <span className="font-bold text-[12px] block">English</span>
                    <span className="text-[10px] text-[#6B5E57] uppercase tracking-wide">Read · Write · Type</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-white/30 p-2 rounded-lg border border-black/5">
                  <div className="w-8 h-8 rounded-full bg-[#D4A373]/10 flex items-center justify-center text-[#D4A373] font-bold text-[10px]">TA</div>
                  <div>
                    <span className="font-bold text-[12px] block">Tamil</span>
                    <span className="text-[10px] text-[#6B5E57] uppercase tracking-wide">Read · Write</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ScrollRevealSection>
  );
}
