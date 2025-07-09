import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import FloatingCTAButton from './FloatingCTAButton';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-12">
      <FloatingCTAButton/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-orange-400 text-black px-2 py-1 rounded">W</span>{" "}
            KRISHIKA
          </h2>
          <p className="mt-3 text-sm leading-relaxed">
            We provide tailored solutions in aluminum, glazing, steel, and more.
            Let us build your dream — with strength, style, and precision.
          </p>
          <div className="flex gap-4 mt-5 text-xl text-white">
            <a href="#" className="hover:text-orange-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
          <li><a href="#home" className="hover:text-white cursor-pointer">{'\u203A'}      Home </a></li>
          <li><a href="#about" className="hover:text-white cursor-pointer">{'\u203A'}       About us </a></li>
          <li><a href="#services" className="hover:text-white cursor-pointer">{'\u203A'}   Serives </a></li>
          <li><a href="#contact" className="hover:text-white cursor-pointer">{'\u203A'}     Contact</a></li>
          <li><a href="#WhyChooseUs" className="hover:text-white cursor-pointer">{'\u203A'} For Client</a></li>
          
         
           
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li ><a href="#ProjectGallery" className="hover:text-white cursor-pointer">Aluminum Fabrication </a></li>
            <li ><a href="#ProjectGallery" className="hover:text-white cursor-pointer">Glass Glazing</a></li>
            <li ><a href="#ProjectGallery" className="hover:text-white cursor-pointer">Steel Railings</a></li>
            <li ><a href="#ProjectGallery" className="hover:text-white cursor-pointer">Partitions & Cabins</a></li>
            <li ><a href="#ProjectGallery" className="hover:text-white cursor-pointer">Custom Projects</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3 border-b border-white/20 pb-1">
            Newsletter
          </h3>
          <p className="text-sm text-white/70 mb-3">
            Stay updated with our latest services and offers.
          </p>
          <input
            type="email"
            className="p-2 rounded text-black w-full mb-3 focus:outline-none"
            placeholder="Email Address"
          />
          <button className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 w-full font-medium transition-all">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Krishika Fab — All rights reserved.
      </div>
    </footer>
  );
}
