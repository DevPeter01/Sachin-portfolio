import React from "react";

// Import equipment images
import sonyCamera from "../../assets/sony-a7-iv-28-70-mm.jpg";
import macMini from "../../assets/apple-mac-mini-m4-pro-computer-tower-EKrMyzA-600.jpg";

export default function Equipment() {
  return (
    <section id="equipment" className="mt-20">
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#09121d] to-[#04080e] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#00BBF9]/20 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden">
        {/* Animated Water Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#00F5D4]/20 rounded-full animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-[#00BBF9]/10 rounded-full animate-pulse delay-500 blur-3xl" />
          
          {/* Bubbles */}
          <div className="absolute top-10 right-10 w-4 h-4 rounded-full border border-white/20 animate-bounce"></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 rounded-full border border-white/10 animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 rounded-full border border-white/5 animate-pulse delay-700"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-3 mb-6">
            <span className="uppercase tracking-[0.18em] text-[10px] text-[#00F5D4] bg-white/5 px-3 py-1.5 rounded-sm border border-dashed border-[#00F5D4]/30 font-bold">
              Tools Of The Trade
            </span>
            <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] px-4 py-1.5 rounded-sm shadow-[0_8px_0_rgba(0,245,212,0.3)] border border-[#00F5D4]/40">
              Equipment <span className="text-[#0a192f]/70">I Own</span>
            </h2>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 ocean-glass rounded-[18px] border border-white/10 shadow-[0_12px_0_rgba(0,0,0,0.3)] overflow-hidden hover:border-[#00F5D4] transition-all duration-300 group">
              <div className="relative bg-gradient-to-br from-[#00F5D4]/20 to-[#00BBF9]/20 flex items-center justify-center p-3 overflow-hidden">
                <img 
                  src={sonyCamera} 
                  alt="Sony Alpha A7 Mark IV" 
                  className="w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 shadow-lg"
                />
                <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-[#0a192f]/90 text-white px-2 py-1 rounded-sm border border-[#00F5D4]/30">
                  Sony Alpha A7 Mark IV
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col justify-center gap-2">
                <div className="text-[13px] uppercase tracking-[0.16em] font-bold text-white">
                  Sony Alpha A7 Mark IV
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#00BBF9] font-bold">
                  Primary Camera · Full Frame
                </div>
              </div>
            </article>

            <article className="grid grid-cols-[1.1fr_1.2fr] gap-2 ocean-glass rounded-[18px] border border-white/10 shadow-[0_12px_0_rgba(0,0,0,0.3)] overflow-hidden hover:border-[#00F5D4] transition-all duration-300 group">
              <div className="relative bg-gradient-to-br from-[#00BBF9]/20 to-[#00F5D4]/20 flex items-center justify-center p-3 overflow-hidden">
                <img 
                  src={macMini} 
                  alt="Mac M4" 
                  className="w-full h-full object-cover rounded-[12px] group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0 shadow-lg"
                />
                <div className="absolute bottom-2 right-3 text-[9px] uppercase tracking-[0.14em] bg-[#0a192f]/90 text-white px-2 py-1 rounded-sm border border-[#00BBF9]/30">
                  Mac M4
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col justify-center gap-2">
                <div className="text-[13px] uppercase tracking-[0.16em] font-bold text-white">
                  Mac M4
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] text-[#00BBF9] font-bold">
                  Editing & Sound Workstation
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
