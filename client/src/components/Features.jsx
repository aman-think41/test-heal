import React, { useEffect, useState } from "react";
import "./features.css";
import wave from "../assets/wave.svg";
import line from "../assets/line.svg";

const Features = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % data.slides.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, data.slides.length]);

  const getWavePosition = () => {
    switch (currentSlide) {
      case 0:
        return "left";
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length);
  };

  return (
    <div>
      <header>
        <h1 className="font-bold text-5xl text-[#F68C20] text-center mb-5 mt-5">
          {data.title}
        </h1>
        <img className="line-svg mb-10" src={line} alt="Line" />
      </header>

      <div className="slideshow-container">
        <div 
          className="wave-background"
          style={{ backgroundPosition: getWavePosition() }}
        ></div>

        <div className="slides-wrapper" style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}>
          {data.slides.map((slide, index) => (
            <div 
              className="slide" 
              key={index} 
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="slide-content mb-10"
                style={{ opacity: currentSlide === index ? 1 : 0 }}
              >
                <h1 className="mb-5 slide-title sm:text-2xl md:text-3xl lg:text-4xl font-roboto font-bold text-[#F68C20]">
                  {slide.title}
                </h1>
                <p className="slide-description text-base sm:text-lg md:text-xl lg:text-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
          {data.slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
