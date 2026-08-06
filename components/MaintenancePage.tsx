'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { HeaderNavbar } from '@/components/HeaderNavbar';
import { LogoSVG } from '@/components/LogoSVG';
import { CountdownTimer } from '@/components/CountdownTimer';
import { MaintenanceNoticeCard } from '@/components/MaintenanceNoticeCard';
import { AdminSubscribersModal } from '@/components/AdminSubscribersModal';
import { TreeDeciduous } from 'lucide-react';

interface MaintenancePageProps {
  initialLang?: Language;
}

export function MaintenancePage({ initialLang = 'ar' }: MaintenancePageProps) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (path === 'ar' || path === 'fr' || path === 'en') {
        return path as Language;
      }
    }
    return initialLang;
  });
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleSelectLang = (selectedLang: Language) => {
    setLang(selectedLang);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `/${selectedLang}`);
    }
  };

  const t = translations[lang];

  return (
    <div
      dir={t.dir}
      className={`min-h-screen bg-[#0d1a12] text-[#f0f5f2] flex flex-col font-sans relative overflow-x-hidden ${
        lang === 'ar' ? 'font-arabic' : 'font-latin'
      }`}
    >
      {/* Visual Atmospheric Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed top-[-10%] start-[-10%] w-[50%] h-[50%] bg-[#1b4332] rounded-full blur-[140px] opacity-35 pointer-events-none" />
      <div className="fixed bottom-[-10%] end-[-10%] w-[50%] h-[50%] bg-[#2d6a4f] rounded-full blur-[150px] opacity-25 pointer-events-none" />

      {/* Header Navigation with Language Switcher (/ar, /fr, /en) */}
      <HeaderNavbar
        currentLang={lang}
        onSelectLang={handleSelectLang}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Single Clean Content Section */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 relative z-10 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto pt-4 pb-2">
          {/* Domain & Acronym Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#b7e4c7] text-xs sm:text-sm font-semibold mb-4 shadow-xl">
            <TreeDeciduous className="w-4 h-4 text-[#52b788]" />
            <span className="font-mono text-white tracking-widest">JODOUR.MA</span>
            <span className="text-white/20">•</span>
            <span>{t.tagline}</span>
          </div>

          {/* Official Emblem Logo */}
          <div className="my-2 flex justify-center transform hover:scale-105 transition-transform duration-300">
            <LogoSVG size={120} />
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mt-3">
            {t.associationName}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#52b788] font-extrabold tracking-widest uppercase">
            {t.associationAcronym}
          </p>
        </div>

        {/* Clean Single Maintenance Notice Card */}
        <MaintenanceNoticeCard
          currentLang={lang}
          onSelectLang={handleSelectLang}
        />

        {/* Countdown Timer */}
        <CountdownTimer currentLang={lang} />
      </main>

      {/* Admin Subscribers Drawer Modal */}
      <AdminSubscribersModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        currentLang={lang}
      />
    </div>
  );
}
