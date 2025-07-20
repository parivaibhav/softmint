"use client";
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center">
        {/* Modern Gradient Spinner */}
        <svg
          className="animate-spin w-16 h-16"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="25"
            cy="25"
            r="20"
            stroke="url(#spinnerGradient)"
            strokeWidth="6"
            fill="none"
          />
          <circle
            className="opacity-80"
            cx="25"
            cy="25"
            r="20"
            stroke="url(#spinnerGradient)"
            strokeWidth="6"
            strokeDasharray="31.4 188.4"
            strokeLinecap="round"
            fill="none"
          />
          <defs>
            <linearGradient id="spinnerGradient" x1="0" y1="0" x2="50" y2="50">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#a21caf" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
} 