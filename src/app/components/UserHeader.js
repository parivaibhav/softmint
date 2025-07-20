"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, UserCircle, ChevronDown, LogOut, Settings, Home } from "lucide-react";
import jwt from 'jsonwebtoken';
import { Fragment, useState as useModalState } from "react";

export default function UserHeader() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showLogoutModal, setShowLogoutModal] = useModalState(false);


  useEffect(() => {
    fetch('/api/me')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
      });
      window.location.href = '/signin';
    } catch (err) {
      window.location.href = '/signin';
    }
  };

  // Confirm and logout (now opens modal)
  const confirmAndLogout = () => {
    setShowLogoutModal(true);
  };
  const cancelLogout = () => setShowLogoutModal(false);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    handleLogout();
  };

  if (loading) return null;
  if (!user) return null;

  return (
    <>
      {/* Main User Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-white/100 backdrop-blur-sm"
        } ${isMenuOpen ? "bg-white" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/user" className="flex items-center space-x-2 sm:space-x-3 group">
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
                  href="/user"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/user/about"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/user/services"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/user/contact"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/user/blog"
                  className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group"
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
               
  
              </div>
            </div>

            {/* User Dropdown */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center space-x-2 focus:outline-none group"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <UserCircle className="w-10 h-10 text-blue-600 bg-blue-100 rounded-full p-1" />
                  <span className="font-medium text-gray-800 hidden sm:block">
                    {user.firstName}
                    {user.username && (
                      <span className="ml-2 text-xs text-blue-500">@{user.username}</span>
                    )}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100 animate-fade-in">
                    <Link
                      href="/user/account"
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <Settings className="w-5 h-5 mr-2 text-blue-600" />
                      Account
                    </Link>
                    <button
                      className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => {
                        setDropdownOpen(false);
                        confirmAndLogout();
                      }}
                    >
                      <LogOut className="w-5 h-5 mr-2 text-red-500" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
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
            <div className="py-4 space-y-2 bg-white shadow-2xl">
              <Link
                href="/user"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/user/about"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/user/services"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/user/contact"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/user/blog"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/user/account"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                onClick={closeMenu}
              >
                Account
              </Link>
              {/* Mobile User Dropdown (as links) */}
              <div className="px-4 pt-4 space-y-3">
                <Link href="/user/account" onClick={closeMenu}>
                  <button className="w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 hover:bg-gray-50 rounded-xl">
                    Account
                  </button>
                </Link>
                <button
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 rounded-xl font-medium transition-all duration-200 mx-2"
                  onClick={() => {
                    closeMenu();
                    confirmAndLogout();
                  }}
                >
                  <span className="flex items-center"><LogOut className="w-5 h-5 mr-2 text-red-500" /> Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center animate-fade-in">
            <div className="mb-4">
              <LogOut className="w-12 h-12 mx-auto text-red-500 mb-2" />
              <h2 className="text-xl font-bold mb-2 text-gray-900">Log out?</h2>
              <p className="text-gray-600">Are you sure you want to log out?</p>
            </div>
            <div className="flex gap-4 mt-6 justify-center">
              <button
                className="px-5 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
                onClick={cancelLogout}
                autoFocus
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition"
                onClick={confirmLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
} 