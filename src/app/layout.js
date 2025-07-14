"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <title>SoftMint</title>
        <meta
          name="description"
          content="SoftMint is a modern, responsive web application built with Next.js and Tailwind CSS. Experience the perfect blend of performance and beautiful design."
        />
        <meta
          name="keywords"
          content="SoftMint, Next.js, Tailwind CSS, web application, modern, responsive"
        />
        <meta name="author" content="Pari vaibhav" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
        style={{ background: '#fff', color: '#171717' }}
      >
        {!isAdminRoute && <Navbar />}
        <main>
          {children}
        </main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
