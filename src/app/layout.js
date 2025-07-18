"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Loader from "./components/Loader";
import ChatSupportWidget from "./components/ChatSupportWidget";
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded token:', decoded, 'Pathname:', pathname);
        if (decoded && decoded.userType === 'admin' && !pathname.startsWith('/admin')) {
          router.replace('/admin');
        } else if (decoded && decoded.userType === 'user' && !pathname.startsWith('/user')) {
          router.replace('/user');
        }
      } catch (e) {
        console.log('JWT decode error:', e);
      }
    }
  }, [pathname, router]);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events?.on("routeChangeStart", handleStart);
    router.events?.on("routeChangeComplete", handleComplete);
    router.events?.on("routeChangeError", handleComplete);

    return () => {
      router.events?.off("routeChangeStart", handleStart);
      router.events?.off("routeChangeComplete", handleComplete);
      router.events?.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <html lang="en">
      <head>
        <title>Softmint - Modern IT Solutions & Web Development</title>
        <meta name="description" content="Softmint offers modern web development, mobile apps, UI/UX design, cloud solutions, and IT consulting. Build your digital future with Softmint." />
        <meta name="keywords" content="Softmint, web development, mobile app, UI/UX design, cloud solutions, IT consulting, software, technology, digital agency" />
        <meta name="author" content="Softmint" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta property="og:title" content="Softmint - Modern IT Solutions & Web Development" />
        <meta property="og:description" content="Softmint offers modern web development, mobile apps, UI/UX design, cloud solutions, and IT consulting. Build your digital future with Softmint." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Softmint" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Softmint - Modern IT Solutions & Web Development" />
        <meta name="twitter:description" content="Softmint offers modern web development, mobile apps, UI/UX design, cloud solutions, and IT consulting. Build your digital future with Softmint." />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body className={geistSans.className} style={{ background: '#fff', color: '#171717' }}>
        {loading && <Loader />}
        <main>
          {children}
        </main>
        {/* Show Footer on all pages except /admin */}
        {!(pathname && pathname.startsWith("/admin")) && <Footer />}
        {/* Show ChatSupportWidget on all pages except /admin */}
        {!(pathname && pathname.startsWith("/admin")) && <ChatSupportWidget />}
      </body>
    </html>
  );
}
