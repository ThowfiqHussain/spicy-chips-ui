import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, ShieldAlert } from 'lucide-react';
import redChip from '../assets/red-chip.png';
import blackChip from '../assets/black-chip.png';
import greenChip from '../assets/green-chip.png';

export default function Flavors({ addToCart, handleBuyNow }) {
  const flavors = [
    {
      title: "INFERNO RED CHILLI",
      price: 100,
      desc: "Pure ghost pepper level heat. Packed with intense crimson spice.",
      bgGradient: "from-red-950/40 via-red-900/20 to-black",
      borderColor: "border-red-500/30 hover:border-red-500",
      icon: <Flame size={32} className="text-red-500" />,
      tag: "EXTREME",
      image: redChip
    },
    {
      title: "MIDNIGHT BLACK PEPPER",
      price: 280,
      desc: "Crushed premium peppercorns with sea salt crystals. Deeply smoky.",
      bgGradient: "from-zinc-900 via-neutral-950 to-black",
      borderColor: "border-zinc-700/30 hover:border-zinc-400",
      icon: <Zap size={32} className="text-zinc-400" />,
      tag: "PREMIUM",
      image: blackChip
    },
    {
      title: "VENOM GREEN CHILLI",
      price: 350,
      desc: "Tangy raw green chillies mixed with a twist of lime. Electric kick.",
      bgGradient: "from-emerald-950/40 via-emerald-900/20 to-black",
      borderColor: "border-emerald-500/30 hover:border-emerald-500",
      icon: <ShieldAlert size={32} className="text-emerald-500" />,
      tag: "TANGY HEAT",
      image: greenChip
    }
  ];

  return (
    <section id="flavors" className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-24">
        <motion.h2 className="text-4xl md:text-6xl font-black tracking-tighter">
          CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">WEAPON</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {flavors.map((flavor, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-[2rem] bg-gradient-to-b ${flavor.bgGradient} border ${flavor.borderColor} transition-all duration-300 group min-h-[520px] flex flex-col justify-between`}
          >
            {/* Card Top Label & Icon */}
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest bg-white/5 text-zinc-300 px-3 py-1 rounded-full border border-white/10 uppercase">
                {flavor.tag}
              </span>
              <span className="text-lg font-black text-orange-500">₹{flavor.price}</span>
            </div>

            {/* Product Asset Area */}
            <div className="w-full h-40 my-2 flex items-center justify-center relative">
              <img src={flavor.image} alt={flavor.title} className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Description Text */}
            <div>
              <h3 className="text-xl font-black text-white tracking-tight mb-1">{flavor.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed mb-6">{flavor.desc}</p>
              
              {/* Action Operations Panel */}
              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => addToCart(flavor.price, flavor.title)}
                  className="w-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-bold py-3 rounded-xl transition-all duration-300 border border-white/10"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => {
                    addToCart(flavor.price, flavor.title);
                    setTimeout(() => handleBuyNow(), 100);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3 rounded-xl transition-all duration-300"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}