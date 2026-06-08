import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// Unga video file-a import panrom
import promoVid from '../assets/promo.mp4'; 

export default function PromoVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-12 relative flex justify-center items-center px-6">
      
      {/* Background Ambient Glow */}
      <div className="absolute w-[60%] h-[60%] bg-red-800/20 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.15)] group bg-black"
      >
        
        {/* The Video Element */}
        <video 
          ref={videoRef}
          src={promoVid} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto md:h-[600px] object-cover opacity-90"
        />

        {/* --- WATERMARK BLUR OVERLAY --- */}
        {/* Idhu video-voda keezha irukkura watermarks-a cinematic-ah blur panni maraichidum */}
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-[12px] pointer-events-none flex items-end justify-center pb-6">
          <span className="text-red-500/50 text-xs tracking-[0.5em] font-black uppercase">
            The Crunch Experience
          </span>
        </div>

        {/* Four-sided Inner Shadow to hide edge watermarks */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] pointer-events-none" />

        {/* --- SOUND TOGGLE BUTTON --- */}
        <button 
          onClick={toggleSound}
          className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 z-20 shadow-xl flex items-center gap-3 group/btn"
        >
          {isMuted ? (
            <>
              <VolumeX size={20} className="text-zinc-400 group-hover/btn:text-white" />
              <span className="text-xs font-bold tracking-wider uppercase pr-2">Tap for Sound</span>
            </>
          ) : (
            <Volume2 size={20} />
          )}
        </button>
        
      </motion.div>
    </section>
  );
}