'use client';

import React, { useState, useEffect } from 'react';
import { Language, translations } from '@/lib/translations';
import { Calendar, Clock } from 'lucide-react';

interface CountdownTimerProps {
  currentLang: Language;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  // Set target date to 28 days from now
  const [targetDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 28);
    d.setHours(12, 0, 0, 0);
    return d;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: t.countdownDays, value: timeLeft.days },
    { label: t.countdownHours, value: timeLeft.hours },
    { label: t.countdownMinutes, value: timeLeft.minutes },
    { label: t.countdownSeconds, value: timeLeft.seconds },
  ];

  return (
    <div className="w-full my-8 max-w-2xl mx-auto">
      <div className="flex items-center justify-center gap-2 mb-4 text-xs font-bold text-[#52b788] tracking-widest uppercase">
        <Clock className="w-4 h-4 text-[#52b788] animate-spin-slow" />
        <span>{t.expectedReturn}</span>
        <span className="inline-flex items-center gap-1 text-[11px] text-[#b7e4c7]/70 font-normal">
          <Calendar className="w-3.5 h-3.5 text-[#52b788]" />
          {targetDate.toLocaleDateString(currentLang === 'ar' ? 'ar-MA' : currentLang === 'fr' ? 'fr-FR' : 'en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:border-[#52b788]/60 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#b7e4c7] tracking-tight font-mono drop-shadow-md">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="mt-2 text-xs sm:text-sm font-bold text-[#f0f5f2]/80 uppercase tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
