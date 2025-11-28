"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // AUTOSLIDE
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  // SWIPE START
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // SWIPE END
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (delta < -50) {
      setIndex((prev) => (prev + 1) % images.length);
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden group"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* navigation */}
      <button
        onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
