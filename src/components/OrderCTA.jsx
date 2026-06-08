import React from 'react';
import { motion } from 'framer-motion';

export default function OrderCTA({ handleBuyNow, cartCount, totalPrice }) {
  return (
    <section id="order" className="py-32 relative overflow-hidden flex justify-center px-6">
      <div className="absolute w-full h-full bg-red-900/10 blur-[150px] -z-10" />

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-12 md:p-24 rounded-[3rem] text-center w-full max-w-5xl shadow-2xl relative overflow-hidden"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
          READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">CRUNCH?</span>
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl mx-auto text-base">
          Stock is extremely limited. Get your hands on the spiciest chips in the universe before they sell out.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBuyNow}
          className="bg-red-600 text-white text-lg md:text-xl font-black py-4 px-12 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.7)] transition-all duration-300 tracking-wider uppercase"
        >
          {cartCount > 0 ? `Checkout Cart (₹${totalPrice})` : `Order Now`}
        </motion.button>
      </motion.div>
    </section>
  );
}