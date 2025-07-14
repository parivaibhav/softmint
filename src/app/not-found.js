"use client";

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 text-lg">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
            
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Our Services
              </Link>
              <Link href="/about" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 -z-10"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-100 rounded-full opacity-50 -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-30 -z-10"></div>
        </div>
      </main>
    </div>
  );
} 