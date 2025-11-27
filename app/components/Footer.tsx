"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center mb-20">
          {/* Brand Logo */}
          <div className="text-3xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Bloglft.
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1DA1F2] transition-all duration-300 group"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#E1306C] transition-all duration-300 group"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0077B5] transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#FF0000] transition-all duration-300 group"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Big Text Bottom */}
        <div className="border-t border-white/10 pt-20">
          <h2 className="text-[12vw] leading-none font-black text-center tracking-tighter text-white/5 hover:text-white/10 transition-colors duration-500 select-none cursor-default">
            BUILD WITH BVOOM
          </h2>
        </div>
        
        <div className="text-center text-slate-500 text-sm mt-8">
          &copy; {new Date().getFullYear()} BlogVoom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

