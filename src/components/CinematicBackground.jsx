import React from "react";

export default function CinematicBackground() {
  // Movie characters silhouettes and icons
  const characters = [
    { name: "Batman", icon: "🦇" },
    { name: "Spider-Man", icon: "🕷️" },
    { name: "Iron Man", icon: "🤖" },
    { name: "Superhero", icon: "🦸" },
    { name: "Alien", icon: "👽" },
    { name: "Robot", icon: "🤖" },
    { name: "Ghost", icon: "👻" },
    { name: "Skull", icon: "💀" },
    { name: "Clown", icon: "🤡" },
    { name: "Ninja", icon: "🥷" },
  ];

  // Cinema elements
  const cinemaElements = [
    "🎬", "🎥", "🎞️", "📽️", "🎦", "🎭", "🎪", "🎟️", "🎫", "🏆",
    "⭐", "🌟", "✨", "💫", "🔥", "💥", "⚡", "🎯", "🎨", "🖼️"
  ];

  // Movie quotes and references
  const movieQuotes = [
    "I'll be back", "May the Force be", "Here's Johnny!", 
    "To infinity!", "Why so serious?", "I see dead people",
    "Action!", "Cut!", "That's a wrap!", "Lights, Camera!",
    "The show must go on", "A star is born", "Roll camera",
    "Scene 1 Take 1", "Director's Cut", "Final Cut",
    "In a galaxy far", "With great power", "I am your father",
    "Life is like a box", "You talking to me?", "Here's looking at you"
  ];

  // Director names
  const directors = [
    "Spielberg", "Nolan", "Tarantino", "Scorsese", "Kubrick",
    "Hitchcock", "Coppola", "Fincher", "Villeneuve", "Cameron",
    "Anderson", "Tarantino", "Del Toro", "Kurosawa", "Hitchcock"
  ];

  // Movie titles
  const movieTitles = [
    "INCEPTION", "INTERSTELLAR", "THE GODFATHER", "PULP FICTION",
    "DARK KNIGHT", "AVATAR", "TITANIC", "JAWS", "STAR WARS",
    "MATRIX", "FIGHT CLUB", "FORREST GUMP", "GLADIATOR", "BRAVEHEART",
    "SHAWANK", "GOODFELLAS", "CITIZEN KANE", "VERTIGO", "PSYCHO"
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep cinematic gradient base */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(178, 34, 34, 0.08) 0%, transparent 60%),
            linear-gradient(180deg, 
              #0a0a0f 0%, 
              #0d0d14 15%, 
              #111118 30%, 
              #0f0a0d 50%, 
              #0a0a0f 70%, 
              #080810 85%, 
              #050508 100%
            )
          `
        }}
      />

      {/* Film grain texture */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 10%, rgba(0, 0, 0, 0.6) 100%)'
        }}
      />

      {/* ========== CONTENT LAYER - Dense cinema elements ========== */}
      <div className="absolute inset-0">
        
        {/* Scattered movie quotes - Layer 1 */}
        {movieQuotes.map((quote, i) => (
          <span
            key={`quote-${i}`}
            className="absolute text-[8px] md:text-[10px] font-serif italic text-white/10 truncate max-w-[100px]"
            style={{
              top: `${(i * 4.5) % 95}%`,
              left: `${(i * 7.3) % 90}%`,
              transform: `rotate(${(i * 15) - 10}deg)`,
            }}
          >
            "{quote}"
          </span>
        ))}

        {/* Director names - Layer 2 */}
        {directors.map((director, i) => (
          <span
            key={`director-${i}`}
            className="absolute text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-amber-500/8"
            style={{
              top: `${(i * 6.8) % 90}%`,
              left: `${(i * 11.5) % 85}%`,
              transform: `rotate(${(i * 8) - 20}deg)`,
            }}
          >
            {director}
          </span>
        ))}

        {/* Movie titles - Layer 3 */}
        {movieTitles.map((title, i) => (
          <span
            key={`title-${i}`}
            className="absolute text-[7px] md:text-[9px] font-mono font-bold tracking-[0.3em] text-white/6"
            style={{
              top: `${(i * 5.2) % 92}%`,
              left: `${(i * 9.7) % 88}%`,
              transform: `rotate(${(i * 12) - 30}deg)`,
            }}
          >
            {title}
          </span>
        ))}

        {/* Cinema emoji icons - Dense scatter */}
        {cinemaElements.map((emoji, i) => (
          <span
            key={`emoji-${i}`}
            className="absolute text-lg md:text-2xl"
            style={{
              top: `${(i * 4.7 + 2) % 96}%`,
              left: `${(i * 6.1 + 3) % 94}%`,
              opacity: 0.08 + (i % 5) * 0.02,
              transform: `rotate(${(i * 25) % 45 - 22}deg) scale(${0.8 + (i % 3) * 0.2})`,
            }}
          >
            {emoji}
          </span>
        ))}

        {/* Character icons */}
        {characters.map((char, i) => (
          <span
            key={`char-${i}`}
            className="absolute text-2xl md:text-4xl"
            style={{
              top: `${(i * 9.3 + 5) % 90}%`,
              left: `${(i * 10.2 + 8) % 88}%`,
              opacity: 0.06 + (i % 4) * 0.02,
              transform: `rotate(${(i * 30) % 60 - 30}deg)`,
            }}
          >
            {char.icon}
          </span>
        ))}

        {/* Film strip decorations - Multiple strips */}
        {[...Array(6)].map((_, i) => (
          <svg
            key={`filmstrip-${i}`}
            className="absolute text-white/5"
            style={{
              top: `${10 + i * 15}%`,
              left: `${-5 + (i % 3) * 35}%`,
              width: `${120 + i * 30}px`,
              height: '30px',
              transform: `rotate(${-8 + i * 4}deg)`,
            }}
            viewBox="0 0 200 30"
          >
            <rect x="0" y="0" width="200" height="30" fill="currentColor" rx="2"/>
            {[...Array(9)].map((_, j) => (
              <React.Fragment key={j}>
                <rect x={8 + j * 22} y="4" width="12" height="8" fill="#0a0a0f"/>
                <rect x={8 + j * 22} y="18" width="12" height="8" fill="#0a0a0f"/>
              </React.Fragment>
            ))}
          </svg>
        ))}

        {/* Film reels - Scattered */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={`reel-${i}`}
            className="absolute text-amber-600/10"
            style={{
              top: `${5 + i * 20}%`,
              left: `${80 - i * 18}%`,
              width: `${60 + i * 15}px`,
              height: `${60 + i * 15}px`,
              transform: `rotate(${i * 72}deg)`,
            }}
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" fill="none"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={angle}
                cx={50 + 32 * Math.cos(angle * Math.PI / 180)}
                cy={50 + 32 * Math.sin(angle * Math.PI / 180)}
                r="8"
                fill="currentColor"
              />
            ))}
          </svg>
        ))}

        {/* Clapperboards */}
        {[...Array(4)].map((_, i) => (
          <svg
            key={`clapper-${i}`}
            className="absolute text-white/8"
            style={{
              top: `${15 + i * 22}%`,
              right: `${5 + i * 12}%`,
              width: `${40 + i * 10}px`,
              height: `${50 + i * 8}px`,
              transform: `rotate(${-5 + i * 8}deg)`,
            }}
            viewBox="0 0 50 60"
          >
            <rect x="0" y="0" width="50" height="20" fill="currentColor"/>
            <rect x="0" y="20" width="50" height="40" fill="currentColor" opacity="0.7"/>
            <line x1="0" y1="0" x2="13" y2="20" stroke="#0a0a0f" strokeWidth="6"/>
            <line x1="13" y1="0" x2="26" y2="20" stroke="currentColor" strokeWidth="6"/>
            <line x1="26" y1="0" x2="39" y2="20" stroke="#0a0a0f" strokeWidth="6"/>
            <line x1="39" y1="0" x2="50" y2="20" stroke="currentColor" strokeWidth="6"/>
          </svg>
        ))}

        {/* Camera icons */}
        {[...Array(4)].map((_, i) => (
          <svg
            key={`camera-${i}`}
            className="absolute text-sky-400/8"
            style={{
              top: `${25 + i * 18}%`,
              left: `${3 + i * 25}%`,
              width: `${35 + i * 8}px`,
              height: `${28 + i * 6}px`,
              transform: `rotate(${-3 + i * 5}deg)`,
            }}
            viewBox="0 0 60 40"
          >
            <rect x="0" y="8" width="40" height="28" rx="4" fill="currentColor"/>
            <circle cx="28" cy="22" r="10" fill="#0a0a0f" stroke="currentColor" strokeWidth="2"/>
            <circle cx="28" cy="22" r="4" fill="currentColor"/>
            <polygon points="40,15 55,8 55,32 40,25" fill="currentColor"/>
          </svg>
        ))}

        {/* Popcorn buckets */}
        {[...Array(3)].map((_, i) => (
          <svg
            key={`popcorn-${i}`}
            className="absolute text-red-500/10"
            style={{
              bottom: `${10 + i * 30}%`,
              left: `${10 + i * 35}%`,
              width: `${30 + i * 8}px`,
              height: `${40 + i * 10}px`,
            }}
            viewBox="0 0 40 55"
          >
            <path d="M8 18 L4 52 L36 52 L32 18 Z" fill="currentColor"/>
            <circle cx="14" cy="15" r="8" fill="#fef3c7"/>
            <circle cx="26" cy="12" r="9" fill="#fef3c7"/>
            <circle cx="20" cy="8" r="7" fill="#fef3c7"/>
          </svg>
        ))}

        {/* Director chairs */}
        {[...Array(3)].map((_, i) => (
          <svg
            key={`chair-${i}`}
            className="absolute text-purple-500/8"
            style={{
              top: `${40 + i * 20}%`,
              right: `${15 + i * 30}%`,
              width: `${25 + i * 5}px`,
              height: `${35 + i * 8}px`,
            }}
            viewBox="0 0 35 50"
          >
            <rect x="5" y="15" width="25" height="20" fill="currentColor"/>
            <rect x="5" y="15" width="25" height="6" fill="#0a0a0f"/>
            <line x1="5" y1="35" x2="3" y2="48" stroke="currentColor" strokeWidth="3"/>
            <line x1="30" y1="35" x2="32" y2="48" stroke="currentColor" strokeWidth="3"/>
            <line x1="5" y1="15" x2="3" y2="5" stroke="currentColor" strokeWidth="3"/>
            <line x1="30" y1="15" x2="32" y2="5" stroke="currentColor" strokeWidth="3"/>
          </svg>
        ))}

        {/* Award trophies */}
        {[...Array(3)].map((_, i) => (
          <svg
            key={`trophy-${i}`}
            className="absolute text-yellow-500/12"
            style={{
              top: `${5 + i * 35}%`,
              left: `${70 - i * 20}%`,
              width: `${20 + i * 5}px`,
              height: `${28 + i * 6}px`,
            }}
            viewBox="0 0 30 45"
          >
            <path d="M10 0 L20 0 L19 18 L25 18 L20 25 L22 25 L22 28 L17 28 L16 35 L14 35 L13 28 L8 28 L8 25 L10 25 L5 18 L11 18 Z" fill="currentColor"/>
            <rect x="11" y="35" width="8" height="5" fill="currentColor"/>
            <rect x="9" y="40" width="12" height="4" rx="1" fill="currentColor"/>
          </svg>
        ))}

        {/* Tickets */}
        {[...Array(4)].map((_, i) => (
          <svg
            key={`ticket-${i}`}
            className="absolute text-amber-300/10"
            style={{
              top: `${12 + i * 22}%`,
              left: `${20 + i * 18}%`,
              width: `${45 + i * 8}px`,
              height: `${22 + i * 3}px`,
              transform: `rotate(${5 + i * 8}deg)`,
            }}
            viewBox="0 0 60 25"
          >
            <rect x="0" y="2" width="60" height="21" rx="2" fill="currentColor"/>
            <circle cx="0" cy="12" r="5" fill="#0a0a0f"/>
            <circle cx="60" cy="12" r="5" fill="#0a0a0f"/>
            <line x1="10" y1="8" x2="50" y2="8" stroke="#0a0a0f" strokeWidth="1.5"/>
            <line x1="10" y1="13" x2="50" y2="13" stroke="#0a0a0f" strokeWidth="1.5"/>
          </svg>
        ))}

        {/* Stars scattered */}
        {[...Array(15)].map((_, i) => (
          <svg
            key={`star-${i}`}
            className="absolute text-yellow-400/15"
            style={{
              top: `${(i * 6.5 + 3) % 95}%`,
              left: `${(i * 7.3 + 5) % 92}%`,
              width: `${12 + (i % 4) * 4}px`,
              height: `${12 + (i % 4) * 4}px`,
              transform: `rotate(${i * 24}deg)`,
            }}
            viewBox="0 0 24 24"
          >
            <path d="M12 2 L14 9 L21 9 L16 14 L18 21 L12 17 L6 21 L8 14 L3 9 L10 9 Z" fill="currentColor"/>
          </svg>
        ))}

        {/* Spotlight beams */}
        <div 
          className="absolute top-0 left-[10%] w-[200px] h-[500px] opacity-[0.06] -rotate-12"
          style={{
            background: 'linear-gradient(180deg, rgba(255,200,100,0.8) 0%, transparent 100%)',
            transform: 'skewX(-15deg)',
          }}
        />
        <div 
          className="absolute top-0 right-[15%] w-[150px] h-[400px] opacity-[0.05] rotate-6"
          style={{
            background: 'linear-gradient(180deg, rgba(100,150,255,0.6) 0%, transparent 100%)',
            transform: 'skewX(12deg)',
          }}
        />

        {/* More scattered text - Scene numbers */}
        {[...Array(10)].map((_, i) => (
          <span
            key={`scene-${i}`}
            className="absolute text-[8px] font-mono text-white/8"
            style={{
              top: `${(i * 10) + 5}%`,
              left: `${(i * 9.5) % 90 + 2}%`,
            }}
          >
            SCENE {i + 1} - TAKE {Math.floor(Math.random() * 5) + 1}
          </span>
        ))}

        {/* Timecodes */}
        {[...Array(8)].map((_, i) => (
          <span
            key={`timecode-${i}`}
            className="absolute text-[7px] font-mono text-red-500/15"
            style={{
              top: `${(i * 12) + 8}%`,
              right: `${(i * 11) % 85 + 5}%`,
            }}
          >
            {String(Math.floor(Math.random() * 2)).padStart(2, '0')}:
            {String(Math.floor(Math.random() * 60)).padStart(2, '0')}:
            {String(Math.floor(Math.random() * 60)).padStart(2, '0')}:
            {String(Math.floor(Math.random() * 24)).padStart(2, '0')}
          </span>
        ))}

        {/* Floating dots/particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              top: `${(i * 3.3) % 98}%`,
              left: `${(i * 3.3 + 1) % 97}%`,
              backgroundColor: i % 3 === 0 ? 'rgba(255,200,100,0.15)' : i % 3 === 1 ? 'rgba(100,150,255,0.1)' : 'rgba(255,100,100,0.12)',
            }}
          />
        ))}

        {/* Lens flares */}
        <div 
          className="absolute top-[20%] right-[25%] w-[100px] h-[100px] rounded-full opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, rgba(255,220,150,0.8) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute top-[60%] left-[15%] w-[80px] h-[80px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(150,200,255,0.6) 0%, transparent 70%)',
          }}
        />

      </div>

      {/* Additional dark overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, transparent 0%, rgba(0, 0, 0, 0.3) 100%)
          `
        }}
      />
    </div>
  );
}
