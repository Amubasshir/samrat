'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

// NOTE: Adjusted data for a high-end feel
const testimonials = [
  {
    id: 1,
    text: 'Their strategic approach and dedication to my case were outstanding. I felt supported throughout the entire process, achieving a result that exceeded expectations.',
    author: 'James Mitchell',
    role: 'CEO, Nexus Group',
  },
  {
    id: 2,
    text: 'Facing a complex legal battle, the team provided crystal-clear guidance and leveraged their expertise to secure an outcome better than I could have hoped for.',
    author: 'Sarah Jenkins',
    role: 'Managing Partner, Zenith Capital',
  },
  {
    id: 3,
    text: 'Professional, knowledgeable, and genuinely compassionate. They expertly navigated the complexities, ensuring my voice was heard and my interests were protected.',
    author: 'Robert Chen',
    role: 'Real Estate Portfolio Director',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Define ACCENT_COLOR using the hex code
  const ACCENT_COLOR_HEX = '#CEAA36';
  const ACCENT_TEXT_COLOR = '#CEAA36'; // Tailwind style using the hex color directly

  return (
    <section id="testimonials" className="relative py-32 bgTest overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-20">
        {/* Header */}
        <span
          className="uppercase tracking-[0.3em] text-xs font-medium mb-4 block"
          style={{ color: ACCENT_TEXT_COLOR }}
        >
          TESTIMONIALS
        </span>
        <h2
          className="text-5xl md:text-6xl font-serif font-extrabold text-white mb-20 tracking-tight"
          style={{ fontFamily: 'Garamond, Georgia, serif' }}
        >
          What Our <span style={{ color: ACCENT_COLOR_HEX }}>Clients Say</span>
        </h2>

        {/* Testimonial Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Large Decorative Quote Icon (Subtle and Behind) */}
          <div
            style={{ color: ACCENT_COLOR_HEX + '1A' }} // Added opacity 1A (approx 10%)
            className="absolute top-0 left-[3%] -translate-x-1/2 -translate-y-[60%]"
          >
            <Quote size={200} strokeWidth={0.5} />
          </div>

          {/* Testimonial Content Box */}
          <div className="bg-black/50 p-12 md:p-20 rounded-lg shadow-2xl shadow-black/80 relative z-10 min-h-[400px] flex flex-col justify-center border border-amber-500/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                aria-live="polite"
              >
                {/* Rating Stars (Subtle) */}
                <div className="flex justify-center mb-8">
                  <div
                    className="flex gap-1 text-2xl"
                    style={{ color: ACCENT_COLOR_HEX, opacity: 0.7 }} // ✨ Applied HEX color and opacity
                  >
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-3xl md:text-4xl text-gray-200 font-serif italic mb-10 leading-snug">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t-2 border-amber-500/50 max-w-sm mx-auto">
                  <h4 className="text-white font-extrabold text-xl tracking-wider">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p
                    className="text-[ACCENT_TEXT_COLOR] text-sm uppercase tracking-widest mt-1"
                    style={{ color: ACCENT_TEXT_COLOR }} // Applied HEX color here
                  >
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0 md:px-0 pointer-events-none max-w-[calc(100%+60px)] left-1/2 -translate-x-1/2 z-30">
            {/* Previous Button */}
            <motion.button
              onClick={prev}
              className="p-3 bg-gray-800 hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 rounded-full shadow-lg border border-gray-700/50 pointer-events-auto opacity-80 hover:opacity-100 z-40"
              style={{ color: ACCENT_COLOR_HEX }}
              whileHover={{ scale: 1.1, x: -5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={28} />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={next}
              className="p-3 bg-gray-800 hover:bg-amber-500 hover:text-gray-900 transition-colors duration-300 rounded-full shadow-lg border border-gray-700/50 pointer-events-auto opacity-80 hover:opacity-100 z-40"
              style={{ color: ACCENT_COLOR_HEX }}
              whileHover={{ scale: 1.1, x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
              aria-label="Next Testimonial"
            >
              <ChevronRight size={28} />
            </motion.button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? 'scale-125 shadow-md shadow-amber-500/40'
                    : 'bg-gray-700 hover:bg-gray-500'
                }`}
                style={{
                  backgroundColor: index === currentIndex ? ACCENT_COLOR_HEX : undefined,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
