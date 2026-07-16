import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import image1 from "../assets/paes_outing2.jpg";
import image2 from "../assets/paes_outing1.jpg";
import image3 from "../assets/paes_outing3.jpg";
import image4 from "../assets/paes_staffs.jpg";
import image5 from "../assets/paes_computer_lag1.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: image1,
    alt: "School Outing",
    caption: "Students enjoying an educational trip",
  },
  {
    src: image2,
    alt: "School Outing",
    caption: "Building teamwork through outdoor activities",
  },
  {
    src: image3,
    alt: "School Event",
    caption: "Celebrating achievements together",
  },
  {
    src: image4,
    alt: "School Staff",
    caption: "Our dedicated and professional teaching staff",
  },
  {
    src: image5,
    alt: "Computer Lab",
    caption: "State-of-the-art computer laboratory",
  },
];

export const Cta = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && isVisible) {
      intervalRef.current = setInterval(() => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isVisible]);

  const handlePrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-100/40 to-pink-100/40 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-100/40 to-cyan-100/40 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800 text-sm font-medium text-purple-700 dark:text-purple-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            Our Moments
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            School{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-transparent bg-clip-text">
                Gallery
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 4 Q100 0 200 4"
                  stroke="url(#gallery-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={isVisible ? "animate-draw-gallery" : ""}
                />
                <defs>
                  <linearGradient id="gallery-underline">
                    <stop offset="0%" stopColor="#9333ea" />
                    <stop offset="50%" stopColor="#db2777" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore moments from our vibrant school community and see our 
            students in action.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image Container */}
          <div className="relative group">
            {/* Decorative frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500" />
            
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700">
              {/* Image */}
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"
                  }`}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                        {images[currentIndex].alt}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        {images[currentIndex].caption}
                      </p>
                    </div>
                    <div className="text-white/60 text-sm">
                      {currentIndex + 1} / {images.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Fullscreen button */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-3 right-3 w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-lg shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              aria-label="View fullscreen"
            >
              <Maximize2 className="w-5 h-5" />
            </button>

            {/* Pause/Play indicator */}
            {isPaused && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-2 h-8 bg-white rounded-full" />
                    <div className="w-2 h-8 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative w-20 h-16 md:w-24 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? "border-purple-500 shadow-lg shadow-purple-500/25 scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent" />
                )}
              </button>
            ))}
          </div>

          {/* Dot Indicators (Mobile) */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-purple-600 w-8"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-lg">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes slide-in-right {
          0% { transform: translateX(50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-left {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes draw-gallery {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.5s ease-out;
        }

        .animate-draw-gallery {
          stroke-dasharray: 200;
          animation: draw-gallery 1.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};