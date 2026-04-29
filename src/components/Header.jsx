'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Mobile: logo image */}
          <Image
            src="/images/samlogo.jpeg"
            alt="Nazmul Samrat logo"
            width={60}
            height={60}
            className="h-14 w-auto"
            priority
          />

          {/* Desktop: text title */}
          <span className="hidden md:inline-block text-2xl font-serif font-bold text-gold">
            Nazmul Samrat
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/auditchecker"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gold text-black font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-sm hover:bg-gold-light transition-colors animate-pulse"
          >
            Verify Audit
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
              NEW
            </span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/90 border-t border-gray-800 md:hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-gold transition-all text-lg transform hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/auditchecker"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center bg-gold text-black font-bold text-sm uppercase tracking-widest px-4 py-3 rounded-sm hover:bg-gold-light transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Verify Audit
                <span className="absolute -top-1.5 right-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                  NEW
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
