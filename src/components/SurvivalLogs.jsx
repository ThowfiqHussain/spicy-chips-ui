import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldAlert, Heart, Clipboard } from 'lucide-react';

const LOGS = [
  {
    id: "LOG #2048",
    name: "Aravind K., Chennai",
    status: "SURVIVED / DISCHARGED",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-500/20",
    text: "I opened the Inferno Red Chilli pack thinking it was just marketing hype. One chip in and my left ear went deaf for ten minutes. I drank two liters of raw buttermilk. 10/10 will buy again.",
    rating: 5,
    sweat: "98%",
    cardColor: "border-red-950/40 hover:border-red-600/40"
  },
  {
    id: "LOG #2061",
    name: "Priyanka R., Bangalore",
    status: "STABLE CONDITION",
    statusColor: "text-yellow-400 bg-yellow-950/40 border-yellow-500/20",
    text: "The Midnight Black Pepper has this insane, deep, woody smoke flavor. It burns, but it's a gourmet type of burn. My tongue felt alive. Best chips in the country by far.",
    rating: 5,
    sweat: "60%",
    cardColor: "border-zinc-800 hover:border-zinc-400"
  },
  {
    id: "LOG #2077",
    name: "Vikram S., Mumbai",
    status: "EVACUATED TO FRIDGE",
    statusColor: "text-red-400 bg-red-950/40 border-red-500/20",
    text: "Served Venom Green Chilli at a house party. Everyone claimed they could handle green chillies. Within 5 minutes, three grown men were hugging the refrigerator crying. Epic.",
    rating: 5,
    sweat: "90%",
    cardColor: "border-emerald-950/40 hover:border-emerald-500/40"
  }
];

export default function SurvivalLogs() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative font-outfit">
      
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-red-950/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-24">
        <span className="font-syne text-red-500 font-black tracking-[0.4em] text-xs uppercase mb-3 block">
          Incident Reports
        </span>
        <h2 className="text-4xl md:text-6xl font-syne font-black tracking-tight text-white uppercase">
          THE HEAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">SURVIVAL LOGS</span>
        </h2>
        <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm">
          Authenticated logs from risk-takers who encountered CrunchX. Their names are recorded in the annals of fire.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LOGS.map((log, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`p-8 rounded-[2.5rem] bg-zinc-950/30 border backdrop-blur-md relative overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group ${log.cardColor}`}
          >
            {/* Header: ID & clipboard icon */}
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500">
                  {log.id}
                </span>
                <Clipboard size={14} className="text-zinc-600 group-hover:text-red-500 transition-colors" />
              </div>

              {/* Status Badge */}
              <div className="mb-6">
                <span className={`text-[10px] font-black tracking-wider px-3 py-1 rounded-full border ${log.statusColor}`}>
                  {log.status}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: log.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-red-500 text-red-500" />
                ))}
              </div>

              {/* Log Review Paragraph */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-8 font-light italic">
                "{log.text}"
              </p>
            </div>

            {/* Bottom details: Name and Sweat Rate */}
            <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs">
              <span className="font-bold text-white tracking-tight">{log.name}</span>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <ShieldAlert size={12} className="text-red-500" />
                <span>Sweat Index: <strong className="text-white">{log.sweat}</strong></span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
