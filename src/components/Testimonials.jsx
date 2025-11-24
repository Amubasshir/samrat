"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "This attorney truly understands the law. Their strategic approach and dedication to my case were outstanding. I felt supported throughout the entire process.",
    author: "James Mitchell",
    role: "Business Owner"
  },
  {
    id: 2,
    text: "I was facing a complex legal battle, and I didn't know where to turn. The team provided clear guidance and achieved a result better than I could have hoped for.",
    author: "Sarah Jenkins",
    role: "Client"
  },
  {
    id: 3,
    text: "Professional, knowledgeable, and compassionate. They fought for my rights and ensured that my voice was heard. Highly recommended.",
    author: "Robert Chen",
    role: "Real Estate Investor"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-dark relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Client Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-16">
          What Our <span className="text-gold">Clients Say</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 text-gold/10 -translate-x-1/2 -translate-y-1/2">
            <Quote size={120} />
          </div>

          <div className="bg-black/40 border border-gray-800 p-12 md:p-16 rounded-sm relative z-10 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                   <div className="flex gap-1">
                     {[...Array(5)].map((_, i) => (
                       <span key={i} className="text-gold text-xl">★</span>
                     ))}
                   </div>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 font-serif italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].author}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-gray-700 text-white hover:border-gold hover:text-gold transition-colors rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 border border-gray-700 text-white hover:border-gold hover:text-gold transition-colors rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
