'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const stats = [
    {
      icon: './certificate.png',
      label: 'Years Experience',
      value: 5,
    },
    {
      icon: './book.png',
      label: 'Cases Won',
      value: 50,
    },
    {
      icon: './client-care.png',
      label: 'Happy Clients',
      value: 100,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

                <img
                  src="./images/sam.jpg"
                  alt="About Lawyer"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-gold font-serif text-lg md:text-2xl italic">
                    &quot;Smart taxation empowers growth&quot;
                  </p>
                  <p className="text-white mt-2 font-serif font-bold">
                    - Nazmul Samrat
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 z-0 hidden md:block"></div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">
              About Our Practice
            </span>

            <h2 className="text-5xl font-serif font-bold text-white mb-6">
              Committed to Excellence in <br />
              <span className="text-gold block mt-2">
                Tax and Legal Advisory
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We understand that tax and compliance matters can be complicated,
              time-sensitive, and stressful. Our goal is to provide accurate,
              strategic, and reliable legal solutions customized to your
              financial and business needs.
            </p>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              With a focus on transparency, precision, and proven results, we
              have built trust by helping clients navigate income tax, VAT,
              company registration, audits, and legal documentation effectively.
            </p>

            {/* ==== CARDS + ANIMATION ==== */}
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-6 border border-gray-800 hover:border-gold/50 transition-colors rounded-sm"
                >
                  {/* ICON */}
                  <motion.div
                    className="mb-4 flex justify-center"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <img src={stat.icon} alt="" className="w-16 h-16" />
                  </motion.div>

                  {/* NUMBER */}
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.25 }}
                    className="text-center"
                  >
                    <AnimatedNumber value={stat.value} />
                  </motion.div>

                  {/* LABEL */}
                  <motion.p
                    className="text-gray-500 text-sm uppercase tracking-wider text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==== COUNTING ANIMATION TRIGGERED ON VIEW ==== */
function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Run once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const end = parseInt(value);
    const duration = 1500;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startCounting, value]);

  return (
    <h3
      ref={ref}
      className="text-3xl font-bold text-white mb-1 flex justify-center"
    >
      {count}+
    </h3>
  );
}
