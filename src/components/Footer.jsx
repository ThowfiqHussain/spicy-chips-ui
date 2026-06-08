import React, { useState } from 'react';
import { ShieldAlert, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6 font-outfit relative overflow-hidden">
      
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 relative z-10">
        {/* Brand Information & Liability Warning */}
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-3xl font-syne font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer">
            CRUNCH<span className="text-white">X</span>
          </h3>
          <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
            We manufacture the most high-octane sensory snacks in the known universe, engineered for flavor-chasers and extreme chili enthusiasts.
          </p>

          {/* Alert Containment Box */}
          <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 flex gap-3 items-start max-w-sm">
            <ShieldAlert size={18} className="text-red-500 shrink-0 mt-0.5 animate-pulse" />
            <div className="text-[10px] text-zinc-400 leading-relaxed">
              <strong className="text-white block mb-0.5">HEALTH LIABILITY NOTICE:</strong>
              CrunchX products contain intense capsaicin profiles. Consume at your own risk. Keep away from eyes, open wounds, pets, and children.
            </div>
          </div>
        </div>

        {/* Links Column 1: Navigation */}
        <div className="md:col-span-2 space-y-4 text-xs">
          <h4 className="font-syne font-extrabold tracking-wider text-white uppercase">NAVIGATION</h4>
          <ul className="space-y-2.5 text-zinc-400">
            <li><a href="#hero" className="hover:text-red-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-red-500 transition-colors">Manifesto</a></li>
            <li><a href="#flavors" className="hover:text-red-500 transition-colors">Flavors</a></li>
            <li><a href="#order" className="hover:text-red-500 transition-colors">Order Now</a></li>
          </ul>
        </div>

        {/* Links Column 2: Legal / Info */}
        <div className="md:col-span-2 space-y-4 text-xs">
          <h4 className="font-syne font-extrabold tracking-wider text-white uppercase">SAFETY CORE</h4>
          <ul className="space-y-2.5 text-zinc-400">
            <li><a href="#faq" className="hover:text-red-500 transition-colors">FAQ Manual</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Safety Briefing</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Liability Waiver</a></li>
            <li><a href="#" className="hover:text-red-500 transition-colors">Bulk Shipping</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter Sign-up */}
        <div className="md:col-span-3 space-y-4 text-xs">
          <h4 className="font-syne font-extrabold tracking-wider text-white uppercase">HEAT MANIFEST DETAILS</h4>
          <p className="text-zinc-400 leading-relaxed mb-4">
            Sign up to receive announcements about limited-edition crops, drop schedules, and safety releases.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter active email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)] flex-grow transition-all duration-300"
            />
            <button
              type="submit"
              className="p-3 bg-red-600 hover:bg-red-700 rounded-xl text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(220,38,38,0.2)]"
            >
              {subscribed ? (
                <span className="text-[10px] font-bold">SENT</span>
              ) : (
                <Send size={14} />
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 relative z-10">
        <span>© {new Date().getFullYear()} CRUNCHX LABS. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">PRIVACY BRIEFING</a>
          <a href="#" className="hover:text-white transition-colors">TERMS OF SALE</a>
          <a href="#" className="hover:text-white transition-colors">CHILI DISCLOSURE</a>
        </div>
      </div>
    </footer>
  );
}
