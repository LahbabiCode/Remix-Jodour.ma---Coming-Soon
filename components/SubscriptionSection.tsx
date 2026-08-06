'use client';

import React, { useState } from 'react';
import { Language, translations } from '@/lib/translations';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

interface SubscriptionSectionProps {
  currentLang: Language;
  onSubscribed?: () => void;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({
  currentLang,
  onSubscribed,
}) => {
  const t = translations[currentLang];

  const [email, setEmail] = useState('');
  const [selectedInterest, setSelectedInterest] = useState<string>('general');
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'already';
    text: string;
  } | null>(null);

  const interestKeys: Array<{ key: keyof typeof t.interests; icon: string }> = [
    { key: 'general', icon: '📢' },
    { key: 'volunteering', icon: '🤝' },
    { key: 'projects', icon: '🌱' },
    { key: 'events', icon: '🗓️' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatusMessage({
        type: 'error',
        text: currentLang === 'ar' ? 'الرجاء إدخال بريد إلكتروني صحيح' : currentLang === 'fr' ? 'Veuillez saisir un email valide' : 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          interest: t.interests[selectedInterest as keyof typeof t.interests] || selectedInterest,
        }),
      });

      const data = await res.json();

      if (data.success) {
        if (data.alreadySubscribed) {
          setStatusMessage({
            type: 'already',
            text: t.alreadySubscribedMessage,
          });
        } else {
          setStatusMessage({
            type: 'success',
            text: t.successMessage,
          });
          setEmail('');

          // Trigger confetti burst
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#52b788', '#b7e4c7', '#2d6a4f', '#95d5b2'],
          });

          if (onSubscribed) {
            onSubscribed();
          }
        }
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to subscribe',
        });
      }
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Network error occurred. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="subscribe-section" className="w-full max-w-3xl mx-auto my-8 p-6 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2d6a4f] via-[#52b788] to-[#b7e4c7]" />

      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#52b788]/20 border border-[#52b788]/30 text-[#b7e4c7] text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
          <span>{t.subscribeHeading}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {t.subscribeHeading}
        </h3>
        <p className="mt-2 text-sm sm:text-base text-[#b7e4c7]/80 leading-relaxed">
          {t.subscribeSubheading}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Interest Selector Pills */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#52b788] mb-3 text-center">
            {t.interestLabel}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {interestKeys.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setSelectedInterest(item.key)}
                className={`p-3 rounded-2xl text-xs font-bold border transition-all duration-200 flex flex-col items-center justify-center gap-1.5 text-center ${
                  selectedInterest === item.key
                    ? 'bg-[#52b788]/20 border-[#52b788] text-white shadow-lg shadow-[#52b788]/20 scale-[1.02]'
                    : 'bg-black/20 border-white/10 text-[#b7e4c7]/60 hover:text-white hover:border-white/30'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span className="line-clamp-2">{t.interests[item.key]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Email Input & Submit Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-[#52b788]">
              <Mail className="w-5 h-5 text-[#52b788]" />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              className="w-full ps-11 pe-4 py-4 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#52b788] transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-xl bg-[#52b788] hover:bg-[#40916c] text-[#081c15] font-extrabold text-sm shadow-lg shadow-[#52b788]/20 transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            {loading ? (
              <span>{t.submittingText}</span>
            ) : (
              <>
                <span>{t.subscribeButton}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Response Feedback Notification */}
      {statusMessage && (
        <div
          className={`mt-6 p-4 rounded-2xl border text-sm flex items-start gap-3 animate-fade-in ${
            statusMessage.type === 'success'
              ? 'bg-[#1b4332]/90 border-[#52b788] text-[#b7e4c7]'
              : statusMessage.type === 'already'
              ? 'bg-amber-950/80 border-amber-500/50 text-amber-200'
              : 'bg-rose-950/80 border-rose-500/50 text-rose-200'
          }`}
        >
          {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#52b788] shrink-0 mt-0.5" />}
          {statusMessage.type === 'already' && <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
          {statusMessage.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
          <div>
            <p className="font-bold">{statusMessage.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
