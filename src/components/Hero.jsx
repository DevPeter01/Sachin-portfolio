import React from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";
import profileImage from "../../assets/profile.jpeg";

export default function Hero() {
  return (
    <ScrollRevealSection id="intro" className="mt-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] items-center relative">
        {/* Left: photo frame */}
        <div className="relative px-4 z-20">
          <div className="relative rounded-[26px] p-2 bg-white/10 backdrop-blur-sm shadow-soft -rotate-2 overflow-hidden border-4 border-[#00BBF9] z-20">
            <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden bg-[#0a192f] relative z-20">
              <img 
                src={profileImage} 
                alt="Sachin R B" 
                className="w-full h-full object-cover relative z-20 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
            </div>
          </div>
          {/* Subtle glow behind photo */}
          <div className="absolute inset-x-10 bottom-[-10px] h-20 bg-[#00F5D4]/20 blur-3xl -z-10 rounded-full" />
        </div>

        {/* Right: text */}
        <div className="relative py-2">
          <div className="hidden md:block absolute -right-10 top-0 rotate-90 font-display text-[11px] tracking-[0.35em] text-[#00BBF9]/40">
            MARITIME DIARY
          </div>

          <h1 className="font-display text-[26px] md:text-[30px] uppercase tracking-[0.32em] flex flex-wrap gap-2 mb-3">
            <span className="px-3 py-1 rounded-sm border border-[#00BBF9]/30 shadow-[0_8px_0_rgba(0,245,212,0.3)] bg-[#00F5D4] text-[#0a192f]">
              SACHIN
            </span>
            <span className="px-3 py-1 rounded-sm border border-[#00BBF9]/30 shadow-[0_8px_0_rgba(0,187,249,0.3)] bg-[#00BBF9] text-white">
              R B
            </span>
          </h1>

          <p className="uppercase tracking-[0.2em] text-[13px] text-[#00F5D4] mb-5 font-bold drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]">
            Film School Student · Director · Editor
          </p>

          {/* Ocean Summary Panel */}
          <div className="ocean-glass rounded-[16px] p-5 md:p-6 border-l-4 border-l-[#00F5D4] max-w-2xl mb-8 relative shadow-lg">
            <div className="absolute -top-3 -left-2 text-4xl text-[#00F5D4]/20 font-serif">"</div>
            <p className="text-[13px] md:text-[15px] leading-[1.8] text-blue-50 italic font-medium tracking-wide">
              Hi, I am Sachin. Ever since I can remember, I have loved telling and listening to stories with the people around me.
              <br /><br />
              Films have always been something I love to watch any day, and they have a major influence on my beliefs, personality, and even my style.
              I consciously love being influenced by cinema.
              <br /><br />
              After schooling, I decided to explore this visual storytelling medium and find ways to tell my own stories. I joined a film school, where I have directed a few projects, and I am on my way to creating my masterpiece. I love to collaborate with new people, explore new environments, and learn more, and I hope I can help them as well.
            </p>
            <div className="absolute -bottom-5 -right-1 text-4xl text-[#00F5D4]/20 font-serif">"</div>
          </div>


          <div className="grid gap-5 sm:grid-cols-2 text-[15px] relative z-20">
            {/* Education Card */}
            <div className="ocean-glass rounded-xl p-6 border-t border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
              <h3 className="uppercase tracking-[0.25em] text-[13px] text-[#00F5D4] mb-5 font-bold flex items-center gap-2">
                <span className="w-2 h-5 bg-[#00F5D4] rounded-full inline-block" />
                Education
              </h3>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1 text-[10px]">■</span>
                  <div className="flex flex-col">
                    <span className="font-bold text-[13px]">BFA - Film Making</span>
                    <span className="text-[11px] text-[#00BBF9]/70 font-medium mt-0.5">2023 - 2027</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1 text-[10px]">■</span>
                  <span className="font-semibold text-[12px] leading-tight text-blue-50">LV Prasad College of Media Studies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00F5D4] mt-1 text-[10px]">■</span>
                  <span className="font-bold text-[#00BBF9]/70 uppercase tracking-wider text-[10px]">Chennai</span>
                </li>
              </ul>
            </div>

            {/* Languages Card */}
            <div className="ocean-glass rounded-xl p-5 border-t border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group">
              <h3 className="uppercase tracking-[0.2em] text-[11px] text-[#00BBF9] mb-4 font-bold flex items-center gap-2">
                <span className="w-1.5 h-4 bg-[#00BBF9] rounded-full inline-block" />
                Languages
              </h3>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-center gap-3 bg-white/10 p-2 rounded-lg border border-[#00F5D4]/10">
                  <div className="w-8 h-8 rounded-full bg-[#00F5D4]/20 flex items-center justify-center text-[#00F5D4] font-bold text-[10px]">EN</div>
                  <div>
                    <span className="font-bold text-[12px] block">English</span>
                    <span className="text-[10px] text-[#00BBF9]/70 uppercase tracking-wide">Read · Write · Type</span>
                  </div>
                </li>
                <li className="flex items-center gap-3 bg-white/10 p-2 rounded-lg border border-[#00BBF9]/10">
                  <div className="w-8 h-8 rounded-full bg-[#00BBF9]/20 flex items-center justify-center text-[#00BBF9] font-bold text-[10px]">TA</div>
                  <div>
                    <span className="font-bold text-[12px] block">Tamil</span>
                    <span className="text-[10px] text-[#00BBF9]/70 uppercase tracking-wide">Read · Write</span>
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
