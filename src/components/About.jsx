import React, { useState, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const lines = [
    "CrunchX is not just a snack; it's a high-octane sensory explosion designed for the fearless.",
    "We source the world’s most intense peppers, from the smoldering ghost chilli to the volcanic habanero.",
    "Every batch is triple-fired in our signature kilns to achieve a crunch that resonates with every bite.",
    "Our secret spice blend is calibrated for a multi-layered burn that evolves into a deep, smoky finish.",
    "We exist for the risk-takers and the flavor-chasers who believe that if it doesn't burn, it isn't bold."
  ];

  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Pre-generate ember particles once to avoid re-rendering and keep animations smooth
  const embers = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 6}s`,
      drift: `${Math.random() * 40 - 20}px`
    }));
  }, []);

  const highlightWords = {
    "CrunchX": "text-red-500 font-black text-fire-glow",
    "high-octane": "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold",
    "sensory": "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold",
    "explosion": "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold text-fire-glow",
    "fearless": "text-white font-bold border-b border-red-500/40 pb-0.5",
    "smoldering": "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold",
    "ghost": "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold",
    "chilli": "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 font-bold text-fire-glow",
    "volcanic": "text-orange-400 font-bold",
    "habanero": "text-orange-400 font-bold",
    "triple-fired": "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-bold",
    "multi-layered": "text-white font-semibold",
    "burn": "text-red-500 font-extrabold text-fire-glow-strong",
    "bold": "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 font-extrabold text-fire-glow-strong"
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0.2, y: 5, filter: "blur(2px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Background Heat Haze and Ambient Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-red-950/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-950/5 blur-[100px] rounded-full animate-heat-haze pointer-events-none" />
      
      {/* Ember Particle System */}
      <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden pointer-events-none z-10">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className="ember-particle"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              bottom: '-10px',
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              '--ember-drift': ember.drift,
            }}
          />
        ))}
      </div>

      {/* Main Luxury Frame Box */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-full max-w-4xl mx-auto p-12 md:p-20 rounded-[2.5rem] bg-zinc-950/40 border border-red-950/20 backdrop-blur-3xl relative overflow-hidden z-10 transition-all duration-500 hover:border-red-950/40 hover:shadow-[0_0_50px_rgba(239,68,68,0.05)]"
      >
        {/* Mouse Follow Glow Effect */}
        {isHovered && (
          <motion.div
            className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] blur-[60px] rounded-full z-0"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0) 70%)',
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          />
        )}

        {/* Outer Sci-Fi Border Corner Details */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-red-500/40 rounded-tl-[2.5rem]" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-red-500/40 rounded-tr-[2.5rem]" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-red-500/40 rounded-bl-[2.5rem]" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-red-500/40 rounded-br-[2.5rem]" />

        <div className="relative z-10 text-center">
          {/* Manifesto Header */}
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-syne text-red-500 font-extrabold tracking-[0.4em] text-xs md:text-sm mb-16 uppercase text-fire-glow"
          >
            THE MANIFESTO OF HEAT
          </motion.h2>

          {/* Staggered Paragraph lines */}
          <div className="space-y-12">
            {lines.map((line, lineIndex) => {
              const words = line.split(" ");
              return (
                <motion.p
                  key={lineIndex}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="text-zinc-400 text-lg md:text-3xl font-light italic leading-relaxed font-outfit"
                >
                  {words.map((word, wordIndex) => {
                    const cleanWord = word.replace(/[.;,;?!'"()-]/g, "");
                    const highlightClass = highlightWords[cleanWord];
                    return (
                      <motion.span
                        key={wordIndex}
                        variants={wordVariants}
                        className={`inline-block mr-1.5 md:mr-2 transition-all duration-300 ${highlightClass || "text-white/80 hover:text-white"}`}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </motion.p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}