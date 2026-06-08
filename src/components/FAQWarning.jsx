import React, { useState } from 'react';
import { Plus, Minus, ShieldAlert } from 'lucide-react';

const FAQS = [
  {
    question: "Is it legal to consume CrunchX without a safety briefing?",
    answer: "Legally, yes. However, we strongly recommend having a dairy antidote (milk, ice cream, or cold yogurt) within arm's reach. CrunchX is not responsible for temporary sensory shock or extreme sweat outbreaks."
  },
  {
    question: "What makes the crunch so intense?",
    answer: "Every single chip is triple-fired in our custom high-temperature signature kilns. This locks in the extreme crunch texture and creates microscopic pockets that hold our proprietary spice blend."
  },
  {
    question: "Why does drinking water make the burn worse?",
    answer: "Capsaicin (the chemical compound that makes peppers hot) is oil-based and not water-soluble. Drinking water just washes it around, spreading the fire! Choose milk, ice cream, or bread to neutralize it instead."
  },
  {
    question: "Can children or sensitive people consume CrunchX?",
    answer: "Absolutely not. This is a high-octane product meant strictly for adults who can tolerate extreme spices. Keep the containment bags out of reach of children, pets, and friends who boast they can handle anything."
  }
];

export default function FAQWarning() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto relative font-outfit">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-850/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Alert Frame */}
      <div className="border border-red-950/40 rounded-[2.5rem] bg-zinc-950/30 backdrop-blur-md p-8 md:p-12 overflow-hidden relative">
        
        {/* Hazard strip header */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500" />
        
        <div className="flex items-center gap-3 mb-8">
          <ShieldAlert className="text-red-500 animate-pulse" size={24} />
          <span className="font-syne text-[10px] font-black tracking-widest text-red-500 uppercase">
            SAFETY MANUAL & PROCEDURES
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-syne font-black text-white uppercase mb-4 tracking-tight">
          CONTAINMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">FAQ</span>
        </h2>
        <p className="text-zinc-400 text-sm mb-12 max-w-xl">
          Crucial safety queries regarding thermal management, capsaicin defense, and product handling. Read before opening your pack.
        </p>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'bg-white/5 border-red-500/40' : 'bg-black/20 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left text-white font-bold text-sm md:text-base tracking-tight font-syne"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-red-500' : ''}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out`}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <p className="px-6 pb-6 text-zinc-400 text-xs md:text-sm leading-relaxed font-light border-t border-white/5 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
