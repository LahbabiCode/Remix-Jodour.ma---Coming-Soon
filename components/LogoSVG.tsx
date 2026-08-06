'use client';

import React from 'react';

interface LogoSVGProps {
  className?: string;
  size?: number;
}

export const LogoSVG: React.FC<LogoSVGProps> = ({ className = '', size = 120 }) => {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center ${className}`}>
      {/* Container with golden and glowing radial ring */}
      <div 
        className="relative group p-1.5 rounded-2xl bg-gradient-to-b from-[#1e3a8a] via-[#0f2b48] to-[#060e1a] border border-emerald-500/30 shadow-2xl shadow-emerald-900/30 hover:border-emerald-400/60 transition-all duration-300"
        style={{ width: size, height: size * 1.15 }}
      >
        <img
          src="/jodour-logo.jpg"
          alt="جمعية جذور للتنمية البشرية - ARDH"
          className="w-full h-full object-contain rounded-xl drop-shadow-md"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback to SVG if image fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Fallback Vector SVG in case image fails */}
        <svg
          viewBox="0 0 300 350"
          className="w-full h-full hidden rounded-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Navy Background */}
          <rect width="300" height="350" rx="16" fill="#0b2545" />
          <rect x="5" y="5" width="290" height="340" rx="12" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />

          {/* Arch Text at Top */}
          <path id="textPath" d="M 30,120 Q 150,20 270,120" fill="none" />
          <text fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">
            <textPath href="#textPath" startOffset="50%">
              جمعية جذور للتنمية البشرية
            </textPath>
          </text>

          {/* Keyhole frame */}
          <path
            d="M 150,70 A 55,55 0 0,0 100,140 Q 100,200 70,260 L 230,260 Q 200,200 200,140 A 55,55 0 0,0 150,70 Z"
            fill="#ffffff"
          />

          {/* Tree Trunk & Roots */}
          <g transform="translate(150, 180)">
            <path
              d="M-8,-20 C-6,-5 -15,15 -35,35 M8,-20 C6,-5 15,15 35,35 M0,-20 L0,40 M-4,10 C-10,25 -20,40 -25,50 M4,10 C10,25 20,40 25,50"
              stroke="#654321"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Green Crown */}
            <circle cx="0" cy="-45" r="38" fill="#15803d" />
            <circle cx="-20" cy="-35" r="25" fill="#16a34a" />
            <circle cx="20" cy="-35" r="25" fill="#22c55e" />
            <circle cx="0" cy="-55" r="25" fill="#4ade80" opacity="0.8" />
          </g>

          {/* Bottom Letters Box A | R | D | H */}
          <g transform="translate(30, 275)">
            <rect x="0" y="0" width="55" height="40" stroke="#ffffff" strokeWidth="2" fill="#0b2545" />
            <text x="27.5" y="27" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle">A</text>

            <rect x="62" y="0" width="55" height="40" stroke="#ffffff" strokeWidth="2" fill="#0b2545" />
            <text x="89.5" y="27" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle">R</text>

            <rect x="124" y="0" width="55" height="40" stroke="#ffffff" strokeWidth="2" fill="#0b2545" />
            <text x="151.5" y="27" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle">D</text>

            <rect x="186" y="0" width="55" height="40" stroke="#ffffff" strokeWidth="2" fill="#0b2545" />
            <text x="213.5" y="27" fill="#ffffff" fontSize="22" fontWeight="bold" textAnchor="middle">H</text>
          </g>
        </svg>
      </div>
    </div>
  );
};
