import React, { useState, useEffect, useRef } from "react";

export default function ContactFooter() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/mreooqva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mt-20">
      <div
        ref={ref}
        className="reveal relative bg-gradient-to-br from-[#1a1410] via-[#2d2420] to-[#1f1a15] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-amber-900/30 px-2 py-10 overflow-hidden"
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
            <p className="text-amber-200/60 text-[13px] w-full mx-auto leading-relaxed">
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
                  href="mailto:sachinbharanitharan0612@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-900/50 to-orange-900/50 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform border border-amber-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-1">Email</div>
                    <div className="text-[13px] text-amber-100 group-hover:text-amber-400 transition-colors">sachinbharanitharan0612@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+917904279322"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-900/50 to-blue-900/50 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform border border-sky-500/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-1">Phone</div>
                    <div className="text-[13px] text-amber-100 group-hover:text-sky-400 transition-colors">79042 79322</div>
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
                    <div className="text-[13px] text-amber-100">Chennai</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <div className="text-[9px] uppercase tracking-[0.16em] text-amber-200/40 mb-4">Follow Me</div>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/_sachinology_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/917904279322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 rounded-xl text-[12px] uppercase tracking-[0.16em] font-semibold shadow-lg transition-all duration-300 relative overflow-hidden ${status === 'success'
                      ? 'bg-emerald-600 text-white shadow-emerald-900/40'
                      : status === 'error'
                        ? 'bg-red-600 text-white shadow-red-900/40'
                        : 'bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-amber-900/30 hover:shadow-xl hover:shadow-amber-800/40 hover:-translate-y-0.5 active:translate-y-0'
                    } ${status === 'sending' ? 'opacity-80 cursor-wait' : ''}`}
                >
                  <span className={`flex items-center justify-center gap-2 ${status === 'sending' ? 'animate-pulse' : ''}`}>
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    )}
                    {status === 'success' && '✓ Message Received!'}
                    {status === 'error' && '✕ Failed to Send'}
                  </span>
                </button>

                {status === 'success' && (
                  <p className="text-[11px] text-emerald-400 text-center animate-fade-in font-medium tracking-wide">
                    Thank you! I'll be in touch with you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-[11px] text-red-400 text-center animate-fade-in font-medium tracking-wide">
                    Something went wrong. Please try again or reach out via email.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-amber-500/20 text-center">
            <div className="text-[10px] uppercase tracking-[0.18em] text-amber-200/40">
              <span className="font-display text-amber-100">Sachin R B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
