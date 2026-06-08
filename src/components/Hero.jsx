import React from 'react';
import { motion } from 'framer-motion';
import heroChip from '../assets/hero-chips.png';
import FireText from './FireText.jsx';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] w-full px-4 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b0707_0%,_#000_70%)] z-0" />

      {/* Floating Chips */}
      <motion.img 
        animate={{ y: [-20, 20, -20] }} 
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        src={heroChip} 
        className="absolute z-10 w-[70vw] max-w-[500px] opacity-40 mix-blend-screen" 
      />

      {/* Typography */}
      <div className="relative z-20 text-center w-full max-w-4xl">
        <p className="text-white font-bold tracking-[0.3em] uppercase mb-2">The Ultimate Crunch</p>
        <h1 className="text-6xl md:text-[9rem] font-black tracking-tighter text-white">FEEL THE</h1>
        
        {/* Fire Text Component */}
        <div className="w-full">
          <FireText />
        </div>
      </div>
    </section>
  );
}