'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { UserCheck, GraduationCap, HeartHandshake, Sprout, Target } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#52b788]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#b7e4c7]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#52b788]" />;
      default:
        return <Target className="w-6 h-6 text-[#52b788]" />;
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto my-12 px-4">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {t.aboutHeading}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#b7e4c7] mx-auto my-3 rounded-full" />
        <p className="text-sm sm:text-base text-[#b7e4c7]/80 leading-relaxed font-medium">
          {t.aboutDescription}
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#52b788]/60 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {getIcon(pillar.icon)}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#b7e4c7]/70 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
