import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  Heart,
  User,
  ShoppingCart,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-[#d8d2cb] bg-[#f5f1eb] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-10">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-black"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-black">
            <a
              href="#about"
              className="hover:opacity-70 transition duration-300"
            >
              About Us
            </a>

            <a
              href="#catalog"
              className="hover:opacity-70 transition duration-300"
            >
              Catalog
            </a>

            <a
              href="#contact"
              className="hover:opacity-70 transition duration-300"
            >
              Contacts
            </a>
          </nav>
        </div>

        {/* Logo */}
        <a href="#home">
          <h1 className="text-xl sm:text-2xl tracking-[0.25em] font-serif text-black">
            BLOSSOMIA
          </h1>
        </a>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-5 text-black">
          <button>
            <Search size={18} strokeWidth={1.5} />
          </button>

          <button>
            <Heart size={18} strokeWidth={1.5} />
          </button>

          <button className="hidden sm:block">
            <User size={18} strokeWidth={1.5} />
          </button>

          <button>
            <ShoppingCart size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 gap-5 text-sm text-black bg-[#f5f1eb]">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 transition"
          >
            About Us
          </a>

          <a
            href="#catalog"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 transition"
          >
            Catalog
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 transition"
          >
            Contacts
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;