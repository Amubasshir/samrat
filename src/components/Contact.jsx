"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
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
               <span className="text-[#C5A059] text-sm font-medium tracking-wide">For Our Honorable Clients</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Free Consulting
            </h2>

            <p className="text-[#C5A059] text-lg mb-8 font-medium">
              Call us 24/7 at (888)123-4567 or fill out the form.
            </p>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less able English.
            </p>
          </div>

          {/* Right Form */}
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                />
                <select className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 focus:outline-none focus:border-[#C5A059] transition-colors appearance-none">
                  <option className="bg-gray-900">Income Tax</option>
                  <option className="bg-gray-900">Vat</option>
                  <option className="bg-gray-900">Business Law</option>
                </select>
              </div>

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
              ></textarea>

              <button className="bg-[#C5A059] text-white font-medium px-10 py-4 rounded-sm hover:bg-[#b08d4b] transition-colors uppercase tracking-wide text-sm">
                Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
