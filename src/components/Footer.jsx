'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
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
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
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
                  Family Law
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Criminal Defense
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
            <ul className="space-y-3 text-sm text-gray-500">
              <li>123 Legal Avenue, Suite 100</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@attorneylaw.com</li>
            </ul>
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
