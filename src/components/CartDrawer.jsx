import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, ShieldCheck } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [isCheckoutSuccess, setIsCheckoutSuccess] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + delivery;

  const handleCheckout = () => {
    setIsCheckoutSuccess(true);
    setTimeout(() => {
      onClearCart();
      setIsCheckoutSuccess(false);
      onClose();
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 pointer-events-auto"
          />

          {/* Drawer side sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-zinc-950 border-l border-white/10 z-50 shadow-2xl flex flex-col justify-between font-outfit text-white pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-red-500" />
                <span className="font-syne font-extrabold tracking-tight text-lg">YOUR CONTAINMENT CART</span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {isCheckoutSuccess ? (
                /* Checkout success animation screen */
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center p-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-500 mb-6 animate-pulse">
                    <ShieldCheck size={36} />
                  </div>
                  <h3 className="font-syne font-black text-xl text-white uppercase mb-2">ORDER SANCTIONED!</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed max-w-xs">
                    Your extreme heat shipment has been approved and packed in vacuum-sealed containment. Shipping manifest arriving shortly.
                  </p>
                </motion.div>
              ) : cartItems.length === 0 ? (
                /* Empty state */
                <div className="flex flex-col items-center justify-center h-full text-center text-zinc-500">
                  <ShoppingBag size={48} className="mb-4 text-zinc-800" />
                  <p className="text-sm font-semibold">Your cart is empty.</p>
                  <p className="text-xs mt-1 max-w-[200px]">Add some explosive spice bags to initialize thermal logs.</p>
                </div>
              ) : (
                /* List of items */
                cartItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-2xl bg-zinc-900/40 border border-white/5 flex gap-4 items-center justify-between"
                  >
                    {/* Item Image */}
                    <div className="w-16 h-16 bg-black/40 rounded-xl p-2 flex items-center justify-center border border-white/5 shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>

                    {/* Item Details */}
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold font-syne text-white tracking-tight uppercase leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-zinc-500 mt-0.5">₹{item.price} per packet</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => onUpdateQuantity(item.title, -1)}
                          className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Minus size={10} />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.title, 1)}
                          className="p-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                        >
                          <Plus size={10} />
                        </button>
                      </div>
                    </div>

                    {/* Price & Delete */}
                    <div className="flex flex-col items-end gap-3 shrink-0">
                      <span className="text-xs font-black text-red-500">₹{item.price * item.quantity}</span>
                      <button 
                        onClick={() => onRemoveItem(item.title)}
                        className="p-1.5 rounded-lg bg-red-950/20 border border-red-900/10 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Summary Area */}
            {!isCheckoutSuccess && cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40 space-y-4">
                {/* Cost Details */}
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Containment Shipping</span>
                    <span className="text-white font-semibold">
                      {delivery === 0 ? "FREE" : `₹${delivery}`}
                    </span>
                  </div>
                  {delivery > 0 && (
                    <p className="text-[10px] text-zinc-500 text-right italic">
                      Add ₹{500 - subtotal} more for FREE shipping
                    </p>
                  )}
                  <div className="flex justify-between text-sm font-bold pt-2 border-t border-white/5 text-white">
                    <span>Grand Total</span>
                    <span className="text-red-500 font-black text-base">₹{total}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black tracking-wide text-xs uppercase shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Confirm Shipment & Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
