"use client";
import { useRouter } from "next/navigation";
import { useState, use as usePromise } from "react";

// Mock service data (in a real app, fetch by id)
const mockServices = [
  { id: 1, title: "Web Development", description: "Custom web applications built with React, Next.js, and Node.js." },
  { id: 2, title: "Mobile Development", description: "Native and cross-platform mobile apps for iOS and Android." },
  { id: 3, title: "UI/UX Design", description: "User-centered design solutions for engaging experiences." },
  { id: 4, title: "Cloud Solutions", description: "Scalable cloud infrastructure and DevOps solutions." },
];

export default function EditServicePage({ params }) {
  const resolvedParams = typeof params.then === 'function' ? usePromise(params) : params;
  const { id } = resolvedParams;
  const router = useRouter();
  const service = mockServices.find((s) => s.id === Number(id));
  const [title, setTitle] = useState(service?.title || "");
  const [description, setDescription] = useState(service?.description || "");
  const [fieldErrors, setFieldErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!title.trim()) errors.title = "Title is required.";
    if (!description.trim()) errors.description = "Description is required.";
    if (title.length > 100) errors.title = "Title must be under 100 characters.";
    if (description.length < 10) errors.description = "Description must be at least 10 characters.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    // Save logic here
    alert("Service updated! (mock)");
    router.push("/admin/services");
  };

  if (!service) {
    return <div className="max-w-xl mx-auto py-20 text-center text-red-500 font-bold">Service not found.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 w-full max-w-xl mx-auto py-8 px-2 sm:px-4 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Service</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-4 sm:p-8 flex flex-col gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={100}
              required
              aria-invalid={!!fieldErrors.title}
              aria-describedby={fieldErrors.title ? 'title-error' : undefined}
            />
            {fieldErrors.title && (
              <div id="title-error" className="flex items-center gap-1 text-red-600 text-xs mt-2 font-medium animate-fade-in">
                <WarningIcon /> {fieldErrors.title}
              </div>
            )}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.description ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              minLength={10}
              required
              aria-invalid={!!fieldErrors.description}
              aria-describedby={fieldErrors.description ? 'description-error' : undefined}
            />
            {fieldErrors.description && (
              <div id="description-error" className="flex items-center gap-1 text-red-600 text-xs mt-2 font-medium animate-fade-in">
                <WarningIcon /> {fieldErrors.description}
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              onClick={() => router.push("/admin/services")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition w-full sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const WarningIcon = () => (
  <svg className="inline w-4 h-4 mr-1 text-red-500 align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
); 