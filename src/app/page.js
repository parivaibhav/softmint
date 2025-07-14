"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap, Smartphone, Palette, ArrowRight, Star, Users, Clock, MessageCircle, Send } from "lucide-react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb, 
  SiVercel,
  SiGit,
  SiGithub
} from "react-icons/si";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  // Chat support state
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "support", text: "Hi! How can we help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setInput("");
    // Simulate support reply
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "support", text: "Thank you for your message! We'll get back to you soon." }]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-sm font-medium text-gray-700 mb-8 shadow-lg">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              Trusted by 500+ companies worldwide
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-gradient">
                SoftMint
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We craft exceptional digital experiences that transform businesses. 
              From cutting-edge web applications to innovative mobile solutions, 
              we bring your vision to life with modern technologies and creative design.
            </p>

         

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose SoftMint?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for the Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine technical excellence with creative innovation to
              deliver solutions that exceed expectations and drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Lightning Fast
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Optimized for speed with Next.js and modern build tools for
                exceptional performance that keeps your users engaged.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Responsive Design
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Perfect on all devices with Tailwind CSS responsive utilities
                and mobile-first approach for seamless user experiences.
              </p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-200/50">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Modern Stack
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Built with the latest technologies and best practices for
                scalable, maintainable solutions that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable,
              and modern applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Frontend Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiReact className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  React
                </h3>
                <p className="text-sm text-gray-600">Frontend Framework</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiNextdotjs className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Next.js
                </h3>
                <p className="text-sm text-gray-600">Full-Stack Framework</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiTailwindcss className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Tailwind
                </h3>
                <p className="text-sm text-gray-600">CSS Framework</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiJavascript className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  JavaScript
                </h3>
                <p className="text-sm text-gray-600">Programming Language</p>
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiNodedotjs className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Node.js
                </h3>
                <p className="text-sm text-gray-600">Runtime Environment</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiMongodb className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  MongoDB
                </h3>
                <p className="text-sm text-gray-600">Database</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiGithub className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  GitHub
                </h3>
                <p className="text-sm text-gray-600">Version Control</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SiVercel className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vercel
                </h3>
                <p className="text-sm text-gray-600">Deployment</p>
              </div>
            </div>
          </div>

          {/* Technology Categories */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Frontend</h3>
              <p className="text-blue-700 mb-4">
                Modern React with Next.js and Tailwind CSS for beautiful,
                responsive interfaces.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                  Tailwind
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-green-900 mb-4">Backend</h3>
              <p className="text-green-700 mb-4">
                Robust server-side solutions with Node.js and MongoDB for
                scalable applications.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                  API
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-purple-900 mb-4">DevOps</h3>
              <p className="text-purple-700 mb-4">
                Seamless deployment and hosting with modern cloud platforms and
                tools.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
                  Vercel
                </span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
                  Git
                </span>
                <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm">
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Support Widget */}
      <div>
        {/* Floating Chat Button */}
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
          onClick={() => setChatOpen((open) => !open)}
          aria-label="Open chat support"
        >
          <MessageCircle className="w-7 h-7" />
        </button>

        {/* Chat Window */}
        {chatOpen && (
          <div className="fixed bottom-24 right-6 z-50 w-80 max-w-xs bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Chat Support</span>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-200 text-xl font-bold focus:outline-none">×</button>
            </div>
            {/* Messages */}
            <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto bg-white" style={{ maxHeight: 320 }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl px-4 py-2 text-sm max-w-[75%] ${msg.from === "user" ? "bg-blue-100 text-blue-900" : "bg-gray-100 text-gray-800"}`}>{msg.text}</div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <form onSubmit={handleSend} className="flex items-center border-t border-gray-100 bg-white px-2 py-2">
              <input
                type="text"
                className="text-black flex-1 px-3 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm bg-gray-50"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit" className="ml-2 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
