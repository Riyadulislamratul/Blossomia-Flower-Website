import React from "react";
import Bouqute from "../assets/bouqute.png";
import Bouqute1 from "../assets/bouqute1.png";
import Bouqute2 from "../assets/bouqute2.png";
import { ArrowRight } from "lucide-react";

const BouquetCollection = () => {
  return (
    <section className="bg-[#f5f1eb] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div>
            
            {/* Large Image */}
            <div className="overflow-hidden">
              <img
                src={Bouqute}
                alt="Bouquet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex items-center justify-between gap-4 mt-4 text-sm flex-wrap">
              <h3 className="font-regular font-kopub text-text text-[16px] sm:text-[18px]">
                Whispering Blooms
              </h3>

              <span className="font-regular font-kopub text-text text-[16px] sm:text-[18px]">
                from 50 Euro
              </span>
            </div>

            {/* Description */}
            <p className="mt-8 lg:mt-10 font-carme text-text text-[16px] sm:text-[17px] leading-7">
              At Our Store, we take pride in offering a stunning selection of
              the most popular flowers that capture hearts and inspire joy.
              Explore our floral paradise and discover the timeless beauty of
              these beloved blooms.
            </p>

            {/* Button */}
            <Button text="See Catalog" />
          </div>

          {/* Right Side */}
          <div className="mt-2 lg:mt-10">
            
            {/* Heading */}
            <h2
              className="
                text-[36px]
                sm:text-[46px]
                md:text-[56px]
                xl:text-[60px]
                font-kopub
                font-light
                text-text
                w-full
                lg:w-[700px]
                leading-[1.1]
              "
            >
              Unveiling Our Popular Bouquet Collection
            </h2>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mt-12 lg:mt-[87px]">
              
              {/* Card 1 */}
              <div>
                <div className="overflow-hidden">
                  <img
                    src={Bouqute1}
                    alt="Flowers"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 mt-3 text-sm flex-wrap">
                  <h4 className="text-[15px] sm:text-base">
                    Enchanted Petals
                  </h4>

                  <span className="text-[15px] sm:text-base">
                    from 70 Euro
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div>
                <div className="overflow-hidden">
                  <img
                    src={Bouqute2}
                    alt="Flowers"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 mt-3 text-sm flex-wrap">
                  <h4 className="text-[15px] sm:text-base">
                    Harmony Bouquet
                  </h4>

                  <span className="text-[15px] sm:text-base">
                    from 40 Euro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BouquetCollection;

export const Button = ({ text }) => {
  return (
    <button
      className="
        mt-8 lg:mt-10
        border
        cursor-pointer
        border-[#DBCCBA]
        font-kopub
        bg-transparent
        px-2.5
        py-3
        text-sm
        hover:text-white
        transition-all
        duration-300
        group
      "
    >
      <div className="flex items-center gap-3 bg-[#DBCCBA]">
        <div className="flex items-center gap-3 pr-2">
          <p className="py-3 px-4 sm:px-5.5">
            {text}
          </p>

          <ArrowRight
            size={19}
            strokeWidth={0.5}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </div>
      </div>
    </button>
  );
};