import React, { useState, useEffect, useRef } from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

const categories = [
  {
    id: "films",
    title: "Favourite Films"
  },
  {
    id: "books",
    title: "Favourite Books",
    items: [
      { label: "Story – McKee", note: "Structure & arcs" },
      { label: "Save The Cat!", note: "Beats & genre" },
      { label: "On Film-making", note: "Craft & vision" }
    ]
  },
  {
    id: "anime",
    title: "Favourite Anime",
    items: [
      { label: "Your Name", note: "Time & memory" },
      { label: "Attack on Titan", note: "Scale & stakes" },
      { label: "Spirited Away", note: "Magic & growth" }
    ]
  },
  {
    id: "filmmakers",
    title: "Favourite Filmmakers",
    items: [
      { label: "Quentin Tarantino", note: "Dialogue & violence", works: "Pulp Fiction, Kill Bill" },
      { label: "Christopher Nolan", note: "Time & complexity", works: "Inception, Interstellar" },
      { label: "Martin Scorsese", note: "Grit & character", works: "Goodfellas, Taxi Driver" },
      { label: "Gautham Vasudev Menon", note: "Romance & style", works: "Vinnaithaandi Varuvaayaa" }
    ]
  }
];

// Film posters using public folder path
const filmPosters = [
  "/posters/poster1.jpg",
  "/posters/poster24.webp",
  "/posters/poster3456.webp",
  "/posters/terminal.webp",
  "/posters/cars.webp",
  "/posters/bf.avif",
  "/posters/iraivi.webp"
];

// Auto-scrolling Film Carousel Component with Navigation
function FilmCarousel() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(null);

  // Triple the posters for smooth infinite scroll
  const allPosters = [...filmPosters, ...filmPosters, ...filmPosters];
  const posterWidth = 208; // w-52 = 13rem = 208px + gap
  const totalPosters = filmPosters.length;

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered) {
        setCurrentIndex(prev => {
          const next = prev + 0.3;
          if (next >= totalPosters) {
            return 0;
          }
          return next;
        });
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, totalPosters]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = currentIndex * posterWidth;
    }
  }, [currentIndex]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => {
      const newIndex = prev - 3;
      if (newIndex < 0) {
        return totalPosters + newIndex;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev + 3;
      if (newIndex >= totalPosters) {
        return newIndex - totalPosters;
      }
      return newIndex;
    });
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#fffaf3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#fffaf3] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden py-4 px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allPosters.map((poster, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={poster}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {filmPosters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex) === index 
                ? 'bg-accentRed w-4' 
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Favourites() {
  const [activeCategory, setActiveCategory] = useState("films");

  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <ScrollRevealSection id="favourites" className="bg-[#fffaf3]">
      <header className="flex flex-wrap items-baseline gap-3 mb-6">
        <span className="uppercase tracking-[0.18em] text-[10px] text-neutral-600 bg-white/70 px-2 py-1 rounded-full border border-dashed border-black/20">
          Influence Board
        </span>
        <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-[#fff0cc] px-3 py-1 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-black">
          <span className="text-accentRed">Favourites</span> Shelf
        </h2>
      </header>

      {/* Category Tabs - Clickable Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-[11px] uppercase tracking-[0.16em] px-4 py-2 rounded-full border-2 transition-all duration-200 cursor-pointer ${
              activeCategory === cat.id
                ? "bg-accentRed text-white border-accentRed shadow-[0_4px_0_rgba(0,0,0,0.2)] -translate-y-0.5"
                : "bg-white/80 border-black/30 text-neutral-700 hover:border-accentYellow hover:bg-accentYellow/20 hover:-translate-y-0.5"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Active Category Content */}
      <div className="min-h-[200px]">
        {/* Films - Auto-scrolling Carousel */}
        {activeCategory === "films" ? (
          <FilmCarousel />
        ) : (
          /* Other Categories - Grid Layout */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {activeData?.items?.map((item, index) => (
              <div
                key={item.label}
                className={`relative aspect-[3/4] rounded-[16px] bg-gradient-to-br from-[#ffe4d5] to-[#fde6ff] shadow-[0_16px_0_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 group ${
                  index % 2 === 0 ? "-rotate-1" : "rotate-1"
                } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_22px_0_rgba(0,0,0,0.2)]`}
              >
                {/* Background texture */}
                <div className="absolute inset-2 rounded-[12px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_50%),linear-gradient(135deg,rgba(0,0,0,0.05),transparent_40%)] mix-blend-multiply" />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[8px] uppercase tracking-[0.14em] bg-black/70 text-white px-2 py-1 rounded-full">
                    {activeData.id === "filmmakers" ? "Director" : activeData.id.slice(0, -1)}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-2 left-2 right-2 bg-[#fffaf5]/95 rounded-[12px] px-3 py-3">
                  <div className="text-[12px] uppercase tracking-[0.12em] font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-[9px] text-neutral-600 mb-1">{item.note}</div>
                  {item.works && (
                    <div className="text-[8px] text-neutral-500 italic">
                      {item.works}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-neutral-500">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
        <span>Click tabs to explore</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      </div>
    </ScrollRevealSection>
  );
}
