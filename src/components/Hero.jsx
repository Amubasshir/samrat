"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background Texture & Subtle Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-black opacity-90"></div>

        {/* Animated Orbs/Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-gold"></div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">Attorney at Law</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Smart Tax <span className="text-gold">Solutions.</span> <br />
            Strong Legal <span className="text-gold">Protection.</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            With over 20 years of experience, we provide expert legal representation and strategic advice to protect your rights and future.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gold text-black font-bold uppercase tracking-wider hover:bg-gold-light transition-colors rounded-sm">
              Contact Us
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-gold hover:text-gold transition-colors rounded-sm">
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
                 src="/lawyer_portrait.png"
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
