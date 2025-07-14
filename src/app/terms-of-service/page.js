"use client";
import { FaGavel, FaUserShield, FaHandshake, FaRegClock, FaRegFileAlt } from "react-icons/fa";
import { MdSecurity, MdOutlineUpdate } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
        <div className="flex items-center mb-8 gap-3">
          <div className="bg-blue-600 text-white rounded-full p-3 shadow-lg">
            <FaGavel size={32} />
          </div>
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaRegFileAlt /> Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our services.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaUserShield /> User Responsibilities</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account and password.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><MdSecurity /> Prohibited Activities</h2>
          <ul className="list-disc ml-8">
            <li>Attempting to gain unauthorized access to our systems</li>
            <li>Disrupting or interfering with the security or operation of our services</li>
            <li>Using our services for any illegal or harmful purpose</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaHandshake /> Intellectual Property</h2>
          <p>All content, trademarks, and data on this site are the property of the company or its licensors. You may not use, reproduce, or distribute any content without permission.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><FaRegClock /> Termination</h2>
          <p>We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users or us.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><MdOutlineUpdate /> Changes to Terms</h2>
          <p>We may update these Terms of Service from time to time. Continued use of our services after changes means you accept the new terms.</p>
        </section>
        <section className="mb-8">
          <h2 className="flex items-center text-xl font-semibold mb-2 gap-2"><BsFillPersonFill /> Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us through our website.</p>
        </section>
      </main>
    </div>
  );
} 