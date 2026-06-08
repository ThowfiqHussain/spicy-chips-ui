import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Flavors", href: "#flavors" },
    { label: "Shop", href: "#order" }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center p-5 md:p-6 z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
      >
        {/* Brand Logo */}
        <h1 className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer font-syne">
          CRUNCH<span className="text-white">X</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-gray-300">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-red-500 transition-colors">{link.label}</a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Cart Trigger */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            className="bg-white text-black px-4 md:px-6 py-2 rounded-full font-black flex items-center gap-2 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
          >
            <ShoppingBag size={16} />
            <span className="text-xs md:text-sm">
              Cart ({cartCount})
            </span>
          </motion.button>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-45 md:hidden"
            />

            {/* Menu Body */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed top-0 inset-x-0 bg-zinc-950 border-b border-white/10 pt-24 pb-10 px-6 z-46 md:hidden flex flex-col gap-6 shadow-2xl font-outfit"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-black text-zinc-300 hover:text-white border-b border-white/5 pb-2 uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}