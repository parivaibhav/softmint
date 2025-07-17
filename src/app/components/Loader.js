"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Spinner */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 animate-spin-slow shadow-2xl border-8 border-white/40 flex items-center justify-center z-20">
          {/* Glow */}
          <div className="absolute w-28 h-28 rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-300/20 blur-2xl z-0" />
          {/* Logo or Emoji */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl select-none z-30">
            <img src="/logo.png" alt="Softmint Logo" className="w-10 h-10 rounded-full shadow-lg" />
          </span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 1.2s linear infinite;
        }
      `}</style>
    </div>
  );
} 