import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import recruit41 from '../assets/ecruite-41-1.png';

export default function RecruitmentCarousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.slides.length);
  }, [data.slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.slides.length) % data.slides.length);
  }, [data.slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleCTAClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="flex flex-col text-sm text-white">
      <section className="relative flex flex-col justify-center items-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 w-full min-h-[467px]">
        <img
          loading="lazy"
          src={recruit41} 
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative flex flex-col justify-center px-4 sm:px-8 md:px-14 py-6 sm:py-9 max-w-full rounded-2xl bg-black bg-opacity-40 w-full sm:w-[90%] md:w-[678px]">
          <div className="relative overflow-hidden w-full" style={{ height: '300px' }}>
            {data.slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full flex flex-col transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full"
                }`}
                style={{ zIndex: index === currentSlide ? 10 : 0 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-roboto font-semibold text-center text-[#F68C20]">
                  {slide.title}
                </h1>
                <p className="flex-1 mt-3.5 leading-6 text-center text-xs sm:text-sm md:text-base">
                  {slide.content}
                </p>
                <button
                  className="self-center mt-2 mb-4 border-2 border-white text-white py-2 px-4 rounded hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300 text-sm sm:text-base"
                  onClick={() => handleCTAClick(slide.link)}
                >
                  {slide.cta}
                </button>
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
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-orange-500/20 p-2 rounded-full transition-colors duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-orange-500/20 p-2 rounded-full transition-colors duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>
    </main>
  );
}