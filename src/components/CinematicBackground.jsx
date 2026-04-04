import React from "react";
import backgroundImage from "../../assets/WhatsApp Image 2026-04-05 at 02.15.52.jpeg";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {/* The main collage background image */}
      <img 
        src={backgroundImage} 
        alt="Cinematic Background" 
        className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-[4px]"
      />
      
      {/* Layer 1: Dark Overlay Gradient (rgba(0,0,0,0.4) to 0.6) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      
      {/* Layer 2: Subtle Vignette */}
      <div className="absolute inset-0 vignette-overlay" />
      
      {/* Layer 3: Very subtle grain for texture (optional but adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
}
