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
import christopherStorer from "../../assets/flim-makers/Christopher Storer.jpeg";

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
      { label: "Taika Waititi", image: taika },
      { label: "Christopher Storer", image: christopherStorer }
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
      {/* Gradient Overlays for fade effect - Ocean theme */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,245,212,0.4)] border border-[#00F5D4]/40 cursor-pointer"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_15px_rgba(0,245,212,0.4)] border border-[#00F5D4]/40 cursor-pointer"
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
            className="flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-[#00BBF9]/30"
          >
            <img
              src={poster}
              alt=""
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
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
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              Math.floor(currentIndex) === index 
                ? 'bg-[#00F5D4] w-4 shadow-[0_0_8px_rgba(0,245,212,0.6)]' 
                : 'bg-[#00F5D4]/20 hover:bg-[#00F5D4]/60'
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
      {/* Gradient Overlays for fade effect - ocean theme */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
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
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-[#00BBF9]/30"
          >
            {/* Filmmaker Image */}
            <img 
              src={item.image} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-[#00F5D4] text-[#0a192f] px-2 py-1 rounded-sm font-bold shadow-[0_0_8px_rgba(0,245,212,0.4)]">
                Director
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-[14px] uppercase tracking-[0.14em] font-bold text-white">
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
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              Math.floor(currentIndex) === index 
                ? 'bg-[#00F5D4] w-4 shadow-[0_0_8px_rgba(0,245,212,0.6)]' 
                : 'bg-[#00F5D4]/20 hover:bg-[#00F5D4]/60'
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
      {/* Gradient Overlays for fade effect - ocean theme */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
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
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-[#00BBF9]/30"
          >
            {/* Book Image */}
            <img 
              src={item.image} 
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-[#00F5D4] text-[#0a192f] px-2 py-1 rounded-sm font-bold shadow-[0_0_8px_rgba(0,245,212,0.4)]">
                Book
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-[13px] uppercase tracking-[0.14em] font-bold mb-1 text-white line-clamp-2">
                {item.label}
              </div>
              <div className="text-[11px] text-[#00BBF9] font-bold">{item.note}</div>
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
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              Math.floor(currentIndex) === index 
                ? 'bg-[#00F5D4] w-4 shadow-[0_0_8px_rgba(0,245,212,0.6)]' 
                : 'bg-[#00F5D4]/20 hover:bg-[#00F5D4]/60'
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
      {/* Gradient Overlays for fade effect - ocean theme */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a192f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a192f] to-transparent z-10 pointer-events-none" />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#00F5D4]/80 hover:bg-[#00F5D4] text-[#0a192f] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#00F5D4]/40 cursor-pointer"
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
            className="relative flex-shrink-0 w-36 sm:w-44 md:w-52 aspect-[2/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-[#00BBF9]/30"
          >
            {/* Anime Image */}
            <img 
              src={item.image} 
              alt="Anime"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500"
            />
            
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-3 left-3 z-10">
              <span className="text-[8px] uppercase tracking-[0.14em] bg-[#00F5D4] text-[#0a192f] px-2 py-1 rounded-sm font-bold shadow-[0_0_8px_rgba(0,245,212,0.4)]">
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
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              Math.floor(currentIndex) === index 
                ? 'bg-[#00F5D4] w-4 shadow-[0_0_8px_rgba(0,245,212,0.6)]' 
                : 'bg-[#00F5D4]/20 hover:bg-[#00F5D4]/60'
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
      <div className="relative bg-gradient-to-br from-[#0a192f] via-[#09121d] to-[#04080e] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-[#00BBF9]/20 px-6 py-8 sm:px-8 sm:py-10 overflow-hidden">
        {/* Animated Water Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#00F5D4]/20 rounded-full animate-pulse blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-[#00BBF9]/10 rounded-full animate-pulse delay-500 blur-3xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <header className="flex flex-wrap items-baseline gap-4 mb-8">
            <span className="uppercase tracking-[0.2em] text-[12px] text-[#00F5D4] bg-white/5 px-4 py-2 rounded-sm border border-dashed border-[#00F5D4]/30 font-bold">
              Influence Board
            </span>
            <h2 className="font-display text-[20px] uppercase tracking-[0.24em] bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] px-5 py-2 rounded-sm shadow-[0_8px_0_rgba(0,245,212,0.3)] border border-[#00F5D4]/40">
              Favourites <span className="text-[#0a192f]/70">Shelf</span>
            </h2>
          </header>

          {/* Category Tabs - Clickable Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-[13px] uppercase tracking-[0.18em] px-5 py-2.5 rounded-sm border transition-all duration-200 cursor-pointer font-bold ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] text-[#0a192f] border-[#00F5D4] shadow-[0_4px_15px_rgba(0,245,212,0.3)] scale-105"
                    : "bg-white/5 border-white/10 text-blue-100/60 hover:border-[#00F5D4]/40 hover:bg-white/15 hover:-translate-y-0.5"
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
                    className={`relative aspect-[3/4] rounded-[16px] ocean-glass shadow-[0_16px_0_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-300 group border border-white/10 ${
                      index % 2 === 0 ? "-rotate-1" : "rotate-1"
                    } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_22px_0_rgba(0,0,0,0.35)] hover:border-[#00F5D4]`}
                  >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[8px] uppercase tracking-[0.14em] bg-[#00F5D4] text-[#0a192f] px-2 py-1 rounded-sm font-bold">
                        {activeData.id.slice(0, -1)}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-2 left-2 right-2 ocean-glass rounded-[12px] px-3 py-3 border border-white/10">
                      <div className="text-[12px] uppercase tracking-[0.12em] font-bold mb-1 text-white">
                        {item.label}
                      </div>
                      <div className="text-[9px] text-[#00BBF9] font-bold mb-1">{item.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Decorative element */}
          <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#00BBF9]/40">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00BBF9]/20 to-transparent" />
            <span>Click tabs to explore</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#00BBF9]/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
