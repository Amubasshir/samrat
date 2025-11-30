'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-0 md:pt-20"
    >
      {/* Background Texture & Subtle Elements */}
      {/* Striped Dark Background (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 50% 50%,
          rgba(245, 158, 11, 0.14) 0%,
          rgba(245, 158, 11, 0.08) 25%,
          rgba(245, 158, 11, 0.03) 35%,
          transparent 50%
        )
      `,
          backgroundSize: '100% 100%',
        }}
      />

      {/* Subtle blurred overlay (decorative) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* Content: ensure it sits above decorative layers */}
      <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mx-auto md:mx-0"
        >
          <div className="flex items-center gap-4 mb-6 md:hidden justify-center md:justify-start">
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">
              Nazmul Samrat
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Smart Tax <span className="text-gold">Solutions.</span> <br />
            For <span className="inline-block mx-0 md:mx-2">A</span> Smarter
            <span className="text-gold"> Future.</span>
          </h1>

          <p className="text-gray-400 text-lg mb-5 md:mb-10  max-w-lg leading-relaxed">
            Trusted tax advisory focused on hassle-free compliance, financial
            protection, and financial solutions for both individuals and growing
            businesses.
          </p>

          <div className="flex flex-wrap gap-4 pb-2 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-40 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold-light transition-colors rounded-sm cursor-pointer"
              aria-label="Scroll to contact section"
            >
              Contact
            </a>
            <a
              href="#about"
              className="hidden md:inline-flex items-center justify-center w-40 py-4 border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors rounded-sm cursor-pointer"
              aria-label="Scroll to about section"
            >
              Read More
            </a>
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
