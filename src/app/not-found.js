"use client";
import { useState } from "react";
import { Home, AlertTriangle } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white px-4">
      <div className="max-w-md w-full text-center bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 relative overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <span className="inline-block animate-bounce mb-2">
            <AlertTriangle className="w-14 h-14 text-pink-500 " />
          </span>
          <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow-lg select-none">404</h1>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
        <button
          onClick={handleGoHome}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          disabled={loading}
        >
          <Home className="w-6 h-6" />
          {loading ? "Redirecting..." : "Go Home"}
        </button>
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full opacity-30 -z-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-100 rounded-full opacity-30 -z-10 animate-float-reverse"></div>
      </div>
    </div>
  );
} 