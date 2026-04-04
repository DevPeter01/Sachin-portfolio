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
        className="reveal relative bg-gradient-to-br from-[#0a192f] via-[#09121d] to-[#04080e] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#00BBF9]/20 px-8 py-10 sm:px-12 sm:py-12 overflow-hidden"
      >
        {/* Animated Water Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#00F5D4]/20 rounded-full animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-[#00BBF9]/10 rounded-full animate-pulse delay-500 blur-3xl" />
          
          {/* Aquatic Kelp Silhouettes */}
          <div className="absolute -bottom-10 -left-10 w-40 h-64 border-r-2 border-t-2 border-[#00F5D4]/30 rounded-[100%_0%_100%_0%/100%_0%_100%_0%] animate-pulse"></div>
          <div className="absolute -top-10 -right-10 w-40 h-64 border-l-2 border-b-2 border-[#00BBF9]/30 rounded-[0%_100%_0%_100%/0%_100%_0%_100%] animate-pulse delay-700"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-display text-[28px] md:text-[32px] uppercase tracking-[0.2em] text-white mb-3">
              Let's <span className="bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-[#00BBF9]/60 text-[13px] max-w-md mx-auto leading-relaxed font-bold">
              Have a project in mind or just want to say hi? Drop me a message and I'll get back to you soon.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            
            {/* Left: Contact Info */}
            <div className="space-y-8">
              
              {/* Availability */}
              <div className="inline-flex items-center gap-2 bg-[#00F5D4]/10 border border-[#00F5D4]/30 rounded-sm px-4 py-2">
                <span className="w-2 h-2 bg-[#00F5D4] rounded-full animate-pulse shadow-[0_0_8px_#00F5D4]" />
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#00F5D4] font-bold">
                  Available for Projects
                </span>
              </div>

              {/* Contact Details */}
              <div className="space-y-5">
                <a 
                  href="mailto:sachinbharanitharan0612@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm ocean-glass flex items-center justify-center text-[#00F5D4] group-hover:scale-105 transition-transform border border-[#00F5D4]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#00BBF9]/40 mb-1 font-bold">Email</div>
                    <div className="text-[13px] text-white group-hover:text-[#00F5D4] transition-colors font-bold">sachinbharanitharan0612@gmail.com</div>
                  </div>
                </a>

                <a 
                  href="tel:+917904279322"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-sm ocean-glass flex items-center justify-center text-[#00BBF9] group-hover:scale-105 transition-transform border border-[#00BBF9]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#00BBF9]/40 mb-1 font-bold">Phone</div>
                    <div className="text-[13px] text-white group-hover:text-[#00BBF9] transition-colors font-bold">79042 79322</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm ocean-glass flex items-center justify-center text-[#00F5D4] border border-[#00F5D4]/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.16em] text-[#00BBF9]/40 mb-1 font-bold">Location</div>
                    <div className="text-[13px] text-white font-bold">Chennai</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <div className="text-[9px] uppercase tracking-[0.16em] text-[#00BBF9]/40 mb-4 font-bold">Follow Me</div>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/_sachinology_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#00BBF9] to-[#00F5D4] flex items-center justify-center text-[#0a192f] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,245,212,0.4)] transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/917904279322" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-sm bg-[#00F5D4] flex items-center justify-center text-[#0a192f] hover:scale-110 hover:shadow-[0_0_15px_rgba(0,245,212,0.4)] transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="ocean-glass rounded-2xl p-6 sm:p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#00BBF9]/50 mb-2 font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-sm text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4] transition-all font-bold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.16em] text-[#00BBF9]/50 mb-2 font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-sm text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4] transition-all font-bold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.16em] text-[#00BBF9]/50 mb-2 font-bold">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a192f] border border-white/10 rounded-sm text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-[#00F5D4] transition-all resize-none font-bold"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-4 rounded-sm text-[12px] uppercase tracking-[0.2em] font-bold shadow-lg transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    status === 'success' 
                      ? 'bg-emerald-500 text-[#0a192f] shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                      : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] shadow-[0_0_15px_rgba(0,245,212,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                  } ${status === 'sending' ? 'opacity-80 cursor-wait' : ''}`}
                >
                  <span className={`flex items-center justify-center gap-2 ${status === 'sending' ? 'animate-pulse' : ''}`}>
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && (
                      <>
                        <svg className="animate-spin h-4 w-4 text-[#0a192f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                  <p className="text-[11px] text-emerald-400 text-center animate-fade-in font-bold tracking-wide">
                    Thank you! I'll be in touch with you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-[11px] text-red-100 text-center animate-fade-in font-bold tracking-wide">
                    Something went wrong. Please try again or reach out via email.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-white/5 text-center">
            <div className="text-[10px] uppercase tracking-[1em] text-[#00BBF9]/30 font-bold ml-[1em]">
              <span className="font-display">Sachin R B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
