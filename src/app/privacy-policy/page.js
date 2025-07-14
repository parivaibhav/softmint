"use client";

import { FaUserShield, FaDatabase, FaCloud, FaGlobe, FaCookieBite, FaUserCheck, FaSyncAlt, FaEnvelopeOpenText } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-3xl w-full bg-white/90 rounded-2xl shadow-2xl p-8 backdrop-blur-md border border-gray-200">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">Privacy Policy</h1>
          <p className="mb-6 text-center text-gray-600 text-lg">Effective Date: June 2024</p>
          <section className="mb-8 flex gap-3 items-start">
            <FaUserShield className="text-blue-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">1. Introduction</h2>
              <p className="text-gray-700">
                This Privacy Policy describes how our IT company collects, uses, and protects your personal information when you use our website, products, and services. We are committed to safeguarding your privacy and ensuring transparency in our data practices.
              </p>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaDatabase className="text-purple-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">2. Information We Collect</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li><b>Personal Data:</b> Name, email, phone, company, and other identifiers you provide.</li>
                <li><b>Technical Data:</b> IP address, browser type, device information, and usage data.</li>
                <li><b>Cookies & Tracking:</b> We use cookies and similar technologies for analytics and personalization.</li>
              </ul>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaCloud className="text-pink-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>To provide, maintain, and improve our IT services and solutions.</li>
                <li>To communicate with you regarding updates, support, and marketing (with your consent).</li>
                <li>To ensure security, prevent fraud, and comply with legal obligations.</li>
              </ul>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaGlobe className="text-green-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">4. International Data Transfers</h2>
              <p className="text-gray-700">
                Your information may be processed and stored in countries outside your own. We ensure appropriate safeguards are in place for international data transfers, in compliance with applicable laws (e.g., GDPR).
              </p>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaCookieBite className="text-yellow-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">5. Cookies & Analytics</h2>
              <p className="text-gray-700">
                We use cookies and analytics tools to understand how you interact with our site and to enhance your experience. You can manage your cookie preferences in your browser settings.
              </p>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaUserCheck className="text-indigo-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">6. Your Rights</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Access, correct, or delete your personal data.</li>
                <li>Object to or restrict processing of your data.</li>
                <li>Data portability (where applicable).</li>
                <li>Withdraw consent at any time.</li>
                <li>For EU/EEA users: Rights under GDPR. For California users: Rights under CCPA.</li>
              </ul>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaSyncAlt className="text-cyan-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">7. Third-Party Services</h2>
              <p className="text-gray-700">
                We may use third-party providers (e.g., cloud hosting, analytics, payment processors) who may access your data only as necessary to perform their services and are contractually obligated to protect your information.
              </p>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaSyncAlt className="text-cyan-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">8. Data Retention</h2>
              <p className="text-gray-700">
                We retain your personal data only as long as necessary for the purposes outlined in this policy, or as required by law.
              </p>
            </div>
          </section>
          <section className="mb-8 flex gap-3 items-start">
            <FaSyncAlt className="text-cyan-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">9. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this page.
              </p>
            </div>
          </section>
          <section className="flex gap-3 items-start">
            <FaEnvelopeOpenText className="text-pink-500 text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1 text-gray-800">10. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or requests regarding this Privacy Policy or your data, please contact us via our website's contact form.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 