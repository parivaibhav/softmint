import Link from "next/link";

export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow flex items-center justify-between px-6 h-16">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition z-[101]" onClick={onMenuClick}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-xl font-extrabold text-blue-600 tracking-tight flex items-center gap-2 z-[101]">
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="url(#a)"/><defs><linearGradient id="a" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stopColor="#6366F1"/><stop offset="1" stopColor="#A21CAF"/></linearGradient></defs></svg>
          Admin Panel
        </span>
      </div>
      <div className="flex items-center gap-4 z-[101]">
        {/* Notification bell */}
        <button className="relative p-2 rounded-full hover:bg-blue-100 transition z-[101]">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
        </button>
        {/* User avatar dropdown placeholder */}
        <div className="relative group z-[102]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow cursor-pointer">
            A
          </div>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg py-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-[103]">
            <div className="px-4 py-2 text-gray-700 font-semibold">Admin User</div>
            <div className="border-t border-gray-100"></div>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">Profile</button>
            <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
} 