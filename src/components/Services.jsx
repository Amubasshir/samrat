"use client";

import { motion } from "framer-motion";
import { Briefcase, FileText, Gavel, Landmark, Scale, Shield } from "lucide-react";

const services = [
  {
    icon: <Scale className="w-10 h-10 text-gold" />,
    title: "Family Law",
    description: "Compassionate guidance for divorce, custody, and family matters."
  },
  {
    icon: <Shield className="w-10 h-10 text-gold" />,
    title: "Criminal Defense",
    description: "Aggressive protection of your rights in criminal proceedings."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-gold" />,
    title: "Business Law",
    description: "Strategic counsel for business formation, contracts, and disputes."
  },
  {
    icon: <FileText className="w-10 h-10 text-gold" />,
    title: "Estate Planning",
    description: "Securing your legacy with wills, trusts, and estate administration."
  },
  {
    icon: <Landmark className="w-10 h-10 text-gold" />,
    title: "Real Estate",
    description: "Expert handling of residential and commercial property transactions."
  },
  {
    icon: <Gavel className="w-10 h-10 text-gold" />,
    title: "Civil Litigation",
    description: "Skilled representation in complex civil disputes and lawsuits."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Areas of Practice</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            How Can We <span className="text-gold">Help You</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Providing comprehensive legal services across a wide range of practice areas to meet your personal and business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-dark p-10 border border-gray-800 hover:border-gold transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 bg-black/50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
