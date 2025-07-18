"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote | Full-time",
    emailSubject: "Application%20for%20Frontend%20Developer",
    description:
      "Work on modern web applications using React, Next.js, and Tailwind CSS. Collaborate with designers and backend engineers to deliver seamless user experiences.",
    requirements: [
      "2+ years experience with React.js",
      "Familiarity with Next.js and SSR",
      "Strong CSS/HTML skills (Tailwind a plus)",
      "Experience with REST APIs",
      "Good communication skills",
    ],
    slug: "frontend-developer",
  },
  {
    title: "Backend Developer",
    location: "Remote | Full-time",
    emailSubject: "Application%20for%20Backend%20Developer",
    description:
      "Build and maintain scalable backend services using Node.js and MongoDB. Work closely with frontend and DevOps teams to ensure robust and secure APIs.",
    requirements: [
      "2+ years experience with Node.js",
      "Experience with MongoDB or similar NoSQL DBs",
      "Familiarity with RESTful API design",
      "Understanding of authentication and security best practices",
      "Ability to write clean, maintainable code",
    ],
    slug: "backend-developer",
  },
  // Add more jobs here as needed
];

function validateForm({ name, email, cover }) {
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!email.trim()) errors.email = "Email is required.";
  else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = "Invalid email format.";
  if (!cover.trim()) errors.cover = "Cover letter is required.";
  return errors;
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", cover: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setForm({ name: "", email: "", cover: "" });
    setErrors({});
    setSubmitted(false);
    setSuccess(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      // Here you would send the form data to your backend or email service
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Join Our Team</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            We’re always looking for talented, passionate people to help us build the future.
          </p>
          <Link href="#open-positions" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            View Open Positions
          </Link>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Open Positions</h2>
          <div className="space-y-6">
            {jobs.length === 0 ? (
              <div className="text-gray-500 text-center">No open positions at the moment. Please check back later!</div>
            ) : (
              jobs.map((job, idx) => (
                <div
                  key={job.title + idx}
                  className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition border border-transparent"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <Link href={`/career/${job.slug}`} className="text-xl font-bold text-blue-700 hover:underline">
                        {job.title}
                      </Link>
                      <p className="text-gray-600 mt-1">{job.location}</p>
                    </div>
                    <Link href={`/career/${job.slug}`} className="mt-4 md:mt-0 px-5 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition text-center">
                      View Details & Apply
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Job Details & Application Form */}
        {selectedJob && (
          <section className="mb-16 animate-fade-in">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedJob.location}</p>
                </div>
                <button
                  className="text-sm text-blue-600 hover:underline mt-2 md:mt-0"
                  onClick={() => setSelectedJob(null)}
                >
                  Back to all jobs
                </button>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Job Description</h4>
                <p className="text-gray-700 mb-2">{selectedJob.description}</p>
                <h5 className="font-semibold text-gray-800 mb-1">Requirements</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Apply for this position</h4>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name && submitted ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && submitted && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email && submitted ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && submitted && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Cover Letter</label>
                  <textarea
                    name="cover"
                    value={form.cover}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.cover && submitted ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.cover && submitted && (
                    <p className="text-red-500 text-sm mt-1">{errors.cover}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
                {success && (
                  <p className="text-green-600 text-center mt-2">Application submitted! Thank you for applying.</p>
                )}
              </form>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Don’t see a role that fits?</h2>
          <p className="text-gray-600 mb-6">
            We’re always interested in meeting talented people. Send your resume and a note to <a href="mailto:careers@softmint.com" className="text-blue-600 underline">careers@softmint.com</a>.
          </p>
        </section>
      </main>
   
    </div>
  );
} 