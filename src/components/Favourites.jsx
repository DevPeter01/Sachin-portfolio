import React, { useState } from "react";
import ScrollRevealSection from "./ScrollRevealSection.jsx";

// Import film posters
import poster1 from "../../assets/fav-flim/poster.jpg";
import poster2 from "../../assets/fav-flim/poster1.jpg";
import poster3 from "../../assets/fav-flim/poster24.webp";
import poster4 from "../../assets/fav-flim/poster3456.webp";
import poster5 from "../../assets/fav-flim/terminal poster.webp";
import poster6 from "../../assets/fav-flim/cap poster.avif";
import poster7 from "../../assets/fav-flim/cars poster.webp";
import poster8 from "../../assets/fav-flim/bf poster.avif";
import poster9 from "../../assets/fav-flim/iraivi poster.webp";
import poster10 from "../../assets/fav-flim/poster kkk.jpg";
import poster11 from "../../assets/fav-flim/Cmoncmon1.jpg";
import poster12 from "../../assets/fav-flim/wres poster4.jpg";

const categories = [
  {
    id: "films",
    title: "Favourite Films",
    items: [
      { label: "Inception", note: "Dreams within dreams", poster: poster1 },
      { label: "Interstellar", note: "Time & space", poster: poster2 },
      { label: "The Dark Knight", note: "Chaos & order", poster: poster3 },
      { label: "Parasite", note: "Class & chaos", poster: poster4 },
      { label: "The Terminal", note: "Waiting & hope", poster: poster5 },
      { label: "Captain America", note: "Heroism & sacrifice", poster: poster6 },
      { label: "Cars", note: "Speed & friendship", poster: poster7 },
      { label: "The Batman", note: "Vengeance & justice", poster: poster8 },
      { label: "Iraivi", note: "Women & freedom", poster: poster9 },
      { label: "Super Deluxe", note: "Multi-thread chaos", poster: poster10 },
      { label: "C'mon C'mon", note: "Life & connections", poster: poster11 },
      { label: "The Wrestler", note: "Glory & decay", poster: poster12 }
    ]
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activeData?.items.map((item, index) => (
            <div
              key={item.label}
              className={`relative aspect-[3/4] rounded-[16px] shadow-[0_16px_0_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 group ${
                index % 2 === 0 ? "-rotate-1" : "rotate-1"
              } hover:rotate-0 hover:-translate-y-2 hover:shadow-[0_22px_0_rgba(0,0,0,0.2)]`}
            >
              {/* Poster Image or Gradient Background */}
              {item.poster ? (
                <img 
                  src={item.poster} 
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffe4d5] to-[#fde6ff]" />
              )}
              
              {/* Overlay gradient for text readability */}
              {item.poster && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              )}
              
              {/* Background texture for non-poster items */}
              {!item.poster && (
                <div className="absolute inset-2 rounded-[12px] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_50%),linear-gradient(135deg,rgba(0,0,0,0.05),transparent_40%)] mix-blend-multiply" />
              )}
              
              {/* Category badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[8px] uppercase tracking-[0.14em] bg-black/70 text-white px-2 py-1 rounded-full">
                  {activeData.id === "filmmakers" ? "Director" : activeData.id.slice(0, -1)}
                </span>
              </div>

              {/* Content */}
              <div className={`absolute bottom-2 left-2 right-2 rounded-[12px] px-3 py-3 ${
                item.poster ? 'bg-transparent' : 'bg-[#fffaf5]/95'
              }`}>
                <div className={`text-[12px] uppercase tracking-[0.12em] font-semibold mb-1 ${
                  item.poster ? 'text-white' : ''
                }`}>
                  {item.label}
                </div>
                <div className={`text-[9px] mb-1 ${
                  item.poster ? 'text-white/80' : 'text-neutral-600'
                }`}>{item.note}</div>
                {item.works && (
                  <div className="text-[8px] text-neutral-500 italic">
                    {item.works}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
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
