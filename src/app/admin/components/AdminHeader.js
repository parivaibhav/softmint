import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminHeader() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return null;
  if (!user) return null;

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow flex items-center justify-between px-8 h-16 py-10">
      {/* Logo (same as Navbar) */}
      <div className="flex-shrink-0">
        <Link href="/admin" className="flex items-center space-x-2 sm:space-x-3 group">
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
              Admin Panel
            </span>
          </div>
        </Link>
      </div>
      <nav className="flex-1 flex justify-center">
        <div className="hidden md:flex gap-2 lg:gap-4">
          <Link href="/admin" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group">
            Dashboard
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/admin/users" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group">
            Users
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/admin/blog" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group">
            Blog Posts
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/admin/services" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/admin/settings" className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 group">
            Settings
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <button className="relative p-2 rounded-full hover:bg-blue-100 transition z-[101]">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
        </button>
        {/* User avatar dropdown placeholder */}
        <div className="relative group z-[102]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow cursor-pointer">
            {user.firstName ? user.firstName[0] : 'A'}
          </div>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-[103]">
            <div className="px-4 py-2 text-gray-700 font-semibold">{user.firstName || 'Admin'} {user.lastName || ''}</div>
            <div className="border-t border-gray-100"></div>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">Profile</button>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
} 