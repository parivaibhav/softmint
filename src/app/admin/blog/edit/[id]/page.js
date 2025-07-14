"use client";
import { useRouter } from "next/navigation";
import { useState, use } from "react";

// Mock blog data (replace with real fetch in production)
const mockBlogs = [
  {
    id: 1,
    title: "Welcome to Our Blog!",
    author: "SoftMint Team",
    date: "2024-06-01",
    tag: "Announcement",
    content: "Welcome to the SoftMint blog! Here, we'll share updates, tips, and stories about our journey building innovative web solutions. Stay tuned for more!",
  },
  {
    id: 2,
    title: "How We Build Modern Web Apps",
    author: "Vaibhav Goswami",
    date: "2024-06-02",
    tag: "Tech",
    content: "At SoftMint, we use the latest technologies to build scalable and maintainable web applications. In this post, we take you behind the scenes of our development process.",
  },
  {
    id: 3,
    title: "UI/UX Best Practices in 2024",
    author: "SoftMint Team",
    date: "2024-06-03",
    tag: "Design",
    content: "User experience is at the heart of everything we do. Here are our top UI/UX recommendations for 2024 to help you create delightful digital products.",
  },
];

export default function EditBlogPage({ params }) {
  // Unwrap params if it's a Promise (future-proof for Next.js)
  const resolvedParams = typeof params.then === 'function' ? use(params) : params;
  const { id } = resolvedParams;

  const router = useRouter();
  const blog = mockBlogs.find((b) => b.id === Number(id));
  const [title, setTitle] = useState(blog?.title || "");
  const [author, setAuthor] = useState(blog?.author || "");
  const [date, setDate] = useState(blog?.date || "");
  const [tag, setTag] = useState(blog?.tag || "");
  const [content, setContent] = useState(blog?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save logic here
    alert("Blog updated! (mock)");
    router.push("/admin/blog");
  };

  if (!blog) {
    return <div className="max-w-xl mx-auto py-20 text-center text-red-500 font-bold">Blog not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Blog</h1>
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
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">Author</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-semibold mb-2">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Tag</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Content</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            required
          />
        </div>
        <div className="flex gap-4 justify-end">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            onClick={() => router.push("/admin/blog")}
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