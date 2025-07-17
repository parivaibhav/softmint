"use client";

import UserContactForm from "../user/contact/UserContactForm";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <UserContactForm />
    </div>
  );
}
