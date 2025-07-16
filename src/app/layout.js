
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // Server components cannot use usePathname or any client hooks
  // If you want to conditionally render Navbar/Footer, do it in a client component or use pathname from props (if available)
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
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
