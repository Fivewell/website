"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Themes", href: "/themes" },
     { name: "Partnerships", href: "/partners" },
    { name: "Projects", href: "/case-studies" },
    // { name: 'Media', href: '/media' },
    { name: "Media", href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-primary text-white border-b border-primary/20"
    >
      <div className="px-4">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="FiveWellAfrica"
                width={300}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}

          {/* CTA Button */}
          <div className="hidden md:flex">
            <nav className="hidden md:flex space-x-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-2 py-2 text-base font-semibold transition-colors duration-200 ${isActive
                        ? "text-white font-bold"
                        : "text-white/90 hover:text-white"
                      }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F5D7A2]"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              className="bg-[#F5D7A2] text-primary px-6 py-2.5 text-center rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-200 ml-6 flex items-center justify-center h-10"
            >
              Contact Us
            </Link>
            {/* <div className="ml-6">
              <ModeToggle /></div> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-white/80 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-md"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed left-0 right-0 bg-primary z-40 md:hidden border-t border-gray-200/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 w-full">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full px-4 py-3 text-white hover:bg-[#4a5d4a] rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full mt-3 bg-[#F3E6C2] text-black px-6 py-3 rounded-full text-center text-sm font-medium hover:bg-[#e6d9b4] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
