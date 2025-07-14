"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Mock service data (in a real app, fetch by id)
const mockServices = [
  { id: 1, title: "Web Development", description: "Custom web applications built with React, Next.js, and Node.js." },
  { id: 2, title: "Mobile Development", description: "Native and cross-platform mobile apps for iOS and Android." },
  { id: 3, title: "UI/UX Design", description: "User-centered design solutions for engaging experiences." },
  { id: 4, title: "Cloud Solutions", description: "Scalable cloud infrastructure and DevOps solutions." },
];

export default function EditServicePage({ params }) {
  const router = useRouter();
  const { id } = params;
  const service = mockServices.find((s) => s.id === Number(id));
  const [title, setTitle] = useState(service?.title || "");
  const [description, setDescription] = useState(service?.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert("Service updated! (mock)");
    router.push("/admin/services");
  };

  if (!service) {
    return <div className="max-w-xl mx-auto py-20 text-center text-red-500 font-bold">Service not found.</div>;
  }

  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Service</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8 flex flex-col gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            onClick={() => router.push("/admin/services")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
} 