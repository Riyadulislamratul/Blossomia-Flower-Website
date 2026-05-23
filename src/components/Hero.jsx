import React from "react";
import { Button } from "./BouquetCollection";
import HeroLeft from "../assets/heroleft.png";
import HeroRight from "../assets/heroright.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#f5f1eb] overflow-hidden relative">
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

          {/* Right Image */}
          <div className="flex flex-col items-center lg:items-end">
            <div
              className="
                w-full
                max-w-[500px]
                lg:w-[587px]
                lg:h-[565px]
                overflow-hidden
              "
            >
              <img
                src={HeroRight}
                alt="Flower Bouquet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Indicator */}
            <div className="flex items-center gap-4 mt-8 lg:mt-10 text-sm text-[#8b8b8b]">
              <span>01</span>

              <div className="w-24 sm:w-32 h-[1px] bg-[#b8b1a9] relative">
                <div className="absolute left-0 top-0 w-10 h-[1px] bg-black"></div>
              </div>

              <span>04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
