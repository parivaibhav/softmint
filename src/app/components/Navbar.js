"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
  

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50"
            : "bg-white/100 backdrop-blur-sm border-b border-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30"
        } ${isMenuOpen ? "bg-white" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-sm sm:text-lg md:text-xl animate-logo-bounce">
                    S
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    SoftMint
                  </span>
                  <span className="text-xs text-gray-500 -mt-1 hidden sm:block animate-pulse" style={{animationDelay: '1s'}}>
                    Innovation Hub
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                <Link
                  href="/"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/about"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/services"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/contact"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/signin">
                <button className="px-4 py-2.5 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 hover:bg-gray-50 rounded-xl">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              isMenuOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-gray-200/50 bg-white/95 backdrop-blur-md rounded-b-3xl shadow-2xl">
              <Link
                href="/"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                About
              </Link>

              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-3 border-t border-gray-200/50">
                <Link href="/signin" onClick={closeMenu}>
                  <button className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:bg-gray-50 rounded-xl">
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" onClick={closeMenu}>
                  <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 border-t border-gray-200/50">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>hello@nextapp.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}
