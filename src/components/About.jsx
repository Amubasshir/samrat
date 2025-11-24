'use client';

import { motion } from 'framer-motion';
import { Award, BookOpen, Users } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      label: 'Years Experience',
      value: '20+',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      label: 'Cases Won',
      value: '850+',
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      label: 'Happy Clients',
      value: '1200+',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Placeholder for another image if needed, or just text layout */}
              <div className="aspect-[3/4] bg-gray-800 rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* We can reuse the lawyer image here or another one */}
                <img
                  src="./images/sam.jpg"
                  alt="About Lawyer"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute bottom-8 left-8 z-20">
                  <p className="text-gold font-serif text-2xl italic">
                    &quot;Justice is truth in action&quot;
                  </p>
                  <p className="text-white mt-2 font-bold">
                    - Benjamin Disraeli
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">
              About Our Practice
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
              Committed to Excellence in{' '}
              <span className="text-gold">Legal Representation</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              We understand that legal matters can be complex and stressful. Our
              mission is to provide clear, strategic, and effective legal
              solutions tailored to your unique situation.
            </p>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              With a focus on integrity and results, we have built a reputation
              for excellence in the courtroom and at the negotiating table.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/50 p-6 border border-gray-800 hover:border-gold/50 transition-colors rounded-sm"
                >
                  <div className="mb-4">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
