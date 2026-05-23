import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./BouquetCollection";
import Left1 from "../assets/catalogleft1.png";
import Left2 from "../assets/catalogleft2.png";
import Right1 from "../assets/catalogright1.png";
import Right2 from "../assets/catalogright2.png";
import Right3 from "../assets/catalogright3.png";
import Right4 from "../assets/catalogright4.png";


const products = [
  {
    id: 1,
    title: "Enchanted Petals",
    price: "70 Euro",
    image:
      Left1,
    large: true,
  },
  {
    id: 2,
    title: "Whispering Meadows",
    price: "45 Euro",
    image:
      Right1,
  },
  {
    id: 3,
    title: "Serene Bliss",
    price: "60 Euro",
    image:
      Right2,
  },
  {
    id: 4,
    title: "Floral Harmony",
    price: "80 Euro",
    image:
      Left2,
    large: true,
  },
  {
    id: 5,
    title: "Springtime Serenade",
    price: "65 Euro",
    image:
      Right3,
  },
//   {
//     id: 6,
//     title: "Blooming Splendor",
//     price: "50 Euro",
//     image:
//       "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop",
//   },
];

const FloralCatalog = () => {
  return (
    <section className="bg-[#f5f1eb] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14">
          
          {/* Left Side */}
          <div>
            <div className="overflow-hidden">
              <img
                src={products[0].image}
                alt={products[0].title}
                className="w-full h-[428px] object-cover"
              />
            </div>

            <div className="flex items-start justify-between mt-3">
              <div>
                <h3 className="text-sm">{products[0].title}</h3>
                <p className="text-xs text-[#5f5f5f] mt-1">
                  {products[0].price}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Heart size={14} strokeWidth={1.5} />
                <ShoppingCart size={14} strokeWidth={1.5} />
              </div>
            </div>

            {/* Bottom Left Product */}
            <div className="mt-8 overflow-hidden">
              <img
                src={products[3].image}
                alt={products[3].title}
                className="w-full h-[428px] object-cover"
              />
            </div>

            <div className="flex items-start justify-between mt-3">
              <div>
                <h3 className="text-sm">{products[3].title}</h3>
                <p className="text-xs text-[#5f5f5f] mt-1">
                  {products[3].price}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Heart size={14} strokeWidth={1.5} />
                <ShoppingCart size={14} strokeWidth={1.5} />
              </div>
            </div>

            <Button text="View Catalog" />
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-[42px] md:text-[58px] leading-[1.05] font-serif mt-10">
              Catalog of Floral Delights for Every Occasion
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mt-25">
              
              {products.slice(1).map((item) => (
                <div key={item.id}>
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[378px] object-cover"
                    />
                  </div>

                  <div className="flex items-start justify-between mt-3">
                    <div>
                      <h3 className="text-sm">{item.title}</h3>
                      <p className="text-xs text-[#5f5f5f] mt-1">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Heart size={14} strokeWidth={1.5} />
                      <ShoppingCart size={14} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloralCatalog;