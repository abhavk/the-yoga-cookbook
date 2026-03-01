"use client";

import { useState } from "react";

const designs = [
  { src: "/design-3.html", label: "The Asana Palate" },
  { src: "/design-1.html", label: "The Sattvic Kitchen" },
  { src: "/design-2.html", label: "Sattvic Roots" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % designs.length);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-neutral-900">
      {/* Design label */}
      <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/70 px-5 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md">
        {current + 1} / {designs.length} — {designs[current].label}
      </div>

      {/* Iframe for current design */}
      <iframe
        key={current}
        src={designs[current].src}
        className="h-full w-full border-0"
        title={designs[current].label}
      />

      {/* Floating action button */}
      <button
        onClick={next}
        aria-label="Next design"
        className="group absolute bottom-8 right-8 z-30 flex items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-black shadow-2xl ring-1 ring-black/10 transition-all duration-200 hover:scale-105 hover:shadow-3xl active:scale-95"
      >
        <span className="text-sm font-semibold uppercase tracking-wider">
          Next Design
        </span>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors duration-200 group-hover:bg-neutral-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
