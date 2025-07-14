"use client";
import { FaCookieBite, FaRegClock, FaUserSecret, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
        <div className="flex items-center mb-8 gap-3">
          <div className="bg-yellow-500 text-white rounded-full p-3 shadow-lg">
            <FaCookieBite size={32} />
          </div>
          <h1 className="text-3xl font-bold">Cookie Policy</h1>
        </div>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaRegFileAlt /> What Are Cookies?</h2>
          <p>Cookies are small text files stored on your device by your browser when you visit websites. They help us improve your experience and analyze site usage.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaCookieBite /> How We Use Cookies</h2>
          <ul className="list-disc ml-8">
            <li>To remember your preferences and settings</li>
            <li>To analyze website traffic and usage</li>
            <li>To provide personalized content and ads</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaUserSecret /> Managing Cookies</h2>
          <p>You can control or delete cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaRegClock /> Cookie Duration</h2>
          <p>Some cookies are session-based and expire when you close your browser, while others remain on your device until deleted or they reach their expiration date.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><MdOutlineUpdate /> Changes to This Policy</h2>
          <p>We may update this Cookie Policy from time to time. Please review this page periodically for any changes.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaUserSecret /> Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us through our website.</p>
        </section>
      </main>
    </div>
  );
} 