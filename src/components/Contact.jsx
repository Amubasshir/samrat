'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Income Tax',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');

    try {
      const response = await fetch('/api/send-appointment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Form submitted successfully', result);
        setSubmissionStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'Income Tax',
          message: '',
        });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }

    // Clear status after 5 seconds
    setTimeout(() => setSubmissionStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#C5A059]"></div>
              <span className="text-[#C5A059] text-sm font-medium tracking-wide">
                For Our Honorable Clients
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Free Consulting
            </h2>

            <p className="text-[#C5A059] text-lg mb-8 font-medium">
              Call us 24/7 or fill out the form.
            </p>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              Receive expert advice on tax issues, documentation, and compliance
              for your business and personal needs, ensuring accurate filing,
              legal protection, and maximum tax benefits.
            </p>
          </div>

          {/* Right Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none"
                >
                  <option value="Income Tax" className="bg-gray-900">
                    Income Tax
                  </option>
                  <option value="Vat" className="bg-gray-900">
                    Vat
                  </option>
                  <option value="Business Law" className="bg-gray-900">
                    Business Law
                  </option>
                </select>
              </div>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={submissionStatus === 'loading'}
                className="bg-[#d4af37] text-white cursor-pointer font-medium px-10 py-4 rounded-sm hover:bg-gold-light transition-colors uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submissionStatus === 'loading' ? 'Sending...' : 'Appointment'}
              </button>

              {/* Submission Status Message */}
              {submissionStatus === 'success' && (
                <p className="text-green-400 mt-2 font-medium">
                  ✅ Appointment request sent successfully! We will be in touch
                  shortly.
                </p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-400 mt-2 font-medium">
                  ❌ Error sending request. Please try again or call us.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
