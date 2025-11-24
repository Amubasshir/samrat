"use client";

import { motion } from "framer-motion";
import { BadgePercent, Clock, FileText, Users } from "lucide-react";

const services = [
  {
    icon: <Users className="w-12 h-12 text-gold transition-colors duration-300 group-hover:text-gold-dark" />,
    title: "Professional Lawyers",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac imperdiet tellus"
  },
  {
    icon: <FileText className="w-12 h-12 text-gold transition-colors duration-300 group-hover:text-gold-dark" />,
    title: "Document Reviewing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac imperdiet tellus"
  },
  {
    icon: <Clock className="w-12 h-12 text-gold transition-colors duration-300 group-hover:text-gold-dark" />,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac imperdiet tellus"
  },
  {
    icon: <BadgePercent className="w-12 h-12 text-gold transition-colors duration-300 group-hover:text-gold-dark" />,
    title: "Discounted Rate",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ac imperdiet tellus"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/services-bg.jpg')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4 block">
            Why Choose Us?
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Let Our Experience Guide You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-gold/50 p-8 text-center hover:scale-105 transition-transform duration-300 bg-black/20 backdrop-blur-sm"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full border border-gold/30 group-hover:border-gold-dark/50 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
