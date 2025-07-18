"use client"
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, use as useHook } from "react";

const jobs = [
  {
    slug: "frontend-developer",
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
  },
  {
    slug: "backend-developer",
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

export default function JobDetailPage({ params }) {
  const unwrappedParams = useHook(params);
  const { slug } = unwrappedParams;
  const job = jobs.find((j) => j.slug === slug);

  const [form, setForm] = useState({ name: "", email: "", cover: "" });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!job) return notFound();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (!resume) {
      errs.resume = "Resume is required.";
    } else if (!/\.(pdf|doc|docx)$/i.test(resume.name)) {
      errs.resume = "Only PDF, DOC, or DOCX files are allowed.";
    }
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      // Here you would send the form data and resume to your backend or email service
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-12">
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
          <p className="text-gray-600 mb-4">{job.location}</p>
          <h4 className="text-lg font-semibold text-gray-800 mb-1">Job Description</h4>
          <p className="text-gray-700 mb-2">{job.description}</p>
          <h5 className="font-semibold text-gray-800 mb-1">Requirements</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-xl shadow-lg p-8">
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
            <div>
              <label className="block text-gray-700 font-medium mb-1">Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {resume && (
                <p className="text-gray-600 text-sm mt-1">Selected file: {resume.name}</p>
              )}
              {errors.resume && submitted && (
                <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
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
        </section>
      </main>
  
    </div>
  );
} 