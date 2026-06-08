import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const lines = [
    "CrunchX is not just a snack; it's a high-octane sensory explosion designed for the fearless.",
    "We source the world’s most intense peppers, from the smoking ghost chili to the volcanic habanero.",
    "Every batch is triple-fired in our signature kilns to achieve a crunch that resonates with every bite.",
    "Our secret spice blend is calibrated for a multi-layered burn that evolves into a deep, smoky finish.",
    "We exist for the risk-takers and the flavor-chasers who believe that if it doesn't burn, it isn't bold."
  ];

  return (
    <section className="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-red-900/10 blur-[100px] rounded-full" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-red-600 font-black tracking-[0.4em] text-xs md:text-sm mb-16 uppercase"
        >
          The Manifest of Heat
        </motion.h2>

        <div className="space-y-10">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-white text-xl md:text-4xl font-light italic leading-snug"
              style={{ fontFamily: "'Urbanist', sans-serif" }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}