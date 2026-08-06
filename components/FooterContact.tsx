'use client';

import React from 'react';
import { Language, translations } from '@/lib/translations';
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterContactProps {
  currentLang: Language;
}

export const FooterContact: React.FC<FooterContactProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
    { name: 'X', icon: Twitter, href: 'https://x.com' },
  ];

  return (
    <footer className="w-full bg-[#081c15] border-t border-white/10 pt-12 pb-8 text-[#f0f5f2]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-8 border-b border-white/10">
          {/* Association Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/jodour-logo.jpg"
                alt="jodour.ma logo"
                className="w-12 h-12 object-contain rounded-xl border border-[#b7e4c7]/30 p-0.5 bg-[#1b4332]"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-extrabold text-[#b7e4c7] text-lg tracking-wider font-mono">jodour.ma</h3>
                <p className="text-xs text-[#52b788] font-bold">
                  {t.associationAcronym}
                </p>
              </div>
            </div>
            <p className="text-xs text-[#b7e4c7]/70 leading-relaxed">
              {t.associationName} — {t.tagline}.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-[#52b788]">
              {t.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#f0f5f2]/90">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#52b788] shrink-0" />
                <a href="mailto:contact@jodour.ma" className="hover:text-[#b7e4c7] transition-colors">
                  contact@jodour.ma
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#52b788] shrink-0" />
                <span dir="ltr">+212 522 00 00 00 / WhatsApp</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#52b788] shrink-0" />
                <span>{t.locationValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#52b788] shrink-0" />
                <span className="font-mono text-[#b7e4c7]">www.jodour.ma</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 uppercase tracking-wider text-[#52b788]">
              {t.socialTitle}
            </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#52b788] hover:bg-white/10 text-[#b7e4c7] hover:text-[#52b788] transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#b7e4c7]/50 gap-2 text-center sm:text-start">
          <p>© {new Date().getFullYear()} jodour.ma — {t.rightsReserved}.</p>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>/ar</span>
            <span>/fr</span>
            <span>/en</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
