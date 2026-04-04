import React, { useEffect, useRef } from "react";

export default function ScrollRevealSection({ id, className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} className={`mt-2 ${className}`}>
      <div
        ref={ref}
        className="section-frame reveal bg-[#fffdf7]/90 backdrop-blur-[2px] rounded-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-amber-200/20 px-1 md:px-2 py-10"
      >
        {children}
      </div>
    </section>
  );
}
