import React from "react";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]" />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating cinema elements */}
      <div className="absolute inset-0">
        {/* Film reel 1 - top left */}
        <div className="absolute -top-10 -left-10 w-48 h-48 opacity-20 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <circle cx="50" cy="25" r="6" fill="currentColor"/>
            <circle cx="50" cy="75" r="6" fill="currentColor"/>
            <circle cx="25" cy="50" r="6" fill="currentColor"/>
            <circle cx="75" cy="50" r="6" fill="currentColor"/>
          </svg>
        </div>

        {/* Film reel 2 - bottom right */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 opacity-15 animate-spin-reverse">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-500">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <circle cx="50" cy="20" r="8" fill="currentColor"/>
            <circle cx="50" cy="80" r="8" fill="currentColor"/>
            <circle cx="20" cy="50" r="8" fill="currentColor"/>
            <circle cx="80" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>

        {/* Film strip 1 - diagonal top */}
        <div className="absolute top-20 left-1/4 w-80 h-20 opacity-25 -rotate-12">
          <svg viewBox="0 0 320 40" className="w-full h-full text-gray-400">
            <rect x="0" y="0" width="320" height="40" fill="currentColor" rx="2"/>
            <rect x="5" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="30" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="55" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="80" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="105" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="130" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="155" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="180" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="205" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="230" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="255" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="280" y="5" width="20" height="10" fill="#1a1a2e"/>
            <rect x="5" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="30" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="55" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="80" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="105" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="130" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="155" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="180" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="205" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="230" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="255" y="25" width="20" height="10" fill="#1a1a2e"/>
            <rect x="280" y="25" width="20" height="10" fill="#1a1a2e"/>
          </svg>
        </div>

        {/* Film strip 2 - bottom */}
        <div className="absolute bottom-32 right-1/4 w-96 h-16 opacity-20 rotate-6">
          <svg viewBox="0 0 400 30" className="w-full h-full text-amber-600">
            <rect x="0" y="0" width="400" height="30" fill="currentColor" rx="2"/>
            {[...Array(16)].map((_, i) => (
              <rect key={i} x={8 + i * 24} y="4" width="16" height="6" fill="#1a1a2e"/>
            ))}
            {[...Array(16)].map((_, i) => (
              <rect key={i} x={8 + i * 24} y="20" width="16" height="6" fill="#1a1a2e"/>
            ))}
          </svg>
        </div>

        {/* Clapperboard - top right */}
        <div className="absolute top-16 right-10 w-32 h-28 opacity-30 -rotate-6 animate-float">
          <svg viewBox="0 0 80 90" className="w-full h-full text-white">
            <rect x="0" y="0" width="80" height="30" fill="currentColor"/>
            <rect x="0" y="30" width="80" height="60" fill="#333"/>
            <line x1="0" y1="0" x2="20" y2="30" stroke="#1a1a2e" strokeWidth="10"/>
            <line x1="20" y1="0" x2="40" y2="30" stroke="currentColor" strokeWidth="10"/>
            <line x1="40" y1="0" x2="60" y2="30" stroke="#1a1a2e" strokeWidth="10"/>
            <line x1="60" y1="0" x2="80" y2="30" stroke="currentColor" strokeWidth="10"/>
          </svg>
        </div>

        {/* Camera icon - left side */}
        <div className="absolute top-1/3 -left-5 w-24 h-24 opacity-20 animate-pulse-slow">
          <svg viewBox="0 0 100 80" className="w-full h-full text-sky-400">
            <rect x="0" y="20" width="70" height="50" rx="8" fill="currentColor"/>
            <circle cx="55" cy="45" r="18" fill="#1a1a2e" stroke="currentColor" strokeWidth="4"/>
            <circle cx="55" cy="45" r="8" fill="currentColor"/>
            <rect x="70" y="35" width="25" height="20" rx="3" fill="currentColor"/>
          </svg>
        </div>

        {/* Popcorn bucket - bottom left */}
        <div className="absolute bottom-20 left-10 w-20 h-24 opacity-25 animate-float-delayed">
          <svg viewBox="0 0 60 80" className="w-full h-full text-red-500">
            <path d="M10 30 L5 75 L55 75 L50 30 Z" fill="currentColor"/>
            <rect x="10" y="30" width="40" height="45" fill="currentColor"/>
            <circle cx="20" cy="25" r="10" fill="#ffeaa7"/>
            <circle cx="35" cy="20" r="12" fill="#ffeaa7"/>
            <circle cx="45" cy="28" r="9" fill="#ffeaa7"/>
            <circle cx="28" cy="15" r="8" fill="#ffeaa7"/>
          </svg>
        </div>

        {/* Star burst decorations */}
        <div className="absolute top-1/4 right-1/3 w-16 h-16 opacity-30 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
            <path d="M50 0 L58 40 L100 50 L58 60 L50 100 L42 60 L0 50 L42 40 Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 opacity-25 animate-pulse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-pink-500">
            <path d="M50 0 L58 40 L100 50 L58 60 L50 100 L42 60 L0 50 L42 40 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Director chair - right side */}
        <div className="absolute top-2/3 right-5 w-28 h-32 opacity-20">
          <svg viewBox="0 0 70 100" className="w-full h-full text-purple-500">
            <rect x="10" y="30" width="50" height="40" fill="currentColor"/>
            <rect x="10" y="30" width="50" height="12" fill="#1a1a2e"/>
            <line x1="10" y1="70" x2="5" y2="95" stroke="currentColor" strokeWidth="4"/>
            <line x1="60" y1="70" x2="65" y2="95" stroke="currentColor" strokeWidth="4"/>
            <line x1="10" y1="30" x2="5" y2="10" stroke="currentColor" strokeWidth="4"/>
            <line x1="60" y1="30" x2="65" y2="10" stroke="currentColor" strokeWidth="4"/>
          </svg>
        </div>

        {/* Movie ticket - floating */}
        <div className="absolute top-1/2 left-1/4 w-28 h-16 opacity-25 rotate-12 animate-float">
          <svg viewBox="0 0 100 50" className="w-full h-full text-amber-300">
            <rect x="0" y="5" width="100" height="40" rx="4" fill="currentColor"/>
            <circle cx="0" cy="25" r="8" fill="#1a1a2e"/>
            <circle cx="100" cy="25" r="8" fill="#1a1a2e"/>
            <line x1="15" y1="15" x2="85" y2="15" stroke="#1a1a2e" strokeWidth="2"/>
            <line x1="15" y1="25" x2="85" y2="25" stroke="#1a1a2e" strokeWidth="2"/>
            <line x1="15" y1="35" x2="60" y2="35" stroke="#1a1a2e" strokeWidth="2"/>
          </svg>
        </div>

        {/* Spotlight beams */}
        <div className="absolute top-0 left-1/3 w-32 h-96 opacity-10 -rotate-12 bg-gradient-to-b from-white to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/4 w-24 h-80 opacity-10 rotate-6 bg-gradient-to-b from-yellow-200 to-transparent transform skew-x-12" />

        {/* Globe with film */}
        <div className="absolute bottom-10 left-1/3 w-20 h-20 opacity-20 animate-pulse-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-teal-400">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none"/>
            <ellipse cx="50" cy="50" rx="20" ry="40" stroke="currentColor" strokeWidth="2" fill="none"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Award trophy */}
        <div className="absolute top-1/3 right-20 w-16 h-20 opacity-25">
          <svg viewBox="0 0 60 90" className="w-full h-full text-yellow-500">
            <path d="M20 0 L40 0 L38 35 L50 35 L40 50 L45 50 L45 55 L35 55 L32 70 L28 70 L25 55 L15 55 L15 50 L20 50 L10 35 L22 35 Z" fill="currentColor"/>
            <rect x="22" y="70" width="16" height="10" fill="currentColor"/>
            <rect x="18" y="80" width="24" height="8" rx="2" fill="currentColor"/>
          </svg>
        </div>

        {/* Floating circles/bubbles */}
        <div className="absolute top-20 left-1/2 w-8 h-8 rounded-full bg-red-500 opacity-15 animate-float" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full bg-blue-500 opacity-10 animate-float-delayed" />
        <div className="absolute bottom-40 right-1/2 w-6 h-6 rounded-full bg-yellow-500 opacity-15 animate-float" />
        <div className="absolute top-2/3 left-1/4 w-10 h-10 rounded-full bg-purple-500 opacity-10 animate-float-delayed" />
        <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-green-500 opacity-20 animate-float" />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-[#1a1a2e] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#16213e]/30 via-transparent to-[#16213e]/30" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(15, 15, 35, 0.7) 100%)'
        }}
      />
    </div>
  );
}
