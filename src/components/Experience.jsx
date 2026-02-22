import React, { useState } from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

const workCategories = [
  {
    id: "direction",
    title: "Direction",
    color: "accentRed",
    description: "As a director, I focus on visual storytelling that blends emotion, rhythm, and composition. My approach involves meticulous pre-production planning, from storyboarding to shot breakdowns, ensuring every frame serves the narrative.",
    projects: [
      { 
        title: "Dialogue Project", 
        role: "Director",
        note: "College studio work",
        year: "2024",
        screenshots: 4
      },
      { 
        title: "Feature Film - Fossil Film", 
        role: "Co-Director",
        note: "Independent feature",
        year: "2024",
        screenshots: 4
      },
      { 
        title: "Short Films - Lovegemini Film", 
        role: "Co-Director",
        note: "Festival circuit",
        year: "2023",
        screenshots: 4
      },
      { 
        title: "LV Prasad Studio Project", 
        role: "Director",
        note: "Professional studio",
        year: "2023",
        screenshots: 4
      }
    ]
  },
  {
    id: "editing",
    title: "Editing",
    color: "accentBlue",
    description: "Editing is where stories find their heartbeat. I approach each cut with intention, focusing on emotional continuity and narrative flow using DaVinci Resolve and Premiere Pro.",
    whyILove: `Editing is where the magic truly happens. It's the invisible art that shapes raw footage into emotional journeys. I love the moment when disparate shots suddenly click together and a scene finds its rhythm.

Every cut is a decision — to stay, to leave, to linger, or to jump. I enjoy the puzzle of finding the perfect frame to end a shot and the right moment to begin the next. It's about timing, pacing, and trusting the audience to feel what cannot be shown.

Working with DaVinci Resolve and Premiere Pro has taught me that tools are just extensions of instinct. The best edits are the ones you don't notice — they simply feel right.`,
    workExperience: [
      { title: "Short Films", items: ["Lovegemini Film - Co-Editor", "Silent Echoes - Editor", "The Last Frame - Assistant Editor"] },
      { title: "College Projects", items: ["Documentary on Local Artisans", "Music Video Compilation", "Student Film Festival Entries"] },
      { title: "Commercial Work", items: ["Product Showcase Videos", "Social Media Content", "Event Highlight Reels"] }
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
    color: "accentTeal",
    description: "Sound design transforms good films into unforgettable experiences. I approach audio as a storytelling layer that operates alongside the visual narrative.",
    skills: [
      { 
        title: "Live Sound Equipment Handling", 
        description: "Experienced in setting up and operating professional live sound equipment for film shoots, events, and studio recordings. Proficient with mixing consoles, wireless systems, and monitoring setups.",
        items: ["Mixing Consoles", "Wireless Microphones", "Monitor Systems", "PA Systems"]
      },
      { 
        title: "Sound Recording & Dubbing", 
        description: "Skilled in professional sound recording techniques for film and video production. Experienced in ADR (Automated Dialogue Replacement) and dubbing workflows.",
        items: ["Field Recording", "Studio Recording", "ADR Sessions", "Voice-over Direction"]
      },
      { 
        title: "Sound Sync in DAW - Pro Tools", 
        description: "Expertise in synchronizing audio with video using Pro Tools. Comfortable with timecode, automation, and delivering broadcast-ready audio.",
        items: ["Timecode Sync", "Automation", "Audio Editing", "Final Mix Delivery"]
      }
    ],
    software: [
      { name: "Pro Tools", level: 85 },
      { name: "Audacity", level: 80 },
      { name: "Adobe Audition", level: 70 },
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
    color: "accentYellow",
    description: "Photography is my way of studying light and composition — essential tools for any filmmaker. Each photograph teaches me something new about framing and visual rhythm.",
    whyPhotography: `Photography is my creative foundation — it's how I learned to see the world through a lens before I ever called "Action!" on a film set.

Every frame I compose teaches me about light, shadow, color, and the power of a single moment frozen in time.

My camera is my sketchbook. I document faces, places, and stories that inspire my filmmaking journey.

Through photography, I've developed an eye for detail that directly translates to stronger visual storytelling on screen.`,
    works: [
      { title: "Portrait Sessions", note: "Natural light portraits" },
      { title: "Location Scouts", note: "Film location documentation" },
      { title: "Event Coverage", note: "Behind-the-scenes moments" },
      { title: "Street Photography", note: "Urban stories captured" },
      { title: "Product Shots", note: "Commercial work" }
    ],
    instagram: "https://instagram.com/your_username",
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
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
        <path d="M8 8h8v8H8V8zm2 2v4h4v-4h-4z" fill="currentColor"/>
      </svg>
    ),
    "Adobe Premiere Pro": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M8 7h2v10H8V7zm3 5c0-2 1.5-4 4-4 1.5 0 2.5.5 3 1l-1 1.5c-.5-.3-1-.5-1.5-.5-1 0-2 1-2 2.5s1 2.5 2 2.5c.5 0 1-.2 1.5-.5l1 1.5c-.5.5-1.5 1-3 1-2.5 0-4-2-4-4z" fill="currentColor"/>
      </svg>
    ),
    "Final Cut Pro": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M7 6h4l6 6-6 6H7l6-6-6-6z" fill="currentColor"/>
      </svg>
    ),
    "After Effects": (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.2"/>
        <path d="M7 16l3-8h2l3 8h-2l-.5-2h-3l-.5 2H7zm2.5-3h2l-1-3-1 3z" fill="currentColor"/>
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
          <rect width="100" height="100" rx="15" fill="#1A1A2E"/>
          <text x="50" y="58" textAnchor="middle" fill="#00D4AA" fontSize="24" fontWeight="bold" fontFamily="Arial">PT</text>
        </svg>
      ),
      "Audacity": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="#0099CC"/>
          <path d="M25 50 L40 35 L40 65 Z" fill="white"/>
          <rect x="45" y="35" width="5" height="30" fill="white"/>
          <rect x="55" y="35" width="5" height="30" fill="white"/>
          <rect x="65" y="35" width="5" height="30" fill="white"/>
          <path d="M75 50 L60 35 L60 65 Z" fill="white"/>
        </svg>
      ),
      "Adobe Audition": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="#00005B"/>
          <text x="50" y="62" textAnchor="middle" fill="#9999FF" fontSize="28" fontWeight="bold" fontFamily="Arial">Au</text>
        </svg>
      ),
      "Logic Pro": (
        <svg viewBox="0 0 100 100" className="w-10 h-10">
          <rect width="100" height="100" rx="15" fill="linear-gradient(135deg, #333, #666)"/>
          <rect width="100" height="100" rx="15" fill="#1E1E1E"/>
          <circle cx="50" cy="50" r="25" stroke="#A8E6CF" strokeWidth="3" fill="none"/>
          <rect x="45" y="35" width="10" height="20" fill="#A8E6CF"/>
        </svg>
      )
    };
    return logos[name] || null;
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-[#fffdf7] rounded-[24px] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-2 border-black/20 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-gradient-to-r from-[#e6fff5] to-[#f0ffff]">
          <div className="flex items-center gap-3">
            <span className="font-display text-[14px] uppercase tracking-[0.18em] px-4 py-2 rounded-full bg-accentTeal text-black">
              Sound
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Skills & Expertise
            </span>
          </div>
          <button 
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-accentRed hover:text-white hover:border-accentRed transition-all duration-200 text-xl font-bold z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Skills Section */}
          {data.skills.map((skill, idx) => (
            <div key={idx} className="bg-gradient-to-r from-white to-[#f0fff8] rounded-[18px] p-5 border border-black/10">
              <div className="flex items-start gap-4">
                {/* Number badge */}
                <span className="w-8 h-8 rounded-full bg-accentTeal text-black text-[12px] flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[13px] uppercase tracking-[0.16em] mb-2 text-accentTeal">
                    {skill.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-neutral-600 mb-3">
                    {skill.description}
                  </p>
                  
                  {/* Items/Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-[0.12em] bg-accentTeal/10 text-neutral-700 px-3 py-1.5 rounded-full border border-accentTeal/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Common Image Section */}
          <div className="bg-gradient-to-br from-[#f0fff8] to-[#e6fff5] rounded-[18px] p-5 border border-black/10">
            <h3 className="font-display text-[13px] uppercase tracking-[0.18em] mb-4 text-accentTeal">
              Sound Equipment Gallery
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {["Mixing Console", "Wireless Systems", "Recording Setup", "Studio Monitors"].map((label, idx) => (
                <div 
                  key={idx}
                  className="aspect-video rounded-[12px] bg-gradient-to-br from-[#d4f5e9] to-[#b8e6d4] border-2 border-dashed border-accentTeal/40 flex flex-col items-center justify-center gap-2 hover:border-accentTeal transition-colors cursor-pointer group"
                >
                  <svg 
                    className="w-8 h-8 text-accentTeal/60 group-hover:text-accentTeal transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-neutral-500 group-hover:text-neutral-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Section with Real Logos */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-[18px] p-5 border border-black/20">
            <h3 className="font-display text-[13px] uppercase tracking-[0.18em] mb-4 text-white">
              Software I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.software.map((sw, idx) => (
                <div 
                  key={idx}
                  className="bg-white/10 rounded-[14px] p-4 border border-white/10 hover:border-accentTeal hover:bg-white/15 transition-all duration-200 group backdrop-blur"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="group-hover:scale-110 transition-transform">
                      <SoftwareLogo name={sw.name} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-white text-center">
                      {sw.name}
                    </span>
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accentTeal to-accentBlue rounded-full"
                        style={{ width: `${sw.level}%` }}
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.1em] text-white/60">
                      {sw.level}%
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-[#fffdf7] rounded-[24px] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-black/20 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-gradient-to-r from-[#fff8e0] to-[#ffe8cc]">
          <div className="flex items-center gap-3">
            <span className="font-display text-[14px] uppercase tracking-[0.18em] px-4 py-2 rounded-full bg-accentYellow text-black">
              Photography
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Visual Stories
            </span>
          </div>
          <button 
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-accentRed hover:text-white hover:border-accentRed transition-all duration-200 text-xl font-bold z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Why Photography - Two Column Layout */}
          <div className="grid md:grid-cols-[1fr_1fr] gap-6">
            {/* Left: Why Photography */}
            <div className="bg-gradient-to-br from-[#fffaf3] to-[#fff5de] rounded-[18px] p-5 border border-black/10">
              <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentYellow">
                Why Photography
              </h3>
              <div className="space-y-3">
                {data.whyPhotography.split('\n\n').map((para, idx) => (
                  <p key={idx} className="text-[12px] leading-relaxed text-neutral-700">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Some of My Works */}
            <div className="bg-gradient-to-r from-white to-[#fff8e8] rounded-[18px] p-5 border border-black/10">
              <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentRed">
                Some of My Works
              </h3>
              <ul className="space-y-2">
                {data.works.map((work, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[12px] text-neutral-600">
                    <span className="text-accentYellow mt-0.5 text-[10px]">●</span>
                    <div>
                      <span className="font-medium text-neutral-800">{work.title}</span>
                      <span className="text-[10px] text-neutral-500 ml-1">— {work.note}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Works Gallery - 5 Images */}
          <div className="bg-gradient-to-br from-[#fff8e8] to-[#ffe8d8] rounded-[18px] p-5 border border-black/10">
            <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentYellow">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-5 gap-3">
              {data.works.map((work, idx) => (
                <div 
                  key={idx}
                  className="aspect-square rounded-[12px] bg-gradient-to-br from-[#ffe4d5] to-[#fde6ff] border-2 border-dashed border-accentYellow/50 flex flex-col items-center justify-center gap-2 hover:border-accentYellow transition-colors cursor-pointer group overflow-hidden"
                >
                  <svg 
                    className="w-6 h-6 text-accentYellow/60 group-hover:text-accentYellow transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[8px] uppercase tracking-[0.08em] text-neutral-500 group-hover:text-neutral-700 text-center px-1">
                    {work.title.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Profile Link */}
          <div className="bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc2a8d] rounded-[18px] p-5 border border-black/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-[13px] uppercase tracking-[0.16em] text-white">
                    Follow My Work
                  </h3>
                  <p className="text-[11px] text-white/80">
                    See more photography on Instagram
                  </p>
                </div>
              </div>
              <a 
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-black text-[11px] uppercase tracking-[0.14em] rounded-full font-semibold hover:bg-accentYellow transition-colors"
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-[#fffdf7] rounded-[24px] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-2 border-black/20 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-gradient-to-r from-[#e8f4ff] to-[#f0e8ff]">
          <div className="flex items-center gap-3">
            <span className="font-display text-[14px] uppercase tracking-[0.18em] px-4 py-2 rounded-full bg-accentBlue text-white">
              Editing
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Work Experience & Skills
            </span>
          </div>
          <button 
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-accentRed hover:text-white hover:border-accentRed transition-all duration-200 text-xl font-bold z-10 cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Work Experience Section */}
          <div className="bg-gradient-to-r from-white to-[#f0f8ff] rounded-[18px] p-5 border border-black/10">
            <h3 className="font-display text-[13px] uppercase tracking-[0.18em] mb-4 text-accentBlue">
              Work Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {data.workExperience.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-5 h-5 rounded-full bg-accentBlue text-white text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-neutral-700">
                      {section.title}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[12px] text-neutral-600">
                        <span className="text-accentBlue mt-0.5 text-[10px]">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Software Section */}
          <div className="bg-gradient-to-r from-[#fff8e8] to-[#ffe8d8] rounded-[18px] p-5 border border-black/10">
            <h3 className="font-display text-[13px] uppercase tracking-[0.18em] mb-4 text-accentRed">
              Software I Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.software.map((sw, idx) => (
                <div 
                  key={idx}
                  className="bg-white/80 rounded-[12px] p-3 border border-black/10 hover:border-accentBlue hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-accentBlue group-hover:scale-110 transition-transform">
                      <SoftwareIcon name={sw.name} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.12em] font-semibold text-neutral-700 text-center">
                      {sw.name}
                    </span>
                    <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accentBlue to-accentTeal rounded-full"
                        style={{ width: `${sw.level}%` }}
                      />
                    </div>
                    <span className="text-[8px] uppercase tracking-[0.1em] text-neutral-500">
                      {sw.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why I Love Editing */}
          <div className="bg-gradient-to-br from-[#fffaf3] to-[#fff5de] rounded-[18px] p-5 border border-black/10">
            <h3 className="font-display text-[13px] uppercase tracking-[0.18em] mb-3 text-accentTeal">
              Why I Love Editing
            </h3>
            <div className="relative">
              <div className="absolute -top-2 -left-1 text-3xl text-accentYellow/30 font-serif">"</div>
              <p className="text-[13px] leading-relaxed text-neutral-700 pl-5 whitespace-pre-line italic">
                {data.whyILove}
              </p>
              <div className="absolute -bottom-3 -right-1 text-3xl text-accentYellow/30 font-serif">"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-[#fffdf7] rounded-[24px] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border-2 border-black/20 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-gradient-to-r from-[#fff0cc] to-[#ffe4d5]">
          <div className="flex items-center gap-3">
            <span className={`font-display text-[14px] uppercase tracking-[0.18em] px-4 py-2 rounded-full ${colorClass.badge}`}>
              {project.role}
            </span>
            <div>
              <h3 className="text-[14px] uppercase tracking-[0.14em] font-semibold">
                {project.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">
                {project.note} · {project.year}
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={handleClose}
            className="w-10 h-10 rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-accentRed hover:text-white hover:border-accentRed transition-all duration-200 text-xl font-bold z-10 cursor-pointer"
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
              {category?.description}
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

            {/* Additional Notes */}
            <div className="mt-6 p-4 bg-[#fff8e8] rounded-[12px] border border-black/10">
              <p className="text-[11px] text-neutral-600 italic">
                "Click on screenshot placeholders to add your project images"
              </p>
            </div>
          </div>

          {/* Right: Screenshots */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <h3 className="font-display text-[14px] uppercase tracking-[0.18em] mb-4 text-accentBlue">
              Screengraphs
            </h3>

            {/* Screenshot Placeholders Grid */}
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: project.screenshots || 4 }).map((_, sIndex) => (
                <div 
                  key={sIndex}
                  className="aspect-video rounded-[14px] bg-gradient-to-br from-[#e8e0d5] to-[#f5f0e8] border-2 border-dashed border-black/25 flex flex-col items-center justify-center gap-3 hover:border-accentYellow hover:bg-[#fff8e8] transition-all duration-200 cursor-pointer group"
                >
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
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-4 p-3 bg-[#f0f8ff] rounded-[10px] border border-accentBlue/20">
              <p className="text-[10px] text-neutral-600 text-center">
                Replace placeholders with actual project screenshots
              </p>
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

  const activeData = workCategories.find(cat => cat.id === activeCategory);
  const activeColorClass = colorClasses[activeData?.color];

  return (
    <>
      <ScrollRevealSection id="experience">
        <header className="flex flex-wrap items-baseline gap-3 mb-6">
          <span className="uppercase tracking-[0.18em] text-[10px] text-neutral-600 bg-white/70 px-2 py-1 rounded-full border border-dashed border-black/20">
            Reel Experience
          </span>
          <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-[#fff0cc] px-3 py-1 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-black">
            <span className="text-accentRed">Work</span> Credits
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
              className={`text-[11px] uppercase tracking-[0.16em] px-5 py-2.5 rounded-full border-2 transition-all duration-200 cursor-pointer font-medium ${
                activeCategory === cat.id
                  ? `${colorClasses[cat.color].tab} shadow-[0_4px_0_rgba(0,0,0,0.2)] -translate-y-0.5`
                  : "bg-white/80 border-black/25 text-neutral-700 hover:border-black/40 hover:bg-white hover:-translate-y-0.5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="min-h-[280px]">
          {/* Description */}
          <div className="mb-6 p-4 bg-gradient-to-r from-white/80 to-[#fff8e8] rounded-[16px] border border-black/10">
            <p className="text-[13px] leading-relaxed text-neutral-700 max-w-3xl">
              {activeData?.description}
            </p>
          </div>

          {/* Editing Tab - Show Popup Button */}
          {activeCategory === "editing" ? (
            <div className="flex items-center justify-center py-6">
              <button
                onClick={() => setShowEditingModal(true)}
                className="px-6 py-2.5 bg-accentBlue text-white text-[11px] uppercase tracking-[0.14em] rounded-full border-2 border-accentBlue shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Open Editing Details →
              </button>
            </div>
          ) : activeCategory === "sound" ? (
            /* Sound Tab - Show Popup Button */
            <div className="flex items-center justify-center py-6">
              <button
                onClick={() => setShowSoundModal(true)}
                className="px-6 py-2.5 bg-accentTeal text-black text-[11px] uppercase tracking-[0.14em] rounded-full border-2 border-accentTeal shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Open Sound Details →
              </button>
            </div>
          ) : activeCategory === "photography" ? (
            /* Photography Tab - Show Popup Button */
            <div className="flex items-center justify-center py-6">
              <button
                onClick={() => setShowPhotographyModal(true)}
                className="px-6 py-2.5 bg-accentYellow text-black text-[11px] uppercase tracking-[0.14em] rounded-full border-2 border-accentYellow shadow-[0_4px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Open Photography Details →
              </button>
            </div>
          ) : (
            /* Project Cards Grid for other tabs */
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activeData?.projects?.map((project, index) => (
                <div
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-[16px] bg-gradient-to-br from-[#fff8e8] to-[#ffe8d8] border-2 border-black/15 shadow-[0_8px_0_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-300 cursor-pointer ${
                    index % 2 === 0 ? "-rotate-1" : "rotate-1"
                  } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_14px_0_rgba(0,0,0,0.15)] hover:border-accentYellow`}
                >
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[8px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full ${activeColorClass.badge}`}>
                      {project.role}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[8px] uppercase tracking-[0.12em] bg-black/60 text-white px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>

                  {/* Placeholder Visual */}
                  <div className="h-28 bg-gradient-to-br from-[#ffe4d5] via-[#fff0d1] to-[#f7e4ff] relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_50%)]" />
                    <div className="absolute inset-4 rounded-[10px] border-2 border-dashed border-black/10" />
                    
                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase tracking-[0.14em] bg-black/70 text-white px-3 py-1.5 rounded-full">
                        Click to view
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 bg-[#fffaf5]">
                    <h3 className="text-[12px] uppercase tracking-[0.12em] font-semibold mb-1 text-neutral-800">
                      {project.title}
                    </h3>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-[0.1em]">
                      {project.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer hint */}
        <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          <span>
            {activeCategory === "editing" || activeCategory === "sound" || activeCategory === "photography"
              ? "Click button to view details" 
              : "Click tabs to explore · Click cards to view screenshots"}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
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
