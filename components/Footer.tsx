import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">The Hidden Track</h2>
            <p className="text-white/70 mb-8 max-w-md">
              Signup to our newsletter. Get exclusive tips, tricks, and hidden
              track updates to make your visit to Armenia unforgettable!
            </p>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-3 w-full focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-primary font-bold px-6 py-3 rounded-r-lg hover:bg-white transition-colors">
                SIGNUP
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  About Armenia
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Places to Go
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Things to Do
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <Link
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-all"
              >
                <Youtube size={20} />
              </Link>
            </div>
            <ul className="space-y-4 text-white/70">
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between text-white/50 text-sm">
          <p>© 2026 Armenia Travel. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Made by Concept Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
