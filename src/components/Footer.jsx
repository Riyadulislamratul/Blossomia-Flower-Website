import React from "react";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import mail from "../assets/icons/mail.png";
import send from "../assets/icons/telegram.png";

const Footer = () => {
  return (
    <footer className="bg-[#f5f1eb] border-t border-[#d8d2cb] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-4 gap-19">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-serif tracking-[0.15em]">BLOSSOMIA</h2>

            <div className="flex items-center gap-9 mt-10 cursor-pointer">
         
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={mail} alt="mail" />
              <img src={send} alt="send" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-6">Categories</h3>

            <ul className="space-y-4 text-[#3d3d3d]">
              <li>
                <a href="#" className="hover:opacity-70 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:opacity-70 transition">
                  Catalog
                </a>
              </li>

              <li>
                <a href="#" className="hover:opacity-70 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-medium mb-6">Support</h3>

            <ul className="space-y-4 text-[#3d3d3d]">
              <li>Delivery & Payment</li>
              <li>Help & Support</li>
              <li>24/7H Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-medium">+123 456 789</h3>

            <div className="mt-6 space-y-4 text-[#3d3d3d]">
              <p>blossomia@gmail.com</p>

              <p>
                789 Spring Lane Roseville,
                <br />
                CA 98765 United States
              </p>

              <p>10:00 - 19:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-20 text-sm text-[#6b6b6b]">
          Blossomia Developed by Riyadul Islam Ratul ©Copyright 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
