import React, { useState, useEffect } from "react";
import { Button } from "./BouquetCollection";

import HeroLeft from "../assets/heroleft.png";

import HeroRight1 from "../assets/heroright.png";
import HeroRight2 from "../assets/heroright2.jpg";
import HeroRight3 from "../assets/heroright3.jpg";
import HeroRight4 from "../assets/heroright4.jpg";

const Hero = () => {
  const slides = [
    HeroRight1,
    HeroRight2,
    HeroRight3,
    HeroRight4,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="home"
      className="bg-[#f5f1eb] overflow-hidden relative"
    >
      <div className="mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* Left Content */}
          <div className="relative flex flex-col justify-between lg:min-h-[750px]">
            
            {/* Heading */}
            <h1
              className="
                text-[42px]
                sm:text-[54px]
                md:text-[64px]
                lg:text-[72px]
                leading-[1.05]
                font-serif
                text-black
                max-w-full
                lg:max-w-[779px]
                lg:absolute
                lg:left-[200px]
                lg:top-[50px]
                z-10
              "
            >
              Discover Our Flower Shop's Delightful Collection
            </h1>

            {/* Mobile Layout */}
            <div className="flex flex-col gap-8 mt-10 lg:hidden">
              
              {/* Small Image */}
              <div className="w-full max-w-[420px] overflow-hidden">
                <img
                  src={HeroLeft}
                  alt="Flowers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="max-w-full">
                <p className="text-base sm:text-lg leading-7 text-[#3b3b3b]">
                  Welcome to our enchanting flower emporium, where beauty
                  blossoms and dreams take shape. Step into a world of vibrant
                  colors, captivating fragrances, and artistry that will leave
                  you spellbound.
                </p>

                <div className="mt-8">
                  <Button text="Our Catalog" />
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex mt-16 flex-col md:flex-row items-start gap-10">
              
              {/* Small Image */}
              <div className="w-[407px] h-[394px] overflow-hidden absolute left-0 bottom-0">
                <img
                  src={HeroLeft}
                  alt="Flowers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="max-w-[412px] pt-6 absolute left-[490px] bottom-0">
                <p className="text-xl leading-7 text-[#3b3b3b]">
                  Welcome to our enchanting flower emporium, where beauty
                  blossoms and dreams take shape. Step into a world of vibrant
                  colors, captivating fragrances, and artistry that will leave
                  you spellbound.
                </p>

                <div className="mt-8">
                  <Button text="Our Catalog" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="flex flex-col items-center xl:absolute xl:right-0">
            
            {/* Slider Container */}
            <div
              className="
                relative
                w-full
                max-w-[600px]
                lg:w-[587px]
                lg:h-[565px]
                xl:h-[550px]
                xl:w-[600px]
                overflow-hidden
              "
            >
              {/* Slides */}
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Slider Indicator */}
            <div className="flex items-center justify-center gap-4 mt-8 text-sm text-[#8b8b8b]">
              
              {/* Current Slide */}
              <button
                onClick={prevSlide}
                className="hover:text-black transition"
              >
                {String(currentSlide + 1).padStart(2, "0")}
              </button>

              {/* Progress Bar */}
              <button
                onClick={nextSlide}
                className="relative w-24 sm:w-32 h-[1px] bg-[#b8b1a9]"
              >
                <div
                  className="absolute left-0 top-0 h-[1px] bg-black transition-all duration-500"
                  style={{
                    width: `${
                      ((currentSlide + 1) / slides.length) * 100
                    }%`,
                  }}
                ></div>
              </button>

              {/* Total Slides */}
              <button
                onClick={nextSlide}
                className="hover:text-black transition"
              >
                {String(slides.length).padStart(2, "0")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;