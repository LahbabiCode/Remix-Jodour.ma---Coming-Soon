'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Wrench, CheckCircle2, Sparkles } from 'lucide-react';

interface MaintenanceNoticeCardProps {
  currentLang: Language;
  onSelectLang?: (lang: Language) => void;
}

export const MaintenanceNoticeCard: React.FC<MaintenanceNoticeCardProps> = ({
  currentLang,
}) => {
  const t = translations[currentLang];

  const exactMessages: Record<Language, { text: string; langLabel: string; flag: string; title: string }> = {
    ar: {
      langLabel: 'العربية',
      flag: '🇲🇦',
      title: 'إشعار الصيانة والتحديث',
      text: 'موقع الجمعية قيد الصيانة حاليًا، نعمل على تطويره وتحديثه لنقدم لكم تجربة أفضل. شكرًا لتفهمكم.',
    },
    fr: {
      langLabel: 'Français',
      flag: '🇫🇷',
      title: 'Avis de maintenance',
      text: 'Le site de l’association est actuellement en maintenance. Nous travaillons à son amélioration afin de vous offrir une meilleure expérience. Merci de votre compréhension.',
    },
    en: {
      langLabel: 'English',
      flag: '🇬🇧',
      title: 'Maintenance Notice',
      text: 'Our association’s website is currently under maintenance. We are working to improve it and provide you with a better experience. Thank you for your understanding.',
    },
  };

  const msg = exactMessages[currentLang];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Background Subtle Atmospheric Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-[#1b4332] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-[#2d6a4f] rounded-full blur-[150px] opacity-30 pointer-events-none" />

      {/* Top Card Header */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="p-3.5 rounded-2xl bg-[#52b788]/10 border border-[#52b788]/30 text-[#52b788]">
            <Wrench className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              {msg.title}
            </h2>
            <p className="text-xs text-[#95d5b2] font-semibold flex items-center gap-1 mt-0.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>jodour.ma</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono bg-[#52b788]/20 text-[#b7e4c7] px-3 py-1 rounded-xl text-xs font-bold border border-[#52b788]/30 flex items-center gap-1.5">
            <span>{msg.flag}</span>
            <span>/{currentLang}</span>
          </span>
        </div>
      </div>

      {/* Active Language Main Text Display */}
      <div 
        dir={msg.langLabel === 'العربية' ? 'rtl' : 'ltr'}
        className="p-6 sm:p-8 rounded-2xl bg-black/30 border border-white/10 text-white leading-relaxed text-lg sm:text-xl shadow-inner relative"
      >
        <p className="font-semibold text-[#f0f5f2] leading-relaxed">
          &ldquo;{msg.text}&rdquo;
        </p>

        {/* Language Badge Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#95d5b2]">
          <span className="flex items-center gap-1.5 font-bold text-[#b7e4c7]">
            <CheckCircle2 className="w-4 h-4 text-[#52b788]" />
            {t.associationName} ({t.associationAcronym})
          </span>
          <span className="text-xs text-[#b7e4c7]/60">
            jodour.ma
          </span>
        </div>
      </div>
    </div>
  );
};
