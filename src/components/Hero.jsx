'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20"
    >
      {/* Background Texture & Subtle Elements */}
      {/* Striped Dark Background (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            'repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)',
        }}
      />

      {/* Subtle blurred overlay (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
        // style={{
        //   background: 'rgba(255, 255, 255, 0.02)',
        //   backdropFilter: 'blur(45px) grayscale(20%)',
        //   WebkitBackdropFilter: 'blur(45px) grayscale(20%)',
        // }}
      />

      {/* Content: ensure it sits above decorative layers */}
      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-2 md:mb-6">
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">
              Nazmul Samrat
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Smart Tax <span className="text-gold">Solutions.</span> <br />
            Strong Legal <span className="text-gold">Protection.</span>
          </h1>

          <p className="text-gray-400 text-lg mb-5 md:mb-10  max-w-lg leading-relaxed">
            With over 20 years of experience, we provide expert legal
            representation and strategic advice to protect your rights and
            future.
          </p>

          <div className="flex flex-wrap gap-4 pb-2">
            <button className="px-7 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold-light transition-colors rounded-sm">
              Contact Us
            </button>
            <button className="px-[33px] py-4 border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors rounded-sm">
              Read More
            </button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] hidden md:block"
        >
          <div className="absolute inset-0 border-2 border-gold/30 transform translate-x-4 translate-y-4 rounded-sm"></div>
          <div className="relative h-full w-full overflow-hidden rounded-sm shadow-2xl shadow-gold/10">
            {/* Placeholder for the generated image - assuming it will be saved as lawyer_portrait.png in public */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
              <Image
                src="/images/lawyer_portrait.jpg"
                alt="Lawyer Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
