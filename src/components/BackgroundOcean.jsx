import React from "react";

const BackgroundOcean = () => {
  // Bubbles data
  const bubbles = [...Array(15)].map((_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 5 + 8,
  }));

  // Fish data
  const fishes = [...Array(4)].map((_, i) => ({
    id: i,
    top: 20 + i * 20,
    size: 40 + Math.random() * 40,
    delay: i * -7,
    duration: 25 + Math.random() * 15,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Ocean Gradient Base */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#09121d] to-[#04080e]"
      />

      {/* God Rays / Light Beams */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-1/4 w-[40%] h-[120%] bg-gradient-to-b from-[#00F5D4]/20 to-transparent transform -skew-x-12 blur-3xl animate-pulse" />
        <div className="absolute top-[-10%] right-1/4 w-[30%] h-[120%] bg-gradient-to-b from-[#00BBF9]/20 to-transparent transform skew-x-12 blur-3xl animate-pulse" />
      </div>

      {/* Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={`bubble-${bubble.id}`}
          className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-[1px] animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}

      {/* Fish Silhouettes */}
      {fishes.map((fish) => (
        <div
          key={`fish-${fish.id}`}
          className="absolute animate-fish opacity-10"
          style={{
            top: `${fish.top}%`,
            width: `${fish.size}px`,
            animationDelay: `${fish.delay}s`,
            animationDuration: `${fish.duration}s`,
          }}
        >
          <svg viewBox="0 0 100 50" fill="#00BBF9">
            <path d="M0 25 C20 0, 60 0, 85 20 L100 10 L100 40 L85 30 C60 50, 20 50, 0 25 Z" />
          </svg>
        </div>
      ))}

      {/* Sea Plants / Kelp (Foreground layer) */}
      <div className="absolute bottom-[-20px] left-0 right-0 h-[40vh] flex justify-around items-end opacity-40 mix-blend-screen">
        {[...Array(12)].map((_, i) => (
          <div
            key={`kelp-${i}`}
            className="animate-sway transform-origin-bottom"
            style={{ 
              animationDelay: `${i * -0.8}s`,
              height: `${150 + Math.random() * 200}px` 
            }}
          >
            <svg width="40" height="350" viewBox="0 0 40 350">
              <path
                d="M20 350 Q30 250 20 175 Q10 100 20 0"
                fill="none"
                stroke={i % 2 === 0 ? "#00F5D4" : "#2EC4B6"}
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]"
              />
              <path
                d="M20 350 Q10 250 20 175 Q30 100 20 0"
                fill="none"
                stroke={i % 2 === 0 ? "#00BBF9" : "#5F0FFF"}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Coral Reef Details (Bottom Corners) */}
      <div className="absolute bottom-[-10px] left-[-20px] w-64 h-48 opacity-60">
        <svg viewBox="0 0 200 150">
          <path d="M20 150 C40 100, 60 120, 80 80 C100 40, 120 60, 150 20" stroke="#FF4D6D" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M50 150 C60 110, 80 130, 100 100 C120 70, 140 90, 170 50" stroke="#FF7A00" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="40" cy="120" r="15" fill="#FF4D6D" opacity="0.3" />
          <circle cx="90" cy="90" r="10" fill="#FF7A00" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-[-10px] right-[-20px] w-64 h-48 opacity-60 transform scale-x-[-1]">
        <svg viewBox="0 0 200 150">
          <path d="M20 150 C40 100, 60 120, 80 80 C100 40, 120 60, 150 20" stroke="#00BBF9" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M50 150 C60 110, 80 130, 100 100 C120 70, 140 90, 170 50" stroke="#5F0FFF" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundOcean;
