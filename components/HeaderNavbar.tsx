'use client';

import React from 'react';
import Image from 'next/image';
import { Language, translations } from '@/lib/translations';
import { Globe, ShieldAlert } from 'lucide-react';

interface HeaderNavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenAdmin?: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenAdmin,
}) => {
  const t = translations[currentLang];

  const langs: { id: Language; label: string; flag: string }[] = [
    { id: 'ar', label: 'العربية', flag: '🇲🇦' },
    { id: 'fr', label: 'Français', flag: '🇫🇷' },
    { id: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0d1a12]/80 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#b7e4c7]/30 bg-[#1b4332] p-0.5 shadow-md flex items-center justify-center relative">
            <Image
              src="/jodour-logo.jpg"
              alt="jodour.ma"
              width={44}
              height={44}
              className="w-full h-full object-cover rounded-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl text-[#b7e4c7] tracking-wider font-mono">
                JODOUR.MA
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-[#52b788]/20 text-[#b7e4c7] border border-[#52b788]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52b788] animate-ping" />
                ARDH
              </span>
            </div>
            <span className="text-xs text-[#b7e4c7]/70 font-medium hidden sm:inline-block">
              {t.associationName}
            </span>
          </div>
        </div>

        {/* Status Badge & Lang Switcher */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Maintenance Pill */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2d6a4f]/30 border border-[#52b788]/30 text-[#b7e4c7] text-xs font-medium">
            <ShieldAlert className="w-3.5 h-3.5 animate-pulse text-[#52b788]" />
            <span>{t.statusBadge}</span>
          </div>

          {/* Language Switcher Buttons (/ar, /fr, /en) */}
          <div className="flex items-center bg-black/30 p-1 rounded-xl border border-white/10 shadow-inner">
            <Globe className="w-4 h-4 text-[#b7e4c7]/60 mx-1.5 hidden xs:block" />
            {langs.map((l) => (
              <button
                key={l.id}
                onClick={() => onSelectLang(l.id)}
                className={`px-2.5 sm:px-3 py-1 text-xs font-bold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                  currentLang === l.id
                    ? 'bg-[#52b788] text-[#081c15] shadow-lg shadow-[#52b788]/20'
                    : 'text-[#f0f5f2]/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.id.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
