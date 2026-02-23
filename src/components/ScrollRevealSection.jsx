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
    <section id={id} className={`mt-20 ${className}`}>
      <div
        ref={ref}
        className="section-frame reveal bg-white/95 backdrop-blur-sm rounded-paper shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 px-6 py-8 sm:px-8 sm:py-10"
      >
        {children}
      </div>
    </section>
  );
}
