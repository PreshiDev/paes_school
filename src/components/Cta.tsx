import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const images = [
  "./src/assets/paes_outing2.jpg", // Replace with actual image paths
  "./src/assets/paes_outing1.jpg",
  "./src/assets/paes_outing3.jpg",
  "./src/assets/paes_staffs.jpg",
  "./src/assets/paes_computer_lag1.jpg",
];

export const Cta = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      id="gallery"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          School <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Gallery</span>
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[400px] object-cover transition-all duration-700"
            />
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
          >
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow-md"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>

        {/* Add More Images Button */}
        {/* <div className="mt-8">
          <Button
            onClick={() => alert("Add more pictures here!")}
            variant="outline"
          >
            Add More Pictures
          </Button>
        </div> */}
      </div>
    </section>
  );
};
