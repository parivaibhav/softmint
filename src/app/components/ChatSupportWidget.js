"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bot, User } from "lucide-react";

export default function ChatSupportWidget() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((msgs) => [...msgs, { from: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, something went wrong." }
      ]);
    }
    setInput("");
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl flex items-center justify-center text-2xl sm:text-3xl z-50 hover:scale-110 transition-transform duration-200 border-4 border-white/40 backdrop-blur-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat support"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="sm:w-8 sm:h-8 w-7 h-7"><path fill="currentColor" d="M17 18H7a5 5 0 1 1 0-10h10a5 5 0 1 1 0 10Zm-7-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
      </button>

      {/* Chat Widget */}
      {open && (
        <div className="fixed bottom-0 left-0 right-0 sm:bottom-28 sm:right-6 sm:left-auto w-full sm:w-80 max-w-full bg-white/90 sm:bg-white/70 backdrop-blur-xl border border-white/30 rounded-none sm:rounded-3xl shadow-2xl flex flex-col z-50 animate-fade-in transition-all duration-300" style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
          {/* Header */}
          <div className="p-3 sm:p-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 rounded-none sm:rounded-t-3xl shadow text-white">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/30 flex items-center justify-center">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700" />
              </span>
              <span className="font-bold text-base sm:text-lg">Softmint Support</span>
            </div>
            <button
              className="text-white text-xl sm:text-2xl hover:bg-white/20 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="sm:w-6 sm:h-6 w-5 h-5"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 px-2 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3 overflow-y-auto" style={{ maxHeight: 340 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm max-w-[85vw] sm:max-w-[75%] shadow-md ${msg.from === "user" ? "bg-gradient-to-br from-blue-100 to-purple-100 text-blue-900" : "bg-white/80 text-gray-800 border border-blue-100"}`} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {msg.from === "bot" && <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-200 flex items-center justify-center mr-2"><Bot className="w-4 h-4 text-blue-700" /></span>}
                  <span>{msg.text}</span>
                  {msg.from === "user" && <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-200 flex items-center justify-center ml-2"><User className="w-4 h-4 text-green-700" /></span>}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm bg-white/80 text-gray-800 border border-blue-100 shadow-md flex items-center gap-2">
                  <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-200 flex items-center justify-center mr-2"><Bot className="w-4 h-4 text-blue-700" /></span>
                  <span className="typing-dots">
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                    <span className="dot">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          {/* Input */}
          <form onSubmit={sendMessage} className="flex items-center border-t border-white/30 bg-white/80 px-2 sm:px-3 py-2 sm:py-3 gap-2 sm:gap-3 rounded-none sm:rounded-b-3xl sticky bottom-0">
            <input
              type="text"
              className="flex-1 px-3 sm:px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-xs sm:text-sm bg-white/90 shadow"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-200 shadow-lg disabled:opacity-50"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="sm:w-5 sm:h-5 w-4 h-4"><path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

