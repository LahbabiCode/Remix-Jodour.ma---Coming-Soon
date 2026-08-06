'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Language, translations } from '@/lib/translations';
import { SubscriberItem } from '@/app/api/subscribe/route';
import { X, Users, Download, Mail, Calendar, RefreshCw, Plus, Check } from 'lucide-react';

interface AdminSubscribersModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const AdminSubscribersModal: React.FC<AdminSubscribersModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = translations[currentLang];

  const [subscribers, setSubscribers] = useState<SubscriberItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe');
      const data = await res.json();
      if (data.success && Array.isArray(data.subscribers)) {
        setSubscribers(data.subscribers);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      let isSubscribed = true;
      const loadData = async () => {
        setLoading(true);
        try {
          const res = await fetch('/api/subscribe');
          const data = await res.json();
          if (isSubscribed && data.success && Array.isArray(data.subscribers)) {
            setSubscribers(data.subscribers);
          }
        } catch {
          // ignore
        } finally {
          if (isSubscribed) setLoading(false);
        }
      };
      loadData();
      return () => {
        isSubscribed = false;
      };
    }
  }, [isOpen]);

  const handleAddManual = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail || !newEmail.includes('@')) return;

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail, interest: 'Manual Admin Add' }),
      });
      const data = await res.json();
      if (data.success) {
        setNewEmail('');
        fetchSubscribers();
      }
    } catch {
      // ignore
    }
  };

  const exportCSV = () => {
    if (subscribers.length === 0) return;
    const header = 'ID,Email,Interest,SubscribedAt\n';
    const rows = subscribers
      .map((s) => `"${s.id}","${s.email}","${s.interest}","${s.subscribedAt}"`)
      .join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `jodour-subscribers-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmailsList = () => {
    const emails = subscribers.map((s) => s.email).join(', ');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0d1a12] border border-white/20 shadow-2xl p-6 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#52b788]/20 border border-[#52b788]/30 text-[#52b788]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {t.adminModalTitle}
              </h3>
              <p className="text-xs text-[#b7e4c7]/70">
                {t.subscribersCount} <span className="text-[#52b788] font-mono font-bold">{subscribers.length}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Add Form */}
        <form onSubmit={handleAddManual} className="my-4 flex items-center gap-2">
          <input
            type="email"
            placeholder="إضافة بريد إلكتروني يدوياً..."
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#52b788]"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-[#52b788] hover:bg-[#40916c] text-[#081c15] text-xs font-bold flex items-center gap-1 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>إضافة</span>
          </button>
        </form>

        {/* Subscribers Table / List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 my-2">
          {loading ? (
            <div className="p-8 text-center text-[#b7e4c7]/60 text-xs flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin text-[#52b788]" />
              <span>جاري التحميل...</span>
            </div>
          ) : subscribers.length === 0 ? (
            <div className="p-8 text-center text-[#b7e4c7]/60 text-xs">
              {t.noSubscribers}
            </div>
          ) : (
            subscribers.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between text-xs gap-3 hover:border-[#52b788]/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-7 h-7 rounded-lg bg-[#52b788]/20 text-[#52b788] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div className="truncate">
                    <p className="font-bold text-white truncate">{item.email}</p>
                    <p className="text-[11px] text-[#b7e4c7]/70 truncate">{item.interest}</p>
                  </div>
                </div>
                <div className="text-[11px] text-[#b7e4c7]/50 flex items-center gap-1 shrink-0 font-mono">
                  <Calendar className="w-3 h-3 text-[#52b788]" />
                  <span>{new Date(item.subscribedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              disabled={subscribers.length === 0}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-40"
            >
              <Download className="w-3.5 h-3.5 text-[#52b788]" />
              <span>تصدير CSV</span>
            </button>
            <button
              onClick={copyEmailsList}
              disabled={subscribers.length === 0}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-40"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#52b788]" /> : <Mail className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copied ? 'تم النسخ!' : 'نسخ الإيميلات'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
