import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import dzamija1 from "../assets/dzamija1.jpeg";
import dzamija2 from "../assets/dzamija2.jpeg";
import dzamija3 from "../assets/dzamija3.jpeg";
import dzamija4 from "../assets/dzamija4.jpeg";

const currentImages = [
  { src: dzamija1, alt: "Džamija - trenutno stanje 1" },
  { src: dzamija2, alt: "Džamija - trenutno stanje 2" },
];

const projectImages = [
  { src: dzamija3, alt: "Džamija - projekat 1" },
  { src: dzamija4, alt: "Džamija - projekat 2" },
];

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  title: string;
  titleColor: string;
  borderColor: string;
}

const ImageCarousel = ({ images, title, titleColor, borderColor }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      next();
    } else if (distance < -minSwipeDistance) {
      prev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="space-y-2">
      <h3 className={`text-center text-base sm:text-lg font-bold ${titleColor} font-elegant tracking-wide`}>
        {title}
      </h3>
      <div
        className={`relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 ${borderColor}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
        />

        {/* Navigation arrows - fixed position */}
        <button
          onClick={prev}
          className="gallery-nav absolute left-2 top-1/2 p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 text-white rounded-full"
          aria-label="Prethodna slika"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={next}
          className="gallery-nav absolute right-2 top-1/2 p-1.5 sm:p-2 bg-black/60 hover:bg-black/80 text-white rounded-full"
          aria-label="Sljedeća slika"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full ${
                idx === currentIndex
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Slika ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ImageGallery = () => {
  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-3 sm:gap-6">
          <ImageCarousel
            images={currentImages}
            title="TRENUTNO STANJE"
            titleColor="text-secondary"
            borderColor="border-gray-200"
          />
          <ImageCarousel
            images={projectImages}
            title="PROJEKAT"
            titleColor="text-primary"
            borderColor="border-primary/30"
          />
        </div>
      </div>
    </section>
  );
};
