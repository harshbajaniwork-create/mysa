import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-accent">Mysa</h2>
            <p className="text-white/70 mb-8 max-w-md">
              Experience peace and luxury in the heart of the Himalayas. Signup
              to our newsletter for exclusive updates and seasonal offers from
              our A-frame cottage in Manali.
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

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Details</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <Link
                  href="mailto:Info@mysacottage.com"
                  className="hover:text-accent transition-colors"
                >
                  Info@mysacottage.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <Link
                  href="tel:7374000057"
                  className="hover:text-accent transition-colors"
                >
                  7374000057
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-sm">
                  Dhara Chowk, Runga Road,
                  <br />
                  Fozal Valley 175129
                </span>
              </li>
            </ul>
          </div>

          {/* Reach & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-white/70 mb-8">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-accent transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility-statement"
                  className="hover:text-accent transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-bold border-t border-white/10 mb-4 pt-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
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
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Mysa Cottage. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span>Crafted for Serenity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
