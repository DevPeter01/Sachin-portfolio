import React, { useState, useEffect, useRef } from "react";

export default function ContactFooter() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:youremail@example.com?subject=Contact from Portfolio&body=${encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="mt-20">
      <div 
        ref={ref}
        className="reveal relative bg-gradient-to-br from-[#1a1410] via-[#2d2420] to-[#1f1a15] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-amber-900/30 px-8 py-10 sm:px-12 sm:py-12 overflow-hidden"
      >
        {/* Background film elements */}
        <div className="absolute inset-0 opacity-10">
          {/* Film strip pattern */}
          <div className="absolute top-4 left-4 w-32 h-24 border-2 border-amber-500/50 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-8 right-8 w-24 h-20 border-2 border-amber-500/50 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-6 left-1/4 w-20 h-16 border-2 border-amber-500/50 rounded-lg transform rotate-3"></div>
          <div className="absolute bottom-10 right-12 w-28 h-20 border-2 border-amber-500/50 rounded-lg transform -rotate-6"></div>
          
          {/* Film reels */}
          <div className="absolute top-20 right-1/4 w-16 h-16 border-4 border-amber-500/30 rounded-full"></div>
          <div className="absolute bottom-16 left-12 w-12 h-12 border-4 border-amber-500/30 rounded-full"></div>
          
          {/* Clapperboard silhouette */}
          <div className="absolute top-1/3 left-8 w-10 h-12 bg-amber-500/20 rounded-sm transform -rotate-12"></div>
          <div className="absolute bottom-1/4 right-16 w-8 h-10 bg-amber-500/20 rounded-sm transform rotate-6"></div>
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,90,43,0.15)_0%,transparent_70%)]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-[28px] md:text-[32px] uppercase tracking-[0.2em] text-amber-100 mb-3">
              Let's Connect
            </h2>
            <p className="text-amber-200/60 text-[13px] max-w-md mx-auto leading-relaxed">
              Have a project in mind or just want to say hi? Drop me a message and I'll get back to you soon.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            
            {/* Left: Contact Info */}
            <div className="space-y-8">
              
              {/* Availability */}
              <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.14em] text-emerald-300 font-medium">
                  Available for Projects
                </span>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <a 
                  href="mailto:youremail@example.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform border border-amber-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-1">Email</div>
                    <div className="text-[13px] text-amber-100 group-hover:text-amber-400 transition-colors">youremail@example.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+910000000000"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-900/50 to-blue-900/50 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform border border-sky-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-1">Phone</div>
                    <div className="text-[13px] text-amber-100 group-hover:text-sky-400 transition-colors">+91-00000-00000</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-900/50 to-pink-900/50 flex items-center justify-center text-red-400 border border-red-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-1">Location</div>
                    <div className="text-[13px] text-amber-100">India</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-4">Follow Me</div>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gradient-to-br from-[#3d3020] to-[#2a2218] rounded-2xl p-6 sm:p-8 border border-amber-500/20">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-amber-200/50 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1410] border-2 border-amber-500/20 rounded-xl text-[13px] text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-amber-200/50 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1410] border-2 border-amber-500/20 rounded-xl text-[13px] text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-amber-200/50 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a1410] border-2 border-amber-500/20 rounded-xl text-[13px] text-amber-100 placeholder-amber-200/30 focus:outline-none focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-red-500 text-white text-[12px] uppercase tracking-[0.16em] font-semibold rounded-xl shadow-lg shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-800/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-amber-500/20 text-center">
            <div className="text-[10px] uppercase tracking-[0.18em] text-amber-200/40">
              <span className="font-display text-amber-100">Sachin R B</span>
              <span className="mx-3">·</span>
              <span>Film Direction Student</span>
              <span className="mx-3">·</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
