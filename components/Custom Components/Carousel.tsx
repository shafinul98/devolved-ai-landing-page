"use client";

import React, { useState } from "react";

type CarouselProps = {
  children: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = children.length;

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 mt-5">
        {children.map((child, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item={index === activeIndex ? "active" : undefined}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-1 left-1/2 mt-5">
        {children.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-indigo-500" : "bg-gray-300"
            }`}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
