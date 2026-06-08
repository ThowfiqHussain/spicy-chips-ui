import React from 'react';

export default function FireText() {
  return (
    <svg viewBox="0 0 900 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        {/* Fire Gradient */}
        <linearGradient id="fireGradient" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8a0000" />
          <stop offset="40%" stopColor="#ff4500" />
          <stop offset="100%" stopColor="#ffcc00" />
        </linearGradient>
        
        {/* Turbulence Filter for the "Flame" Effect */}
        <filter id="flameFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.02 0.1" numOctaves="3" seed="1">
            <animate attributeName="baseFrequency" values="0.02 0.1; 0.03 0.15; 0.02 0.1" dur="3s" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
      </defs>

      {/* The Text with Fire Effect */}
      <text 
        x="50%" y="70%" 
        textAnchor="middle" 
        className="font-black text-[220px] uppercase" 
        style={{ fontFamily: 'Impact, sans-serif' }}
        fill="url(#fireGradient)"
        filter="url(#flameFilter)"
      >
        HEAT.
      </text>
      
      {/* Stroke Outline for better visibility */}
      <text 
        x="50%" y="70%" 
        textAnchor="middle" 
        className="font-black text-[220px] uppercase" 
        style={{ fontFamily: 'Impact, sans-serif' }}
        fill="none"
        stroke="#ff4500"
        strokeWidth="3"
        opacity="0.3"
      >
        HEAT.
      </text>
    </svg>
  );
}