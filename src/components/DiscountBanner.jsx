import React from "react";
import Right from "../assets/discountright.png";
import Left from "../assets/discountleft.png";


const DiscountBanner = () => {
  return (
    <section className="bg-[#f5f1eb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side */}
          <div>
            <h2 className="text-[42px] md:text-[60px] leading-[1.05] font-serif max-w-lg">
              20% Off Your First Purchase at Our Store!
            </h2>

            <div className="mt-14 overflow-hidden">
              <img
                src={Left}
                alt="Flowers"
                className="w-[502px] h-[473px] object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            
            {/* Top Image */}
            <div className="overflow-hidden ml-auto">
              <img
                src={Right}
                alt="Bouquet"
                className="w-[565px] h-[523px] object-cover"
              />
            </div>

            {/* Bottom Box */}
            <div className="border border-[#d8c7b1] mt-6 p-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
              
              <p className="text-sm leading-6 text-[#3d3d3d] max-w-md">
                At our store, we believe in celebrating new beginnings.
                That's why we're thrilled to offer an exclusive deal for
                first-time customers. Use the promocode, enjoy 20% off
                your purchase, and handpicked floral arrangements.
              </p>

              <button className="border border-[#d8c7b1] px-8 py-3 text-sm whitespace-nowrap hover:bg-black hover:text-white transition-all duration-300">
                Order →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;