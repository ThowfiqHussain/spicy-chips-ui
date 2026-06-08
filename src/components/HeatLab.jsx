import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ShieldAlert, Sparkles, AlertTriangle, Droplet } from 'lucide-react';

const HEAT_LEVELS = [
  {
    name: "JALAPEÑO KICK",
    shu: "5,000",
    color: "from-green-500 to-lime-400",
    shadowColor: "rgba(132, 204, 22, 0.2)",
    icon: <Sparkles className="text-lime-400" size={24} />,
    desc: "A warm, pleasant hum. Perfect for beginners and casual snackers looking for flavor with a mild spark.",
    danger: "SAFE",
    antidote: "Just a napkin",
    survivalRate: "99.9%",
    sweatFactor: "1/5",
    accentText: "text-lime-400"
  },
  {
    name: "VOLCANIC HABANERO",
    shu: "150,000",
    color: "from-orange-500 to-amber-400",
    shadowColor: "rgba(249, 115, 22, 0.3)",
    icon: <ShieldAlert className="text-orange-400" size={24} />,
    desc: "A mounting wave of heat that hits the back of your throat. Builds up steadily with every crunchy bite.",
    danger: "CAUTION ADVISED",
    antidote: "A glass of cold milk",
    survivalRate: "98.4%",
    sweatFactor: "3/5",
    accentText: "text-orange-400"
  },
  {
    name: "GHOST CHILLI TERROR",
    shu: "1,000,000",
    color: "from-red-600 to-orange-500",
    shadowColor: "rgba(239, 68, 68, 0.4)",
    icon: <Flame className="text-red-500 animate-pulse" size={24} />,
    desc: "A full-scale sensory combustion. Your body will trigger a sweat response instantly. Tears are expected.",
    danger: "EXTREME HEAT",
    antidote: "Ice cream & deep breaths",
    survivalRate: "92.1%",
    sweatFactor: "4.5/5",
    accentText: "text-red-500"
  },
  {
    name: "CRUNCHX SINGULARITY",
    shu: "2,200,000+",
    color: "from-red-800 via-red-600 to-yellow-500",
    shadowColor: "rgba(220, 38, 38, 0.6)",
    icon: <AlertTriangle className="text-yellow-500 animate-bounce" size={24} />,
    desc: "The absolute chemical threshold of heat. A blinding cosmic burn that challenges your very existence.",
    danger: "LETHAL UNDERTAKINGS",
    antidote: "Fire extinguisher & local clinic",
    survivalRate: "50/50",
    sweatFactor: "5/5 🔥",
    accentText: "text-yellow-500 font-extrabold"
  }
];

export default function HeatLab() {
  const [activeLevel, setActiveLevel] = useState(0);
  const current = HEAT_LEVELS[activeLevel];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative font-outfit">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-800/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="font-syne text-red-500 font-black tracking-[0.4em] text-xs uppercase mb-3 block">
          interactive diagnostics
        </span>
        <h2 className="text-4xl md:text-6xl font-syne font-black tracking-tight text-white uppercase">
          THE SCOVILLE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">HEAT LAB</span>
        </h2>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm">
          Simulate the thermal properties of CrunchX. Drag your cursor or select the levels below to test your tolerance index.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT COLUMN: The Physical Sci-Fi Thermometer Control */}
        <div className="lg:col-span-5 bg-zinc-950/60 border border-white/10 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
          {/* Diagnostic UI detailing */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl pointer-events-none" />
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
            <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">
              MODULE: THERMO-GAUGE V2.8
            </span>
            <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
          </div>

          <div className="flex gap-8 items-center h-full my-auto">
            {/* Thermometer Tube */}
            <div className="w-10 h-72 bg-zinc-900 border border-white/10 rounded-full relative flex flex-col justify-end p-1 shadow-inner">
              {/* Temperature Fill */}
              <motion.div 
                className={`w-full rounded-full bg-gradient-to-t ${current.color}`}
                initial={{ height: "0%" }}
                animate={{ height: `${(activeLevel + 1) * 25}%` }}
                transition={{ type: "spring", stiffness: 70, damping: 15 }}
                style={{
                  boxShadow: `0 0 25px ${current.shadowColor}`
                }}
              />
              
              {/* Level Tick Indicators */}
              <div className="absolute inset-y-4 right-[-15px] flex flex-col justify-between text-[8px] font-bold text-zinc-600">
                <span>MAX</span>
                <span>HIGH</span>
                <span>MED</span>
                <span>MIN</span>
              </div>
            </div>

            {/* Selector Buttons */}
            <div className="flex-grow flex flex-col gap-3">
              {HEAT_LEVELS.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLevel(index)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    activeLevel === index 
                      ? 'bg-white/5 border-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
                      : 'bg-black/20 border-white/5 text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                  }`}
                >
                  {/* Subtle active slide background */}
                  {activeLevel === index && (
                    <motion.div 
                      layoutId="activeTabBackdrop"
                      className="absolute inset-0 bg-gradient-to-r from-red-950/10 to-transparent -z-10"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold font-syne">{index + 1}. {level.name.split(" ")[0]}</span>
                  </div>
                  <span className={`text-[10px] font-black tracking-wider ${activeLevel === index ? 'text-red-500' : 'text-zinc-600'}`}>
                    {level.shu} SHU
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono text-zinc-500">
            <span>DANGER FACTOR: INLINE</span>
            <span>SYSTEM: ONLINE</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Diagnostic Readout screen */}
        <div className="lg:col-span-7 bg-zinc-950/40 border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
          {/* Glowing accent corner */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-red-500/30 rounded-tr-[2.5rem]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-red-500/30 rounded-bl-[2.5rem]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full justify-between gap-8 z-10"
            >
              <div>
                {/* Header diagnostic */}
                <div className="flex items-center gap-3 mb-6">
                  {current.icon}
                  <span className={`text-xs font-black tracking-widest uppercase ${current.accentText}`}>
                    {current.danger}
                  </span>
                </div>

                {/* Big Scoville display */}
                <div className="mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 block mb-1">
                    SCOVILLE HEAT UNITS (SHU)
                  </span>
                  <h3 className="text-6xl md:text-8xl font-syne font-black tracking-tighter text-white">
                    {current.shu}
                  </h3>
                </div>

                {/* Level Title & Description */}
                <h4 className="text-xl font-bold text-white mb-3 tracking-tight font-syne">
                  {current.name}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  {current.desc}
                </p>
              </div>

              {/* Data readouts grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-6 border-t border-white/5">
                <div className="bg-white/2 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1 uppercase">
                    Sweat Index
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-white">
                    <Droplet size={14} className="text-blue-400 shrink-0" />
                    <span>{current.sweatFactor}</span>
                  </div>
                </div>

                <div className="bg-white/2 p-4 rounded-2xl border border-white/5">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1 uppercase">
                    Survival Rate
                  </span>
                  <span className="text-sm font-bold text-white">
                    {current.survivalRate}
                  </span>
                </div>

                <div className="col-span-2 bg-white/2 p-4 rounded-2xl border border-white/5 flex flex-col justify-between">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1 uppercase">
                    Recommended Antidote
                  </span>
                  <span className={`text-xs font-bold ${current.accentText}`}>
                    {current.antidote}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
