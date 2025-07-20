"use client";
import { useState } from "react";

export default function NotFound() {
  const [loading, setLoading] = useState(false);

  const handleGoHome = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/me');
      if (res.ok) {
        const user = await res.json();
        if (user.userType === 'admin') {
          window.location.href = '/admin';
        } else if (user.userType === 'user') {
          window.location.href = '/user';
        } else {
          window.location.href = '/';
        }
      } else {
        window.location.href = '/';
      }
    } catch {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-white text-center">
      {/* 404 Number with Animation */}
      <div className="mb-8">
        <div className="relative inline-block">
          <h1 className="text-9xl md:text-[12rem] font-black text-gray-900 animate-pulse select-none">
            404
          </h1>
          <div className="absolute inset-0 text-gray-300 animate-pulse opacity-50 blur-sm">
            404
          </div>
        </div>
      </div>
      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
        The page you're looking for seems to have wandered off into the digital void. Don't worry, we'll help you find your way back!
      </p>
      <button
        onClick={handleGoHome}
        disabled={loading}
        className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        {loading ? "Redirecting..." : "Go Home"}
      </button>
    </div>
  );
} 