"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVITEMS } from "@/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLightPage = pathname.startsWith("/properties");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span
            className={`text-3xl font-bold tracking-tighter ${
              isScrolled || isLightPage ? "text-primary" : "text-white"
            }`}
          >
            MY<span className="text-accent">S</span>A
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAVITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled || isLightPage ? "text-foreground" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#"
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              isScrolled || isLightPage
                ? "border-primary text-primary hover:bg-primary hover:text-white"
                : "border-white text-white hover:bg-white hover:text-primary"
            }`}
          >
            Events
          </Link>
        </div>

        {/* Icons */}
        <div
          className={`hidden lg:flex items-center space-x-5 ${
            isScrolled || isLightPage ? "text-foreground" : "text-white"
          }`}
        >
          <Search
            size={20}
            className="cursor-pointer hover:text-accent transition-colors"
          />
          <Heart
            size={20}
            className="cursor-pointer hover:text-accent transition-colors"
          />
          <Globe
            size={20}
            className="cursor-pointer hover:text-accent transition-colors"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={
              isScrolled || isLightPage ? "text-foreground" : "text-white"
            }
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl lg:hidden border-t"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAVITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex items-center space-x-6 text-foreground">
                <Search size={22} />
                <Heart size={22} />
                <Globe size={22} />
                <span className="text-sm font-bold">EN</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
