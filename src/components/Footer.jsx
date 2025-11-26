'use client';

import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-gold block mb-6"
            >
              Nazmul Samrat
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Dedicated to providing exceptional legal representation with
              integrity and professionalism.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/naxmulsamrat"
                className="text-gray-500 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.facebook.com/naxmulsamrat"
                className="text-gray-500 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/naxmulsamrat"
                className="text-gray-500 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="#home"
                  className="hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-gold transition-colors"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Income Tax
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Vat Assistance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Business Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Estate Planning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Contact Info
            </h4>
            <div className="grid grid-cols-1 gap-4 text-sm text-gray-500">
              <div>
                <p className="text-gold font-semibold">Dhaka Chamber :</p>
                <p>Ivory Krishnachura (4th floor)</p>
                <p>3/1-E Purana Paltan, Dhaka-1000</p>
              </div>

              <div>
                <p className="text-gold font-semibold">Jamalpur Chamber :</p>
                <p>432, Mahmudpur Road, Melandah, Jamalpur</p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="tel:01912871143"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone size={16} />
                  <span>01912-871143</span>
                </a>
                <a
                  href="tel:01715317883"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone size={16} />
                  <span>01715-317883</span>
                </a>
                <a
                  href="mailto:n.tax.bd@gmail.com"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Mail size={16} />
                  <span>n.tax.bd@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Nazmul Samrat. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
