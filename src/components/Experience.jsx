import React, { useState } from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

const workCategories = [
  {
    id: "direction",
    title: "Direction",
    color: "#00BBF9", // Ocean Blue
    description: "Direction has always been my core interest. I still keep trying and figuring out my style, and these are some projects I've been working on recently, trying to learn passionately.",
    projects: [
      {
        title: "Dialogue Project",
        role: "Director",
        note: "LV Prasad Project",
        year: "2025",
        screenshots: 4,
        images: [
          "/movieSS/dialogue-1.jpeg",
          "/movieSS/dialogue-2.jpeg",
          "/movieSS/dialogue-3.jpeg",
          "/movieSS/dialogue-4.jpeg"
        ],
        description: "This is my college 2nd year project, I have written and directed it, and we shot the entire film at the interior studio set of my college, we also did live sound for this film. This gave me a lot of experience and I have made many mistakes in it and am sure am not doing those again."
      }
    ]
  },
  {
    id: "editing",
    title: "Editing",
    color: "#00F5D4", // Aqua
    description: "Editing is where stories find their heartbeat. I approach each cut with intention, focusing on emotional continuity and narrative flow using DaVinci Resolve and Premiere Pro.",
    whyILove: `After directing, I usually edit my own projects and the videos I shoot. Over time, I’ve developed a deep love for editing—I can spend hours completely immersed in it without even noticing the time. For me, editing is one of the most important aspects of visual storytelling, as it shapes the rhythm, emotion, and impact of a narrative. I constantly watch great works to learn from them, and I enjoy experimenting with different styles and techniques to improve my craft.`,
    workExperience: [
      { title: "College Projects", items: ["Documentary", "Short Films"] },
      { title: "Paid Works", items: ["Youtube video", "Social media reels"] }
    ],
    software: [
      { name: "DaVinci Resolve", level: 90 },
      { name: "Adobe Premiere Pro", level: 85 },
      { name: "Final Cut Pro", level: 75 },
      { name: "After Effects", level: 70 }
    ]
  },
  {
    id: "sound",
    title: "Sound",
    color: "#5F0FFF", // Electric Purple
    description: "Sound design transforms good films into unforgettable experiences. I approach audio as a storytelling layer that operates alongside the visual narrative.",
    skills: [
      {
        title: "Live Sound Equipment Handling",
        description: "Experienced in setting up and operating professional live sound equipment for film shoots, events, and studio recordings. Proficient with mixing consoles, wireless systems, and monitoring setups.",
        items: ["Portable recorder", "boom rod", "short gun microphone", "cables", "lapel microphones"]
      },
      {
        title: "Sound Recording & Dubbing",
        description: "Skilled in professional sound recording techniques for film and video production. Experienced in ADR (Automated Dialogue Replacement) and dubbing workflows.",
        items: ["Pro Tools"]
      },
    ],
    software: [
      { name: "Pro Tools", level: 60 },
      { name: "Logic Pro", level: 65 }
    ],
    projects: [
      {
        title: "Dialogue Clean-up Projects",
        role: "Sound Designer",
        note: "Student films",
        year: "2024"
      },
      {
        title: "Ambient Sound Layers",
        role: "Sound Designer",
        note: "Studio sets",
        year: "2024"
      },
      {
        title: "Foley Recording Sessions",
        role: "Foley Artist",
        note: "Independent",
        year: "2023"
      }
    ]
  },
  {
    id: "photography",
    title: "Photography",
    color: "#FF7A00", // Coral
    description: "Photography is my way of studying light and composition — essential tools for any filmmaker. Each photograph teaches me something new about framing and visual rhythm.",
    whyPhotography: `I love capturing the beautiful moments around me. It feels like I’m freezing those moments in time and sharing them for others to see and feel. I take pictures of the people I love, the places I travel to, and moments from events—big or small. Photography gives me a sense of joy I’ve truly felt, and it’s a feeling I always want to experience again and again.`,
    works: [
      { title: "Portrait Sessions", note: "Natural light portraits" },
      { title: "Location Scouts", note: "Film location documentation" },
      { title: "Event Coverage", note: "Behind-the-scenes moments" },
      { title: "Street Photography", note: "Urban stories captured" },
      { title: "Product Shots", note: "Commercial work" }
    ],
    images: [
      "/photography/photography-1.jpeg",
      "/photography/photography-2.jpeg",
      "/photography/photography-3.jpeg",
      "/photography/photography-4.jpeg",
      "/photography/photography-5.jpeg"
    ],
    instagram: "https://www.instagram.com/_sachinology_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    projects: [
      {
        title: "Faces of Campus",
        role: "Portrait Series",
        note: "12 portraits",
        year: "2024"
      },
      {
        title: "Location Scouts",
        role: "Unit Photographer",
        note: "5 locations",
        year: "2024"
      },
      {
        title: "BTS Stills",
        role: "Set Photographer",
        note: "Multiple sets",
        year: "2023"
      }
    ]
  }
];

const colorClasses = {
  accentRed: {
    tab: "bg-accentRed text-white border-accentRed",
    badge: "bg-accentRed text-white"
  },
  accentBlue: {
    tab: "bg-accentBlue text-white border-accentBlue",
    badge: "bg-accentBlue text-white"
  },
  accentTeal: {
    tab: "bg-accentTeal text-black border-accentTeal",
    badge: "bg-accentTeal text-black"
  },
  accentYellow: {
    tab: "bg-accentYellow text-black border-accentYellow",
    badge: "bg-accentYellow text-black"
  }
};

// Software Icons as SVG components
const SoftwareIcon = ({ name }) => {
  const icons = {
    "DaVinci Resolve": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
        <path d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z" fill="currentColor" />
      </svg>
    ),
    "Adobe Premiere Pro": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2" />
        <path d="M8 7h2v10H8V7zm3 5c0-2 1.5-4 4-4 1.5 0 2.5.5 3 1l-1 1.5c-.5-.3-1-.5-1.5-.5-1 0-2 1-2 2.5s1 2.5 2 2.5c.5 0 1-.2 1.5-.5l1 1.5c-.5.5-1.5 1-3 1-2.5 0-4-2-4-4z" fill="currentColor" />
      </svg>
    ),
    "Final Cut Pro": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2" />
        <path d="M7 6h4l6 6-6 6H7l6-6-6-6z" fill="currentColor" />
      </svg>
    ),
    "After Effects": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2" />
        <path d="M7 16l3-8h2l3 8h-2l-.5-2h-3l-.5 2H7zm2.5-3h2l-1-3-1 3z" fill="currentColor" />
      </svg>
    )
  };
  return icons[name] || null;
};

// Sound Modal Component
function SoundModal({ data, onClose }) {
  if (!data) return null;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  // Software logos as SVG
  const SoftwareLogo = ({ name }) => {
    const logos = {
      "Pro Tools": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="#1A1A2E" />
          <text x="50" y="58" textAnchor="middle" fill="#00D4AA" fontSize="24" fontWeight="bold" fontFamily="Arial">PT</text>
        </svg>
      ),
      "Audacity": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="#0099CC" />
          <path d="M25 50 L40 35 L40 65 Z" fill="white" />
          <rect x="45" y="35" width="5" height="30" fill="white" />
          <rect x="55" y="35" width="5" height="30" fill="white" />
          <rect x="65" y="35" width="5" height="30" fill="white" />
          <path d="M75 50 L60 35 L60 65 Z" fill="white" />
        </svg>
      ),
      "Adobe Audition": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="#00005B" />
          <text x="50" y="62" textAnchor="middle" fill="#9999FF" fontSize="28" fontWeight="bold" fontFamily="Arial">Au</text>
        </svg>
      ),
      "Logic Pro": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="linear-gradient(135deg, #333, #666)" />
          <rect width="100" height="100" rx="15" fill="#1E1E1E" />
          <circle cx="50" cy="50" r="25" stroke="#A8E6CF" strokeWidth="3" fill="none" />
          <rect x="45" y="35" width="10" height="20" fill="#A8E6CF" />
        </svg>
      )
    };
    return logos[name] || null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="ocean-glass-dark rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#00BBF9]/30 relative animate-fade-slide"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#5F0FFF] to-[#00BBF9] text-white shadow-[0_0_15px_rgba(95,15,255,0.4)] border border-[#5F0FFF]/40 hover:scale-105 transition-all duration-300 cursor-default">
              Sound
            </span>
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#00BBF9] font-bold">
              Skills & Expertise
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00F5D4] hover:text-[#0a192f] hover:border-[#00F5D4] transition-all duration-300 text-xl font-light z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 custom-scrollbar">
          {/* Skills Section */}
          {data.skills.map((skill, idx) => (
            <div key={idx} className="glass-card-warm rounded-[16px] p-6 border border-[#C97C5D]/20">
              <div className="flex items-start gap-4">
                {/* Number badge */}
                <span className="w-9 h-9 rounded-full bg-[#E94E3D]/10 text-[#E94E3D] text-[14px] flex items-center justify-center font-bold shrink-0 border border-[#E94E3D]/20">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[16px] uppercase tracking-[0.2em] mb-2 text-[#E94E3D] font-bold">
                    {skill.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#6B5E57] mb-4">
                    {skill.description}
                  </p>

                  {/* Items/Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-[11px] uppercase tracking-[0.14em] bg-white/40 text-[#2B2B2B] px-4 py-2 rounded-full border border-black/5 hover:border-[#E94E3D]/30 transition-colors font-bold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Software Section */}
          <div className="bg-white/30 backdrop-blur-md rounded-[16px] p-6 border border-black/5">
            <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-5 text-[#6B5E57] font-bold">
              Software Engine
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.software.map((sw, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 rounded-[14px] p-4 border border-black/5 hover:border-[#E94E3D]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <SoftwareLogo name={sw.name} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#2B2B2B] text-center">
                      {sw.name}
                    </span>
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4A373] to-[#C97C5D] transition-all duration-1000"
                        style={{ width: `${sw.level}%` }}
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.12em] text-[#6B5E57] font-medium">
                      {sw.level}% Sync
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Photography Modal Component
function PhotographyModal({ data, onClose }) {
  if (!data) return null;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="ocean-glass-dark rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#00BBF9]/30 relative animate-fade-slide"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#FF7A00] to-[#E94E3D] text-white shadow-[0_0_15px_rgba(255,122,0,0.4)] border border-[#FF7A00]/40 hover:scale-105 transition-all duration-300 cursor-default">
              Photography
            </span>
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#FF7A00] font-bold">
              Visual Stories
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#FF7A00] hover:text-white hover:border-[#FF7A00] transition-all duration-300 text-xl font-light z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 custom-scrollbar">
          {/* Why Photography - Two Column Layout */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-6">
            {/* Left: Why Photography */}
            <div className="ocean-glass rounded-[16px] p-6 border-l-4 border-l-[#FF7A00]">
              <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-4 text-[#FF7A00] font-bold">
                Why Photography
              </h3>
              <div className="space-y-3">
                {data.whyPhotography.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-[16px] leading-relaxed text-blue-50 italic font-medium">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Some of My Works */}
            <div className="bg-white/5 backdrop-blur-md rounded-[16px] p-6 border border-white/10">
              <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-4 text-[#00F5D4] font-bold">
                Some of My Works
              </h3>
              <ul className="space-y-3">
                {data.works.map((work, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-blue-100/60">
                    <span className="text-[#00BBF9] mt-1.5 text-[11px]">●</span>
                    <div>
                      <span className="font-bold text-white">{work.title}</span>
                      <span className="text-[12px] text-blue-200/40 ml-2 font-medium">— {work.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Works Gallery - 5 Images */}
          <div className="glass-card-warm rounded-[16px] p-6 border border-[#C97C5D]/20">
            <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-5 text-[#D4A373] font-bold">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {(data.images || Array.from({ length: 5 })).map((img, idx) => (
                <div
                  key={idx}
                  className={`aspect-square rounded-[12px] overflow-hidden border-2 transition-all duration-300 cursor-pointer group hover-cinematic shadow-md ${data.images
                    ? "border-black/5"
                    : "bg-white/40 border-dashed border-[#C97C5D]/30 flex flex-col items-center justify-center gap-2 hover:border-[#E94E3D]"
                    }`}
                >
                  {data.images ? (
                    <div className="relative w-full h-full">
                      <img
                        src={img}
                        alt={`Photography ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#D4A373]/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  ) : (
                    <>
                      <svg
                        className="w-6 h-6 text-[#D4A373]/60 group-hover:text-[#E94E3D] transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[8px] uppercase tracking-[0.1em] text-[#6B5E57] group-hover:text-[#2B2B2B] text-center px-1">
                        {data.works[idx]?.title.split(' ')[0] || "Photo"}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Profile Link */}
          <div className="bg-gradient-to-r from-[#E94E3D] to-[#BC2A8D] rounded-[16px] p-6 border-glow-red">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-[13px] uppercase tracking-[0.16em] text-white font-bold">
                    Follow My Work
                  </h3>
                  <p className="text-[11px] text-white/90">
                    See more photography on Instagram
                  </p>
                </div>
              </div>
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white text-[#2B2B2B] text-[11px] uppercase tracking-[0.14em] rounded-full font-bold hover:bg-[#F5E6D3] transition-all duration-300 shadow-md"
              >
                Visit Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Editing Modal Component
function EditingModal({ data, onClose }) {
  if (!data) return null;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="ocean-glass-dark rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#00BBF9]/30 relative animate-fade-slide"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="font-display text-[15px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] shadow-[0_0_15px_rgba(0,245,212,0.4)] border border-[#00F5D4]/40 hover:scale-105 transition-all duration-300 cursor-default">
              Editing
            </span>
            <span className="text-[12px] uppercase tracking-[0.18em] text-[#00F5D4] font-bold hidden sm:block">
              Work Experience & Skills
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00F5D4] hover:text-[#0a192f] hover:border-[#00F5D4] transition-all duration-300 text-xl font-light z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-8 custom-scrollbar">
          {/* Work Experience Section */}
          <div className="glass-card-warm rounded-[16px] p-6 border border-[#C97C5D]/20">
            <h3 className="font-display text-[16px] uppercase tracking-[0.25em] mb-6 text-[#E94E3D] font-bold">
              Work Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {data.workExperience.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-[#E94E3D]/10 text-[#E94E3D] text-[12px] flex items-center justify-center font-bold border border-[#E94E3D]/20">
                      {idx + 1}
                    </span>
                    <span className="text-[14px] uppercase tracking-[0.18em] font-bold text-[#2B2B2B]">
                      {section.title}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-[#6B5E57] hover:text-[#2B2B2B] transition-colors">
                        <span className="text-[#E94E3D] mt-1.5 text-[11px]">■</span>
                        <span className="tracking-wide leading-relaxed font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Software Section */}
          <div className="bg-white/30 backdrop-blur-md rounded-[16px] p-6 border border-black/5">
            <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-5 text-[#6B5E57] font-bold">
              Software Engine
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.software.map((sw, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 rounded-[14px] p-4 border border-black/5 hover:border-[#E94E3D]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-[#E94E3D] group-hover:scale-110 transition-transform duration-300">
                      <SoftwareIcon name={sw.name} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-bold text-[#2B2B2B] text-center">
                      {sw.name}
                    </span>
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4A373] to-[#C97C5D] transition-all duration-1000"
                        style={{ width: `${sw.level}%` }}
                      />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.12em] text-[#6B5E57] font-medium">
                      {sw.level}% Profile
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why I Love Editing */}
          <div className="glass-card-warm paper-texture rounded-[16px] p-6 border-l-4 border-l-[#E94E3D]">
            <h3 className="font-display text-[14px] uppercase tracking-[0.25em] mb-4 text-[#D4A373] font-bold">
              Editorial Manifest
            </h3>
            <div className="relative">
              <div className="absolute -top-3 -left-2 text-4xl text-[#E94E3D]/10 font-serif">"</div>
              <p className="text-[17px] leading-[1.85] text-[#2B2B2B] pl-6 whitespace-pre-line italic font-medium tracking-wide">
                {data.whyILove}
              </p>
              <div className="absolute -bottom-5 -right-1 text-4xl text-[#E94E3D]/10 font-serif">"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Modal Component
function ProjectModal({ project, category, onClose }) {
  if (!project) return null;

  const colorClass = colorClasses[category?.color];

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="ocean-glass-dark rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#00BBF9]/30 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-[#00F5D4]/20 to-[#00BBF9]/20">
          <div className="flex items-center gap-3">
            <span className={`font-display text-[12px] uppercase tracking-[0.18em] px-4 py-2 rounded-sm bg-blue-500/20 text-blue-300 border border-blue-500/30`}>
              {project.role}
            </span>
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.14em] font-bold text-white">
                {project.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.16em] text-blue-400 font-bold">
                {project.note} · {project.year}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#00F5D4] hover:text-[#0a192f] transition-all duration-200 text-xl font-bold z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-[1fr_1.4fr] divide-x divide-black/10">
          {/* Left: Description */}
          <div className="p-6 bg-gradient-to-br from-[#fffaf3] to-[#fff5de]">
            <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentRed">
              About This Project
            </h3>
            <p className="text-[13px] leading-relaxed text-neutral-700 mb-4">
              {project.description || category?.description}
            </p>

            {/* Project Details */}
            <div className="space-y-3 pt-4 border-t border-black/10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 w-20">Project</span>
                <span className="text-[12px] font-medium">{project.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 w-20">Role</span>
                <span className="text-[12px] font-medium">{project.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500 w-20">Year</span>
                <span className="text-[12px] font-medium">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Right: Screenshots */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentBlue">
              Screengraphs
            </h3>

            {/* Screenshot Placeholders Grid */}
            <div className="grid grid-cols-2 gap-4">
              {(project.images || Array.from({ length: project.screenshots || 4 })).map((img, sIndex) => (
                <div
                  key={sIndex}
                  className={`aspect-video rounded-[14px] overflow-hidden border-2 transition-all duration-200 cursor-pointer group ${project.images
                    ? "border-black/10 hover:border-accentBlue"
                    : "bg-gradient-to-br from-[#e8e0d5] to-[#f5f0e8] border-dashed border-black/25 flex flex-col items-center justify-center gap-3 hover:border-accentYellow hover:bg-[#fff8e8]"
                    }`}
                >
                  {project.images ? (
                    <img
                      src={img}
                      alt={`${project.title} Screenshot ${sIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      <svg
                        className="w-12 h-12 text-neutral-400 group-hover:text-accentYellow transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-400 group-hover:text-neutral-600">
                        Screenshot {sIndex + 1}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#fff5de] border-t border-black/10 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
            {category?.title} · {project.title}
          </span>
          <button
            type="button"
            onClick={handleClose}
            className="text-[11px] uppercase tracking-[0.14em] bg-black text-white px-5 py-2 rounded-full hover:bg-accentRed transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("direction");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEditingModal, setShowEditingModal] = useState(false);
  const [showSoundModal, setShowSoundModal] = useState(false);
  const [showPhotographyModal, setShowPhotographyModal] = useState(false);

  // Teaser Components for Editing, Sound, and Photography
  const EditingTeaser = () => (
    <div className="w-full ocean-glass rounded-2xl p-6 mb-8 border border-[#00BBF9]/20 shadow-2xl relative overflow-hidden group hover:shadow-[#00F5D4]/10 transition-all duration-500">
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Timeline Reel Mockup */}
        <div className="w-full md:w-3/5 bg-black/60 rounded-lg p-2 border-2 border-[#00BBF9]/30 relative overflow-hidden aspect-[21/9] shadow-inner">
          <div className="absolute top-0 left-0 right-0 h-6 bg-neutral-900 border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00F5D4]" />
            <div className="w-2 h-2 rounded-full bg-[#00BBF9]" />
            <div className="w-2 h-2 rounded-full bg-[#5F0FFF]" />
            <span className="text-[8px] uppercase tracking-widest text-[#00BBF9]/60 ml-2 font-bold">Deep_Sea_Sequence_v4</span>
          </div>
          <div className="mt-8 flex gap-1 h-20 items-end">
            {[40, 60, 30, 80, 50, 70, 45, 90, 65, 55, 35, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-[#00BBF9]/40 border-t border-[#00BBF9] rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#00F5D4] shadow-[0_0_10px_#00F5D4] z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00BBF9]/10 to-transparent pointer-events-none" />
        </div>

        {/* Software & CTA */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h4 className="text-[14px] uppercase tracking-[0.2em] font-bold text-white mb-4">Post-Production Hub</h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            {workCategories.find(c => c.id === "editing").software.map(sw => (
              <div key={sw.name} className="flex flex-col items-center gap-1 group/sw">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center text-[#00F5D4] group-hover/sw:scale-110 transition-transform border border-white/10">
                  <SoftwareIcon name={sw.name} />
                </div>
                <span className="text-[8px] uppercase tracking-tighter text-[#00BBF9]/70 font-bold">{sw.name.split(' ').pop()}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowEditingModal(true)}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] text-[11px] uppercase tracking-[0.2em] rounded-sm shadow-[0_10px_20px_rgba(0,245,212,0.3)] hover:shadow-[0_15px_25px_rgba(0,245,212,0.4)] hover:-translate-y-1 transition-all duration-300 font-bold"
          >
            Enter Suite →
          </button>
        </div>
      </div>
    </div>
  );

  const SoundTeaser = () => (
    <div className="w-full ocean-glass rounded-2xl p-6 mb-8 border border-[#00BBF9]/20 shadow-2xl relative overflow-hidden group hover:shadow-[#00F5D4]/10 transition-all duration-500">
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        {/* Waveform Mockup */}
        <div className="w-full md:w-3/5 bg-black/60 rounded-lg p-6 border-2 border-[#00F5D4]/30 relative overflow-hidden aspect-[21/9] shadow-inner flex flex-col justify-center gap-4">
           <div className="flex items-center gap-1 justify-center h-24">
             {[...Array(24)].map((_, i) => (
               <div 
                key={i} 
                className="w-1 bg-[#00F5D4] rounded-full animate-pulse" 
                style={{ 
                  height: `${20 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${0.5 + Math.random() * 1}s`
                }} 
               />
             ))}
           </div>
           <div className="flex justify-between text-[8px] font-mono text-[#00F5D4]/40 uppercase tracking-widest">
             <span>00:00:12:45</span>
             <span>Freq Analysis: Active</span>
             <span>Peak: -3.2dB</span>
           </div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#00F5D4]/5 to-transparent pointer-events-none" />
        </div>

        {/* Skills & CTA */}
        <div className="w-full md:w-2/5 text-center md:text-left">
          <h4 className="text-[14px] uppercase tracking-[0.2em] font-bold text-white mb-4">Sonic Architecture</h4>
          <div className="space-y-2 mb-8">
            {workCategories.find(c => c.id === "sound").skills.map(sk => (
              <div key={sk.title} className="text-[10px] uppercase font-bold text-blue-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4]" />
                {sk.title}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowSoundModal(true)}
            className="w-full md:w-auto px-8 py-3 bg-[#00F5D4] text-[#0a192f] text-[11px] uppercase tracking-[0.2em] rounded-sm shadow-[0_10px_20px_rgba(0,245,212,0.3)] hover:shadow-[0_15px_25px_rgba(0,245,212,0.4)] hover:-translate-y-1 transition-all duration-300 font-bold"
          >
            Enter Studio →
          </button>
        </div>
      </div>
    </div>
  );

  const PhotographyTeaser = () => {
    const data = workCategories.find(c => c.id === "photography");
    return (
      <div className="w-full ocean-glass rounded-2xl p-6 mb-8 border border-[#00BBF9]/20 shadow-2xl relative overflow-hidden group hover:shadow-[#FF7A00]/10 transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          {/* Polaroid Stack */}
          <div className="w-full md:w-3/5 h-56 relative perspective-1000 flex items-center justify-center">
            {data.images.slice(0, 4).map((img, i) => (
              <div 
                key={i}
                className="absolute w-40 aspect-square bg-white/10 backdrop-blur-md p-2 shadow-xl border border-white/20 transition-all duration-500 group-hover:scale-105"
                style={{ 
                  transform: `rotate(${(i - 1.5) * 12}deg) translate(${i * 10 - 20}px, ${i * 5 - 10}px)`,
                  zIndex: 10 + i
                }}
              >
                <div className="w-full aspect-square overflow-hidden bg-blue-900/40">
                  <img src={img} alt="" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                </div>
                <div className="h-4 mt-1 bg-white/5 rounded-sm" />
              </div>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h4 className="text-[14px] uppercase tracking-[0.2em] font-bold text-white mb-4">Shutter & Light</h4>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {data.works.slice(0, 2).map(w => (
                <div key={w.title} className="p-3 ocean-glass border border-white/10">
                  <span className="text-[8px] uppercase tracking-widest text-[#00BBF9]/60 block mb-1 font-bold">Category</span>
                  <span className="text-[11px] font-bold text-white leading-tight block">{w.title}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPhotographyModal(true)}
              className="w-full md:w-auto px-8 py-3 bg-[#FF7A00] text-white text-[11px] uppercase tracking-[0.2em] rounded-sm shadow-[0_10px_20px_rgba(255,122,0,0.3)] hover:shadow-[0_15px_25px_rgba(255,122,0,0.4)] hover:-translate-y-1 transition-all duration-300 font-bold border border-[#FF7A00]/40"
            >
              Enter Gallery →
            </button>
          </div>
        </div>
      </div>
    );
  };

  const activeData = workCategories.find(cat => cat.id === activeCategory);
  const activeColorClass = colorClasses[activeData?.color];

  return (
    <>
      <ScrollRevealSection id="experience">
        <header className="flex flex-wrap items-baseline gap-3 mb-6">
          <span className="uppercase tracking-[0.18em] text-[10px] text-[#00BBF9]/60 bg-white/5 px-2 py-1 rounded-full border border-dashed border-[#00BBF9]/30">
            Reel Experience
          </span>
          <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] px-4 py-1 rounded-sm shadow-[0_8px_0_rgba(0,245,212,0.3)] border border-[#00F5D4]/40">
            Work Credits
          </h2>
        </header>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {workCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                // Directly open popup when clicking Editing tab
                if (cat.id === "editing") {
                  setShowEditingModal(true);
                }
                // Directly open popup when clicking Sound tab
                if (cat.id === "sound") {
                  setShowSoundModal(true);
                }
                // Directly open popup when clicking Photography tab
                if (cat.id === "photography") {
                  setShowPhotographyModal(true);
                }
              }}
              className={`text-[13px] uppercase tracking-[0.16em] px-6 py-3 rounded-sm border transition-all duration-200 cursor-pointer font-bold ${activeCategory === cat.id
                ? `bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] border-[#00F5D4] shadow-[0_4px_0_rgba(0,0,0,0.2)] -translate-y-0.5`
                : "bg-white/5 border-white/10 text-blue-100/60 hover:border-[#00F5D4]/40 hover:bg-white/15 hover:-translate-y-0.5"
                }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="min-h-[280px]">
          {/* Description */}
          <div className="mb-6 p-4 ocean-glass rounded-[16px] border border-white/10">
            <p className="text-[15px] leading-[1.8] text-blue-50 max-w-3xl font-medium">
              {activeData?.description}
            </p>
          </div>

          {/* Teasers or Category Content */}
          {activeCategory === "editing" ? (
            <EditingTeaser />
          ) : activeCategory === "sound" ? (
            /* Sound Tab - Show Teaser */
            <SoundTeaser />
          ) : activeCategory === "photography" ? (
            /* Photography Tab - Show Teaser */
            <PhotographyTeaser />
          ) : (
            /* Project Cards Grid for other tabs */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activeData?.projects?.map((project, index) => (
                <div
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-[16px] ocean-glass border border-white/10 shadow-[0_8px_0_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 cursor-pointer ${index % 2 === 0 ? "-rotate-1" : "rotate-1"
                    } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_14px_0_rgba(0,0,0,0.15)] hover:border-[#00F5D4]`}
                >
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[8px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-sm bg-[#00F5D4] text-[#0a192f] font-bold`}>
                      {project.role}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[8px] uppercase tracking-[0.12em] bg-black/60 text-white px-2 py-1 rounded-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Visual Content */}
                  <div className="h-28 bg-[#0a192f] relative">
                    {project.images && project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[#00BBF9]/10" />
                        <div className="absolute inset-4 rounded-[10px] border border-dashed border-[#00BBF9]/20" />
                      </>
                    )}

                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase tracking-[0.14em] bg-[#00F5D4] text-[#0a192f] font-bold px-3 py-1.5 rounded-sm">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-black/20 border-t border-white/5">
                    <h3 className="text-[12px] uppercase tracking-[0.12em] font-bold mb-1 text-white">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-[#00BBF9]/60 uppercase tracking-[0.1em] font-bold">
                      {project.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#00BBF9]/40">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00BBF9]/20 to-transparent" />
          <span>
            {activeCategory === "editing" || activeCategory === "sound" || activeCategory === "photography"
              ? "Click button to view details"
              : "Click tabs to explore · Click cards to view screenshots"}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00BBF9]/20 to-transparent" />
        </div>
      </ScrollRevealSection>

      {/* Photography Modal */}
      {showPhotographyModal && (
        <PhotographyModal
          data={workCategories.find(cat => cat.id === "photography")}
          onClose={() => setShowPhotographyModal(false)}
        />
      )}

      {/* Sound Modal */}
      {showSoundModal && (
        <SoundModal
          data={workCategories.find(cat => cat.id === "sound")}
          onClose={() => setShowSoundModal(false)}
        />
      )}

      {/* Editing Modal */}
      {showEditingModal && (
        <EditingModal
          data={workCategories.find(cat => cat.id === "editing")}
          onClose={() => setShowEditingModal(false)}
        />
      )}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          category={activeData}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
