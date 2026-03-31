"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Plus, Minus, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAVITEMS, THINGS_TO_DO } from "@/constants";
import { PLACES_TO_GO } from "@/app/modules/places-to-go/constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(
    null,
  );
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(0);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLightPage = pathname.startsWith("/properties");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = useCallback((itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(itemName);
    setHoveredItemIndex(0);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const getDropdownData = () => {
    if (activeDropdown === "Places to Go") return PLACES_TO_GO;
    if (activeDropdown === "Things to Do") return THINGS_TO_DO;
    return [];
  };

  const dropdownData = getDropdownData();
  const previewItem = dropdownData[hoveredItemIndex] || dropdownData[0];
  const isDesktopDropdownOpen = activeDropdown !== null;
  const dropdownUrlPrefix =
    activeDropdown === "Places to Go" ? "/places-to-go" : "/things-to-do";

  return (
    <>
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
            <Image
              src={
                isScrolled || isLightPage
                  ? "/logos/mysa-logo-2.png"
                  : "/logos/mysa-logo-1.png"
              }
              alt="Mysa Logo"
              width={100}
              height={100}
              className="h-16 w-28 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVITEMS.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.name)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`text-sm font-medium transition-colors hover:text-accent flex items-center gap-1 ${
                      isScrolled || isLightPage
                        ? "text-foreground"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled || isLightPage ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isMobileMenuOpen) setOpenMobileAccordion(null);
              }}
              className={
                isScrolled || isLightPage ? "text-foreground" : "text-white"
              }
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ============ DESKTOP MEGA-MENU DROPDOWN ============ */}
      <AnimatePresence>
        {isDesktopDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-40 hidden lg:block"
            style={{ paddingTop: isScrolled ? "72px" : "88px" }}
            onMouseEnter={() => handleDropdownEnter(activeDropdown as string)}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Grid of item names */}
                <div className="p-8 pb-0">
                  <div
                    className={`grid gap-x-12 gap-y-4 ${
                      activeDropdown === "Things to Do"
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {dropdownData.map((item, index) => (
                      <Link
                        key={item.slug}
                        href={`${dropdownUrlPrefix}/${item.slug}`}
                        className={`text-sm font-medium py-1.5 transition-colors duration-150 ${
                          hoveredItemIndex === index
                            ? "text-accent"
                            : "text-gray-700 hover:text-accent"
                        }`}
                        onMouseEnter={() => setHoveredItemIndex(index)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Preview section */}
                {previewItem && (
                  <div className="p-8 pt-6">
                    <div className="flex gap-6 items-start">
                      <div className="relative w-[240px] h-[150px] rounded-xl overflow-hidden shrink-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={previewItem.slug}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={previewItem.previewImage}
                              alt={previewItem.name}
                              fill
                              className="object-cover"
                              sizes="240px"
                            />
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      <div className="flex-1 min-w-0">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={previewItem.slug}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <h3 className="text-lg font-bold text-primary mb-2">
                              {previewItem.name}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                              {previewItem.tagline}
                            </p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ MOBILE FULL-SCREEN DRAWER ============ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-white lg:hidden overflow-y-auto"
            style={{ top: 0 }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/logos/mysa-logo-2.png"
                  alt="Mysa Logo"
                  width={100}
                  height={100}
                  className="h-12 w-24 object-contain"
                />
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-foreground">EN</span>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenMobileAccordion(null);
                  }}
                  className="text-foreground"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Drawer nav items */}
            <div className="px-6 py-4">
              {NAVITEMS.map((item) => {
                if (item.hasDropdown) {
                  const mobileData =
                    item.name === "Places to Go"
                      ? PLACES_TO_GO
                      : item.name === "Things to Do"
                        ? THINGS_TO_DO
                        : [];
                  const mobilePrefix =
                    item.name === "Places to Go"
                      ? "/places-to-go"
                      : "/things-to-do";
                  const isOpen = openMobileAccordion === item.name;

                  return (
                    <div key={item.name} className="border-b border-gray-100">
                      {/* Accordion header */}
                      <button
                        onClick={() =>
                          setOpenMobileAccordion(isOpen ? null : item.name)
                        }
                        className="w-full flex items-center justify-between py-5"
                      >
                        <span className="text-base font-bold text-foreground uppercase tracking-wide">
                          {item.name}
                        </span>
                        <span className="text-foreground">
                          {isOpen ? (
                            <Minus size={22} strokeWidth={2.5} />
                          ) : (
                            <Plus size={22} strokeWidth={2.5} />
                          )}
                        </span>
                      </button>

                      {/* Accordion content */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pb-5 pl-2 space-y-4">
                              {mobileData.map((dataItem) => (
                                <Link
                                  key={dataItem.slug}
                                  href={`${mobilePrefix}/${dataItem.slug}`}
                                  className="block text-sm text-gray-700 hover:text-accent transition-colors"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenMobileAccordion(null);
                                  }}
                                >
                                  {dataItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between py-5 border-b border-gray-100 text-base font-bold text-foreground uppercase tracking-wide hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
