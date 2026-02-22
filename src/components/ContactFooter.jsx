import React from "react";

export default function ContactFooter() {
  return (
    <section id="contact" className="mt-20">
      <div className="reveal rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.18)] px-6 py-7 sm:px-8 sm:py-9 relative overflow-hidden bg-[radial-gradient(circle_at_10%_0%,#ffe1b0,#ff7aa2_45%,#4a90e2_95%)] text-[#fffaf5]">
        <div className="absolute -right-10 top-3 rotate-[-18deg] font-display text-[18px] tracking-[0.28em] uppercase text-white/25">
          End Credits
        </div>

        <div className="relative z-10 flex flex-wrap gap-6">
          <div className="flex-1 min-w-[220px]">
            <h2 className="font-display text-[22px] uppercase tracking-[0.22em] mb-2">
              Contact Me
            </h2>
            <p className="text-[13px]">
              Lets build something bold, colorful, and cinematic together.
            </p>
          </div>

          <div className="flex-1 min-w-[260px] grid gap-3 text-[13px]">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Email</div>
              <div>youremail@example.com</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Phone</div>
              <div>+91-00000-00000</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Social</div>
              <div className="flex flex-wrap gap-2 mt-1 text-[11px] uppercase tracking-[0.14em]">
                <a
                  href="#"
                  className="px-3 py-1 rounded-full border border-white/80 bg-white/10 hover:bg-white/25"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="px-3 py-1 rounded-full border border-white/80 bg-white/10 hover:bg-white/25"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="px-3 py-1 rounded-full border border-white/80 bg-white/10 hover:bg-white/25"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-5 text-[10px] uppercase tracking-[0.18em] opacity-80">
          Portfolio · Film Direction Student · Visual Diary Edition
        </div>
      </div>
    </section>
  );
}
