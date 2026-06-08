import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

export default function Navbar({ cartCount, totalPrice, handleBuyNow }) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
    >
      <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer">
        CRUNCH<span className="text-white">X</span>
      </h1>

      <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-300">
        <a href="#hero" className="hover:text-red-500 transition-colors">Home</a>
        <a href="#flavors" className="hover:text-red-500 transition-colors">Flavors</a>
        <a href="#order" className="hover:text-red-500 transition-colors">Shop</a>
      </div>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBuyNow}
        className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <ShoppingBag size={18} />
        <span className="text-sm">
          Cart ({cartCount}) {cartCount > 0 && `- ₹${totalPrice}`}
        </span>
      </motion.button>
    </motion.nav>
  );
}