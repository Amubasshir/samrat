'use client';

import { motion } from 'framer-motion';

// --- 1. ServiceCard Sub-Component ---
const ServiceCard = ({ iconUrl, title, description }) => {
  return (
    <motion.div
      // Framer Motion properties for instant, snappy hover animation
      whileHover={{ scale: 1.03, y: -3 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
        duration: 0.1,
      }}
      // Tailwind CSS styling: REMOVED the 'transition-all duration-300' classes
      className="flex flex-col items-center text-center p-6 sm:p-8 bg-black/40 border
                 border-amber-500/50
                 cursor-pointer relative z-10"
    >
      {/* Icon: Now using an <img> tag */}
      <div className="mb-3">
        <img
          src={iconUrl}
          alt={title + ' icon'}
          className="w-[6rem] h-[6rem] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="pt-5 font-header text-2xl md:text-lg text-white md:pt-6">
        {title}
      </h3>

      {/* Description */}
      <p className="pt-6 pb-3 font-body text-sm font-light leading-loose text-white md:py-8">
        {description}
      </p>
    </motion.div>
  );
};

// --- 2. Main Services Component ---
const Services = () => {
  const descriptionService =
    'Expert legal support for income tax, VAT, and company compliance matters with accuracy.';
  const descriptionReview =
    'Accurate review and preparation of tax files, returns, company papers, and audits.';
  const descriptionSupport =
    'Reliable tax guidance and consultation available whenever you need professional help.';
  const descriptionRate =
    'Affordable tax solutions with transparent fees for individuals, startups, and businesses.';

  const services = [
    {
      iconUrl:
        'https://thompson.redpixelthemes.com/assets/img/icons/icon-professional-hover.svg',
      title: 'Professional Services',
      description: descriptionService,
    },
    {
      iconUrl:
        'https://thompson.redpixelthemes.com/assets/img/icons/icon-reviewing-hover.svg',
      title: 'Document Reviewing',
      description: descriptionReview,
    },
    {
      iconUrl:
        'https://thompson.redpixelthemes.com/assets/img/icons/icon-support-hover.svg',
      title: '24/7 Support',
      description: descriptionSupport,
    },
    {
      iconUrl:
        'https://thompson.redpixelthemes.com/assets/img/icons/icon-rate-hover.svg',
      title: 'Discounted Rate',
      description: descriptionRate,
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/cover.jpg"
          alt="Diverse group of people looking down and smiling"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark/Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gray-900 opacity-80"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-white">
        {/* Header Text Section */}
        <div className="text-center mb-16">
          <p className="font-semi-bold font-body text-sm uppercase tracking-widest text-primary md:text-lg text-[#CEAA36] ">
            WHY CHOOSE ME?
          </p>
          <h2
            className="pt-2 font-header text-2xl text-white sm:text-3xl md:text-4xl xl:pt-5 xl:text-5xl"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Let My Experience Guide You
          </h2>
        </div>

        {/* Cards Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconUrl={service.iconUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
