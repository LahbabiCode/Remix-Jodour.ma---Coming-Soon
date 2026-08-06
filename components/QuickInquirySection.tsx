'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { MessageSquare, Send, CheckCircle2, User, FileText } from 'lucide-react';

interface QuickInquirySectionProps {
  currentLang: Language;
}

export const QuickInquirySection: React.FC<QuickInquirySectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setName('');
        setMessage('');
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto my-10 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-[#52b788]/20 border border-[#52b788]/30 text-[#52b788]">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {t.inquiryTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#b7e4c7]/80">
            {t.inquirySubtitle}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#52b788] mb-1.5">
            {t.nameLabel}
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#52b788] absolute start-3.5 top-3.5" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePlaceholder}
              className="w-full ps-10 pe-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#52b788]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#52b788] mb-1.5">
            {t.messageLabel}
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-[#52b788] absolute start-3.5 top-3.5" />
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.messagePlaceholder}
              className="w-full ps-10 pe-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#52b788]"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-[#52b788] hover:bg-[#40916c] text-[#081c15] font-extrabold text-sm shadow-lg shadow-[#52b788]/20 transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <span>{t.submittingText}</span>
          ) : (
            <>
              <span>{t.sendButton}</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {success && (
        <div className="mt-4 p-4 rounded-xl bg-[#1b4332]/90 border border-[#52b788] text-[#b7e4c7] text-sm flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#52b788] shrink-0" />
          <span>{t.inquirySuccess}</span>
        </div>
      )}
    </section>
  );
};
