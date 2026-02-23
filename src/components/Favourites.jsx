import React, { useState, useEffect, useRef } from "react";

// Import film posters from assets
import poster1 from "../../assets/fav-flim/poster1.jpg";
import poster24 from "../../assets/fav-flim/poster24.webp";
import poster3456 from "../../assets/fav-flim/poster3456.webp";
import terminal from "../../assets/fav-flim/terminal poster.webp";
import cars from "../../assets/fav-flim/cars poster.webp";
import bf from "../../assets/fav-flim/bf poster.avif";
import iraivi from "../../assets/fav-flim/iraivi poster.webp";
import kkk from "../../assets/fav-flim/poster kkk.jpg";
import cmon from "../../assets/fav-flim/Cmoncmon1.jpg";
import wres from "../../assets/fav-flim/wres poster4.jpg";
import poster5 from "../../assets/fav-flim/poster 5.webp";
import poster12 from "../../assets/fav-flim/12 posters.jpg";
import kit from "../../assets/fav-flim/kit poster.jpg";
import poster456 from "../../assets/fav-flim/poster456.webp";
import poster568 from "../../assets/fav-flim/poster568.webp";
import rb8 from "../../assets/fav-flim/rb 8 poster.webp";

// Import filmmaker images from assets
import tarantino from "../../assets/flim-makers/Quentin-Tarantino.jpeg";
import myskin from "../../assets/flim-makers/myskin.jpeg";
import mikeMiles from "../../assets/flim-makers/mike-miles.jpeg";
import russoBrothers from "../../assets/flim-makers/russo-brothers.jpeg";
import stevenSpielberg from "../../assets/flim-makers/steven-spelberg.jpeg";
import taika from "../../assets/flim-makers/Taika-Waititi.jpeg";

// Import book images from assets
import inTheBlink from "../../assets/books/in_the_blink_of_an_eye.jpeg";
import makingMovies from "../../assets/books/making-movies.jpeg";
import metamorphosis from "../../assets/books/metamorphosis.jpeg";
import susanSontag from "../../assets/books/susan-sontag-on-photography.jpeg";
import thamarabarani from "../../assets/books/thamarabaraniyil-kollapadathavargal.jpeg";
import theAlchemist from "../../assets/books/the-alchemist.jpeg";

// Import anime images from assets
import anime1 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.05.jpeg";
import anime2 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.05 (1).jpeg";
import anime3 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.05 (2).jpeg";
import anime4 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.06.jpeg";
import anime5 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.06 (1).jpeg";
import anime6 from "../../assets/fav-anime/WhatsApp Image 2026-02-23 at 20.12.06 (2).jpeg";

const categories = [
  {
    id: "films",
    title: "Favourite Films"
  },
  {
    id: "books",
    title: "Books",
    items: [
      { label: "In the Blink of an Eye", note: "Editing & Rhythm", image: inTheBlink },
      { label: "Making Movies", note: "Director's Craft", image: makingMovies },
      { label: "Metamorphosis", note: "Transformation & Identity", image: metamorphosis },
      { label: "On Photography", note: "Visual Truth", image: susanSontag },
      { label: "Thamarabaraniyil Kollapadathavargal", note: "Tamil Poetry", image: thamarabarani },
      { label: "The Alchemist", note: "Journey & Dreams", image: theAlchemist }
    ]
  },
  {
    id: "anime",
    title: "Favourite Anime",
    items: [
      { image: anime1 },
      { image: anime2 },
      { image: anime3 },
      { image: anime4 },
      { image: anime5 },
      { image: anime6 }
    ]
  },
  {
    id: "filmmakers",
    title: "Favourite Filmmakers",
    items: [
      { label: "Quentin Tarantino", image: tarantino },
      { label: "Mysskin", image: myskin },
      { label: "Mike Miles", image: mikeMiles },
      { label: "Russo Brothers", image: russoBrothers },
      { label: "Steven Spielberg", image: stevenSpielberg },
      { label: "Taika Waititi", image: taika }
    ]
  }
];

// Film posters imported from assets
const filmPosters = [
  poster1,
  poster24,
  poster3456,
  terminal,
  cars,
  bf,
  iraivi,
  kkk,
  cmon,
  wres,
  poster5,
  poster12,
  kit,
  poster456,
  poster568,
  rb8
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
          const next = prev + 0.008; // Scroll speed (very slow)
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
      {/* Gradient Overlays for fade effect - dark theme */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a1410] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a1410] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
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
            className="flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-amber-500/30"
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
                : 'bg-amber-500/40 hover:bg-amber-500/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Auto-scrolling Filmmaker Carousel Component with Navigation
function FilmmakerCarousel({ items }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(null);

  // Triple the items for smooth infinite scroll
  const allItems = [...items, ...items, ...items];
  const itemWidth = 208; // w-52 = 13rem = 208px + gap
  const totalItems = items.length;

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered) {
        setCurrentIndex(prev => {
          const next = prev + 0.008; // Scroll speed (very slow)
          if (next >= totalItems) {
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
  }, [isHovered, totalItems]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = currentIndex * itemWidth;
    }
  }, [currentIndex, itemWidth]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return totalItems + newIndex;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= totalItems) {
        return newIndex - totalItems;
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
      {/* Gradient Overlays for fade effect - dark theme */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a1410] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a1410] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
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
        {allItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-amber-500/30"
          >
            {/* Filmmaker Image */}
            <img 
              src={item.image} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-accentRed text-white px-2 py-1 rounded-full">
                Director
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="text-[12px] uppercase tracking-[0.12em] font-semibold text-amber-100">
                {item.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex) === index 
                ? 'bg-accentRed w-4' 
                : 'bg-amber-500/40 hover:bg-amber-500/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Auto-scrolling Books Carousel Component with Navigation
function BooksCarousel({ items }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(null);

  // Triple the items for smooth infinite scroll
  const allItems = [...items, ...items, ...items];
  const itemWidth = 208; // w-52 = 13rem = 208px + gap
  const totalItems = items.length;

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered) {
        setCurrentIndex(prev => {
          const next = prev + 0.008; // Scroll speed (very slow)
          if (next >= totalItems) {
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
  }, [isHovered, totalItems]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = currentIndex * itemWidth;
    }
  }, [currentIndex, itemWidth]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return totalItems + newIndex;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= totalItems) {
        return newIndex - totalItems;
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
      {/* Gradient Overlays for fade effect - dark theme */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a1410] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a1410] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
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
        {allItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-amber-500/30"
          >
            {/* Book Image */}
            <img 
              src={item.image} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-accentRed text-white px-2 py-1 rounded-full">
                Book
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-1 text-amber-100 line-clamp-2">
                {item.label}
              </div>
              <div className="text-[9px] text-amber-200/70">{item.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex) === index 
                ? 'bg-accentRed w-4' 
                : 'bg-amber-500/40 hover:bg-amber-500/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Auto-scrolling Anime Carousel Component with Navigation
function AnimeCarousel({ items }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(null);

  // Triple the items for smooth infinite scroll
  const allItems = [...items, ...items, ...items];
  const itemWidth = 208; // w-52 = 13rem = 208px + gap
  const totalItems = items.length;

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered) {
        setCurrentIndex(prev => {
          const next = prev + 0.008; // Scroll speed (very slow)
          if (next >= totalItems) {
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
  }, [isHovered, totalItems]);

  // Update scroll position when currentIndex changes
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.scrollLeft = currentIndex * itemWidth;
    }
  }, [currentIndex, itemWidth]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return totalItems + newIndex;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= totalItems) {
        return newIndex - totalItems;
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
      {/* Gradient Overlays for fade effect - dark theme */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1a1410] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1a1410] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-amber-500/80 hover:bg-amber-500 text-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
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
        {allItems.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-amber-500/30"
          >
            {/* Anime Image */}
            <img 
              src={item.image} 
              alt="Anime"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-accentRed text-white px-2 py-1 rounded-full">
                Anime
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex) === index 
                ? 'bg-accentRed w-4' 
                : 'bg-amber-500/40 hover:bg-amber-500/60'
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
    <section id="favourites" className="mt-20">
      <div className="relative bg-gradient-to-br from-[#1a1410] via-[#2d2420] to-[#1f1a15] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-amber-900/30 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden">
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
          
          {/* Star shapes */}
          <div className="absolute top-12 left-1/3 w-4 h-4 bg-amber-500/30 rounded-sm transform rotate-45"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-amber-500/30 rounded-sm transform rotate-12"></div>
        </div>
        
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,90,43,0.15)_0%,transparent_70%)]"></div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-3 mb-6">
            <span className="uppercase tracking-[0.18em] text-[10px] text-amber-200/70 bg-black/40 px-3 py-1.5 rounded-full border border-dashed border-amber-500/30">
              Influence Board
            </span>
            <h2 className="font-display text-[17px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#2a2218] to-[#3d3020] px-4 py-1.5 rounded-full shadow-[0_8px_0_rgba(255,75,75,0.3)] border border-amber-700/40">
              <span className="text-accentRed">Favourites</span> <span className="text-amber-100">Shelf</span>
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
                    : "bg-black/40 border-amber-500/30 text-amber-100/70 hover:border-amber-500/50 hover:bg-black/50 hover:-translate-y-0.5"
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
            ) : activeCategory === "filmmakers" ? (
              /* Filmmakers - Auto-scrolling Carousel */
              <FilmmakerCarousel items={activeData?.items || []} />
            ) : activeCategory === "books" ? (
              /* Books - Auto-scrolling Carousel */
              <BooksCarousel items={activeData?.items || []} />
            ) : activeCategory === "anime" ? (
              /* Anime - Auto-scrolling Carousel */
              <AnimeCarousel items={activeData?.items || []} />
            ) : (
              /* Other Categories - Grid Layout */
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {activeData?.items?.map((item, index) => (
                  <div
                    key={item.label}
                    className={`relative aspect-[3/4] rounded-[16px] bg-gradient-to-br from-[#3d3020] to-[#2a2218] shadow-[0_16px_0_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 group border border-amber-500/20 ${
                      index % 2 === 0 ? "-rotate-1" : "rotate-1"
                    } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_22px_0_rgba(0,0,0,0.35)] hover:border-amber-500/40`}
                  >
                    {/* Background texture */}
                    <div className="absolute inset-2 rounded-[12px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,100,0.1),transparent_50%)]" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[8px] uppercase tracking-[0.14em] bg-accentRed text-white px-2 py-1 rounded-full">
                        {activeData.id.slice(0, -1)}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-2 left-2 right-2 bg-[#1a1410]/95 rounded-[12px] px-3 py-3 border border-amber-500/20">
                      <div className="text-[12px] uppercase tracking-[0.12em] font-semibold mb-1 text-amber-100">
                        {item.label}
                      </div>
                      <div className="text-[9px] text-amber-200/60 mb-1">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Decorative element */}
          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-amber-200/40">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <span>Click tabs to explore</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
