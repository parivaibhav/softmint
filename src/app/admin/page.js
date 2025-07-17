"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Layers, Mail, Bell, User, Users, MessageCircle } from "lucide-react";


// Dashboard Widgets
function DashboardWidgets({ blogCount, serviceCount, messageCount, contactCount }) {
  const widgets = [
    {
      label: "Blogs",
      value: blogCount,
      icon: BookOpen,
      color: "from-blue-500 to-purple-500",
    },
    {
      label: "Services",
      value: serviceCount,
      icon: Layers,
      color: "from-green-400 to-blue-500",
    },
    {
      label: "Messages",
      value: messageCount,
      icon: MessageCircle,
      color: "from-pink-500 to-red-500",
    },
    {
      label: "Contacts",
      value: contactCount,
      icon: Users,
      color: "from-yellow-400 to-orange-500",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {widgets.map((w) => {
        const Icon = w.icon;
        return (
          <div key={w.label} className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg bg-gradient-to-br ${w.color} text-white relative overflow-hidden`}> 
            <div className="p-3 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-bold">{w.value}</div>
              <div className="text-sm font-medium opacity-80">{w.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Blog Section (from old blog/page.js)
function BlogTab() {
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
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "?";
  }
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
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Manage Blogs</h2>
        <Link href="/admin/blog/add" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition text-base flex items-center justify-center">
          + Add Blog
        </Link>
      </div>
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-0 overflow-x-auto border border-gray-100">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading blogs...</div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No blogs found.</div>
        ) : (
          <table className="w-full min-w-[700px] text-left">
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
                <tr key={blog._id || blog.id} className="border-t border-gray-100 hover:bg-blue-50/40 transition group">
                  <td className="py-4 px-6 font-medium text-gray-900 text-lg group-hover:text-blue-700 transition-all">{blog.title}</td>
                  <td className="py-4 px-6 text-gray-700 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-base shadow">
                      {getInitials(blog.author || "?")}
                    </span>
                    <span className="font-semibold group-hover:text-blue-700 transition-all">{blog.author}</span>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{blog.date ? new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : "-"}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold shadow-sm ${getTagColor(blog.tag)} group-hover:shadow-md transition-all`}>{blog.tag}</span>
                  </td>
                  <td className="py-4 px-6 text-center flex gap-2 justify-center">
                    <Link href={`/admin/blog/edit/${blog._id || blog.id}`} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition text-sm">Edit</Link>
                    <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:from-pink-600 hover:to-red-600 transition text-sm" onClick={() => handleDelete(blog._id || blog.id)}>Delete</button>
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

// Services Section (from old services/page.js)
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and Node.js.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions for engaging experiences.",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions.",
  },
];
function ServicesTab() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Manage Services</h2>
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition text-base flex items-center justify-center">
          + Add Service
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
        <table className="w-full min-w-[500px] text-left">
          <thead>
            <tr>
              <th className="py-3 px-4 text-gray-700 font-semibold">Title</th>
              <th className="py-3 px-4 text-gray-700 font-semibold">Description</th>
              <th className="py-3 px-4 text-gray-700 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-t border-gray-100 hover:bg-gray-50 transition">
                <td className="py-3 px-4 font-medium text-gray-900">{service.title}</td>
                <td className="py-3 px-4 text-gray-600">{service.description}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-600 hover:underline font-semibold mr-4">Edit</button>
                  <button className="text-red-500 hover:underline font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Contact Section (placeholder)
function ContactTab() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Messages</h2>
      <div className="bg-white rounded-2xl shadow p-6 text-gray-500 text-center">
        No contact messages yet.
      </div>
    </div>
  );
}

// Messages Section (placeholder)
function MessagesTab() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Messages & Notifications</h2>
      <div className="bg-white rounded-2xl shadow p-6 text-gray-500 text-center">
        No messages or notifications yet.
      </div>
    </div>
  );
}

const TABS = [
  { name: "Blog", icon: BookOpen, component: BlogTab },
  { name: "Services", icon: Layers, component: ServicesTab },
  { name: "Contact", icon: Mail, component: ContactTab, badgeKey: "contactCount" },
  { name: "Messages", icon: Bell, component: MessagesTab, badgeKey: "messageCount" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  // Placeholder counts for now
  const [serviceCount] = useState(4);
  const [messageCount] = useState(12); // Example: unread messages
  const [contactCount] = useState(5);  // Example: new contacts

  useEffect(() => {
    // Fetch blog count
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogCount(Array.isArray(data) ? data.length : 0));
  }, []);

  const ActiveComponent = TABS[activeTab].component;
  const badgeMap = { messageCount, contactCount };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* AdminHeader can be added here if needed */}
      <main className="flex-1 p-4 sm:p-8 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center sm:text-left bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">Admin Dashboard</h1>
        <DashboardWidgets
          blogCount={blogCount}
          serviceCount={serviceCount}
          messageCount={messageCount}
          contactCount={contactCount}
        />
        {/* Modern, pill-shaped, responsive tabs with badges and left-aligned */}
        <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-none py-2 px-0">
          {TABS.map((tab, idx) => {
            const Icon = tab.icon;
            const badge = tab.badgeKey ? badgeMap[tab.badgeKey] : null;
            return (
              <button
                key={tab.name}
                className={`relative flex items-center gap-2 px-6 py-2 text-base font-semibold rounded-full focus:outline-none transition-all duration-200 shadow-sm whitespace-nowrap mx-3
                  ${activeTab === idx
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105 ring-2 ring-blue-200"
                    : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"}
                `}
                style={{ minWidth: 120 }}
                onClick={() => setActiveTab(idx)}
              >
                <Icon className="w-5 h-5" />
                {tab.name}
                {badge && badge > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-bold bg-pink-500 text-white shadow animate-fade-in">
                    {badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <div className="w-full animate-fade-in">
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
} 