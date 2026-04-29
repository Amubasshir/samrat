'use client';

import {
  AlertTriangle,
  CheckCircle,
  Loader2,
  Mail,
  Phone,
  Search,
  Shield,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function maskTin(tin) {
  if (tin.length !== 12) return tin;
  return tin.slice(0, 2) + '••••••••' + tin.slice(10);
}

export default function AuditCheckerPage() {
  const [tinInput, setTinInput] = useState('');
  const [result, setResult] = useState(null); // null | 'selected' | 'not-selected'
  const [error, setError] = useState('');
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState(false);
  const tinSetRef = useRef(null);

  useEffect(() => {
    fetch('/data/auditTins.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data');
        return res.json();
      })
      .then((tins) => {
        tinSetRef.current = new Set(tins);
        setDataLoading(false);
      })
      .catch(() => {
        setDataError(true);
        setDataLoading(false);
      });
  }, []);

  const handleCheck = () => {
    setError('');
    setResult(null);

    const tin = tinInput.trim();

    if (!/^\d{12}$/.test(tin)) {
      setError('Please enter a valid 12-digit TIN number.');
      return;
    }

    if (!tinSetRef.current) {
      setError('Data is still loading. Please wait.');
      return;
    }

    setResult(tinSetRef.current.has(tin) ? 'selected' : 'not-selected');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 12) {
      setTinInput(val);
      setError('');
      setResult(null);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-gray-800 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-bold text-gold">
            Nazmul Samrat
          </Link>
          <Link
            href="/#contact"
            className="text-gray-400 hover:text-gold transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-gold text-xs sm:text-sm font-medium tracking-wide mb-4 text-center">
            <Shield size={16} />
            <span>আপনার তথ্য নিরাপদ। এটি কোথাও সংরক্ষণ করা হয় না।</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 leading-snug">
            Assessment Year 2023-24
            <br />
            Risk-Based Audit Selection Checker
          </h1>
        </div>

        {/* Input */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 mb-8">
          <label className="block text-gray-300 text-sm mb-2">
            TIN নম্বর দিন
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              inputMode="numeric"
              value={tinInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Your 12-digit TIN number"
              disabled={dataLoading}
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gold transition-colors font-mono tracking-wider text-lg disabled:opacity-50"
            />
            <button
              onClick={handleCheck}
              disabled={dataLoading}
              className="bg-[#E8C84A] text-black cursor-pointer font-bold px-6 py-3 rounded-md hover:bg-gold-light transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed sm:whitespace-nowrap"
            >
              {dataLoading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Search size={18} />
              )}
              চেক করুন
            </button>
          </div>
          {error && <p className="text-red-400 text-xs sm:text-sm mt-2">{error}</p>}
          {dataError && (
            <p className="text-red-400 text-sm mt-2">
              Failed to load audit data. Please refresh the page.
            </p>
          )}
        </div>

        {/* Result */}
        {result === 'not-selected' && (
          <div className="bg-green-900/20 border border-green-800/40 rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <CheckCircle size={36} className="text-green-400 shrink-0 sm:mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-serif text-green-400 mb-1">
                  Audit-এ নেই
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  TIN {maskTin(tinInput)} — AY 2023-24 NBR audit তালিকায় নেই।
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300">
                    TIN: {maskTin(tinInput)}
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                    STATUS: Not Selected
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300">
                    ASSESSMENT YEAR: 2023-2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {result === 'selected' && (
          <div className="bg-red-900/20 border border-red-800/40 rounded-lg p-4 sm:p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <AlertTriangle size={36} className="text-red-400 shrink-0 sm:mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-serif text-red-400 mb-1">
                  Audit-এ আছেন!
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  আপনার TIN AY 2023-24 NBR audit তালিকায় রয়েছে। আইনি পরামর্শ
                  নেওয়া জরুরি।
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300">
                    TIN: {maskTin(tinInput)}
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                    STATUS: Selected
                  </span>
                  <span className="bg-white/5 border border-white/10 rounded px-3 py-1.5 text-xs text-gray-300">
                    ASSESSMENT YEAR: 2023-2024
                  </span>
                </div>

                {/* CTA */}
                <div className="border-t border-white/10 pt-4 space-y-3">
                  <Link
                    href="/#contact"
                    className="block w-full bg-[#d4af37] text-black font-bold text-center px-6 py-4 rounded-md hover:bg-gold-light transition-colors uppercase tracking-wider text-sm"
                  >
                    Nazmul Samrat-এর সাথে যোগাযোগ করুন
                  </Link>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <a
                      href="tel:01715317883"
                      className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Phone size={16} />
                      01715-317883
                    </a>
                    <a
                      href="mailto:n.tax.bd@gmail.com"
                      className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors"
                    >
                      <Mail size={16} />
                      n.tax.bd@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {[
            { value: '72,341', label: 'Returns Selected' },
            { value: '49', label: 'Tax Zones' },
            { value: '100%', label: 'Client-side' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-lg p-3 sm:p-4 text-center"
            >
              <div className="text-lg sm:text-xl font-bold text-gold">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-l-4 border-orange-500 bg-orange-900/10 rounded-r-lg p-4">
          <p className="text-gray-400 text-sm leading-relaxed">
            <strong className="text-orange-400">এই টুল সম্পর্কে:</strong> জাতীয়
            রাজস্ব বোর্ড (NBR) কর্তৃক বছর 2023-24 এ automated Risk-Based Audit
            Criterion আকারে 72,341টি আয়কর রিটার্ন নির্বাচিত হয়েছে। এই টুলে
            আপনার দেওয়া তথ্য কোথাও সংরক্ষণ করা বা কারো সাথে শেয়ার করা হয় না।
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Source: NBR press release, 28 April 2026.
          </p>
        </div>
      </div>
    </main>
  );
}
