"use client";
import React, { useState, useRef, useEffect } from "react";

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
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center text-3xl z-50 hover:scale-110 transition-transform duration-200 border-4 border-white/40 backdrop-blur-lg"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat support"
        style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18H7a5 5 0 1 1 0-10h10a5 5 0 1 1 0 10Zm-7-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
      </button>

      {/* Chat Widget */}
      {open && (
        <div className="fixed bottom-28 right-6 w-80 max-w-full bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl flex flex-col z-50 animate-fade-in" style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}>
          {/* Header */}
          <div className="p-4 flex justify-between items-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 rounded-t-3xl shadow text-white">
            <div className="flex items-center gap-2">
              <span className="inline-block w-9 h-9 rounded-full bg-white/30 flex items-center justify-center text-2xl">🤖</span>
              <span className="font-bold text-lg">Softmint Support</span>
            </div>
            <button
              className="text-white text-2xl hover:bg-white/20 rounded-full w-9 h-9 flex items-center justify-center transition"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6 6 18M6 6l12 12"/></svg>
            </button>
          </div>
          {/* Messages */}
          <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto" style={{ maxHeight: 340 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`rounded-2xl px-4 py-2 text-sm max-w-[75%] shadow-md ${msg.from === "user" ? "bg-gradient-to-br from-blue-100 to-purple-100 text-blue-900" : "bg-white/80 text-gray-800 border border-blue-100"}`} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  {msg.from === "bot" && <span className="inline-block w-7 h-7 rounded-full bg-blue-200 text-lg flex items-center justify-center mr-2">🤖</span>}
                  <span>{msg.text}</span>
                  {msg.from === "user" && <span className="inline-block w-7 h-7 rounded-full bg-green-200 text-lg flex items-center justify-center ml-2">🧑</span>}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2 text-sm bg-white/80 text-gray-800 border border-blue-100 shadow-md flex items-center gap-2">
                  <span className="inline-block w-7 h-7 rounded-full bg-blue-200 text-lg flex items-center justify-center mr-2">🤖</span>
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
          <form onSubmit={sendMessage} className="flex items-center border-t border-white/30 bg-white/60 px-3 py-3 gap-2 rounded-b-3xl">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm bg-white/80 shadow"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:scale-110 transition-transform duration-200 shadow-lg disabled:opacity-50"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

