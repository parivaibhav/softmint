"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { User } from "lucide-react";

export default function AdminHeader() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch('/api/me')
      .then(res => {
        if (res.status === 200) return res.json();
        throw new Error('Not authenticated');
      })
      .then(data => {
        if (data.userType === 'admin') {
          setUser(data);
        } else {
          setUser(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
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

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    window.location.href = '/signin';
  };

  if (loading) return null;
  if (!user) return null;

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/60 backdrop-blur-lg border-b border-gray-200 shadow flex items-center justify-between px-4 sm:px-8 h-16 py-4">
      {/* Logo (same as Navbar) */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-extrabold shadow-lg">
          <User className="w-6 h-6" />
        </div>
        <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">Admin Panel</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative p-2 rounded-full hover:bg-blue-100 transition z-[101]">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
        </button>
        {/* User avatar dropdown */}
        <div className="relative z-[102]" ref={dropdownRef}>
          <button
            className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow cursor-pointer focus:outline-none border-2 border-white"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            tabIndex={0}
          >
            {user.firstName ? user.firstName[0] : 'A'}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl py-2 z-[103] animate-fade-in min-w-[180px] border border-gray-100">
              <Link href="/admin" className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 font-semibold rounded-t-xl">
                Dashboard
              </Link>
              <div className="px-4 py-2 text-gray-700 font-semibold border-t border-gray-100 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-500" />
                {user.firstName || 'Admin'} {user.lastName || ''}
              </div>
              <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50">Profile</button>
              <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-blue-50 rounded-b-xl" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
