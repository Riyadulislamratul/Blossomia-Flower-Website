import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#f5f1eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full">
            
            <div>
              <h1 className="text-[48px] md:text-[72px] leading-[1.05] font-serif text-black max-w-xl">
                Discover Our Flower Shop's Delightful Collection
              </h1>

              <div className="mt-16 flex flex-col md:flex-row items-start gap-10">
                
                {/* Small Image */}
                <div className="w-[220px] h-[260px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=1200&auto=format&fit=crop"
                    alt="Flowers"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="max-w-xs pt-6">
                  <p className="text-sm leading-7 text-[#3b3b3b]">
                    Welcome to our enchanting flower emporium, where
                    beauty blossoms and dreams take shape. Step into
                    a world of vibrant colors, captivating fragrances,
                    and artistry that will leave you spellbound.
                  </p>

                  <button className="mt-8 border border-[#d8c7b1] px-8 py-4 text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300">
                    Our Catalog →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[420px] h-[560px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1200&auto=format&fit=crop"
                alt="Flower Bouquet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Indicator */}
            <div className="flex items-center gap-4 mt-10 text-sm text-[#8b8b8b]">
              <span>01</span>

              <div className="w-32 h-[1px] bg-[#b8b1a9] relative">
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