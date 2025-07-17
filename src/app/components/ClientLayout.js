"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  // Hide Navbar on /admin, /admin/*, /user, /user/*
  const hideNavbar = pathname.startsWith("/admin") || pathname.startsWith("/user");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
} 