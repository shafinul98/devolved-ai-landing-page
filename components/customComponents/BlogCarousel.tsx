import React, { useState } from "react";

type CarouselProps = {
  children: React.ReactNode[];
  extraStyles?: string;
  bottomStyle?: string;
};

const BlogCarousel = ({
  children,
  extraStyles,
  bottomStyle,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = Math.ceil(children.length / 3); // Calculate the number of carousel items with 3 blogs each

  return (
    <div
      id="indicators-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div
        className={`relative overflow-hidden rounded-lg mt-5 ${extraStyles}`}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.3s ease",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              style={{
                flex: "1 0 33.3%",
                gap: "0rem",
                margin: "0 ", // Set each carousel item to occupy 33.33% of the width
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {/* Slider indicators */}
      <div
        className={`absolute z-30 flex space-x-3 -translate-x-1/2 left-1/2 mt-5 ${bottomStyle}`}
      >
        {Array.from({ length: totalSlides }, (_, index) => (
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

export default BlogCarousel;
