import React from "react";
import Bouqute from "../assets/bouqute.png";
import Bouqute1 from "../assets/bouqute1.png";
import Bouqute2 from "../assets/bouqute2.png";


const BouquetCollection = () => {
  return (
    <section className="bg-[#f5f1eb] py-24">
      <div className="container mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
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
            <div className="flex items-center justify-between mt-3 text-sm">
              <h3 className="font-regular font-kopub text-text text-[18px]">Whispering Blooms</h3>
              <span className="font-regular font-kopub text-text text-[18px]">from 50 Euro</span>
            </div>

            {/* Description */}
            <p className="mt-10 font-carme text-text text-[17px]">
              At Our Store, we take pride in offering a stunning
              selection of the most popular flowers that capture hearts
              and inspire joy. Explore our floral paradise and discover
              the timeless beauty of these beloved blooms.
            </p>

            {/* Button */}
            <button className="mt-10 border border-[#d8c7b1] px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300">
              See Catalog →
            </button>
          </div>

          {/* Right Side */}
          <div className="mt-10">
            <h2 className="text-[42px] md:text-[56px] xl:text-[60px] font-kopub font-light text-text w-[700px]">
              Unveiling Our Popular Bouquet Collection
            </h2>

            {/* Cards */}
            <div className="flex justify-between gap-6 mt-21.75">
              
              {/* Card 1 */}
              <div>
                <div className="overflow-hidden">
                  <img
                    src={Bouqute1}
                    alt="Flowers"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mt-3 text-sm">
                  <h4>Enchanted Petals</h4>
                  <span>from 70 Euro</span>
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

                <div className="flex items-center justify-between mt-3 text-sm">
                  <h4>Harmony Bouquet</h4>
                  <span>from 40 Euro</span>
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