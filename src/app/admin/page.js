"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AdminHeader from "./components/AdminHeader";


const stats = [
  { label: "Users", value: 128, icon: "👤", color: "bg-blue-100 text-blue-700" },
  { label: "Blog Posts", value: 12, icon: "📝", color: "bg-purple-100 text-purple-700" },
  { label: "Services", value: 4, icon: "💼", color: "bg-green-100 text-green-700" },
  { label: "Messages", value: 23, icon: "✉️", color: "bg-pink-100 text-pink-700" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdmin = true; // Replace with real auth check

  if (!isAdmin) {
    // Redirect to login or show nothing
    return null;
  }

  if (!isAdminRoute) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
      {/* Mobile Sidebar Drawer */}
      <div className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setSidebarOpen(false)} />
      <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-gray-200 flex flex-col p-6 transform transition-transform duration-300 md:static md:translate-x-0 md:flex md:w-64 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between mb-8 md:hidden">
          <span className="text-2xl font-bold text-blue-600">Admin Panel</span>
          <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setSidebarOpen(false)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 space-y-4">
          <Link href="/admin" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">Dashboard</Link>
          <Link href="/admin/users" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">Users</Link>
          <Link href="/admin/blog" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">Blog Posts</Link>
          <Link href="/admin/services" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">Services</Link>
          <Link href="/admin/settings" className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium">Settings</Link>
        </nav>
      </aside>
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Spacer for mobile sidebar */}
        <div className="h-0 md:h-auto md:w-64" />
        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-12">
          <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Dashboard</h1>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition">New Post</button>
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-100 transition">Settings</button>
            </div>
          </header>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <div key={stat.label} className={`rounded-2xl p-6 flex items-center gap-4 shadow bg-white hover:shadow-lg transition ${stat.color}`}>
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Placeholder for more admin content */}
          <div className="bg-white rounded-2xl shadow p-8 text-gray-500 text-center">
            Welcome to your admin dashboard. Select a section from the sidebar to manage content.
          </div>
        </main>
      </div>
    </div>
  );
} 