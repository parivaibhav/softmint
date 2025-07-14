"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function getTagColor(tag) {
  switch (tag) {
    case "Announcement":
      return "bg-blue-100 text-blue-700";
    case "Tech":
      return "bg-purple-100 text-purple-700";
    case "Design":
      return "bg-pink-100 text-pink-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b._id !== id && b.id !== id));
      } else {
        alert("Failed to delete blog.");
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Manage Blogs</h1>
        <Link href="/admin/blog/add" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition text-lg flex items-center justify-center">
          + Add Blog
        </Link>
      </div>
      <div className="bg-white rounded-3xl shadow-xl p-0 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading blogs...</div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No blogs found.</div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
              <tr>
                <th className="py-4 px-6 text-gray-700 font-semibold">Title</th>
                <th className="py-4 px-6 text-gray-700 font-semibold">Author</th>
                <th className="py-4 px-6 text-gray-700 font-semibold">Date</th>
                <th className="py-4 px-6 text-gray-700 font-semibold">Tag</th>
                <th className="py-4 px-6 text-gray-700 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id || blog.id} className="border-t border-gray-100 hover:bg-blue-50/40 transition">
                  <td className="py-4 px-6 font-medium text-gray-900 text-lg">{blog.title}</td>
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base shadow">
                      {getInitials(blog.author || "?")}
                    </span>
                    <span>{blog.author}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{blog.date ? new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : "-"}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTagColor(blog.tag)}`}>{blog.tag}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link href={`/admin/blog/edit/${blog._id || blog.id}`} className="text-blue-600 hover:underline font-semibold mr-4">Edit</Link>
                    <button className="text-red-500 hover:underline font-semibold" onClick={() => handleDelete(blog._id || blog.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
} 