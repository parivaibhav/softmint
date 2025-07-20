import React, { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";
import { io } from "socket.io-client";

const mockOther = {
  id: "softmint-team",
  name: "Softmint Team",
  avatar: "https://ui-avatars.com/api/?name=Softmint+Team&background=a21caf&color=fff",
  online: true,
};

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

let socket;

export default function ChatUI() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [adminTyping, setAdminTyping] = useState(false);
  const messagesEndRef = useRef(null);
  let typingTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Fetch real user info
    fetch("/api/me", { credentials: "include" })
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data) setUser({
          id: data._id || data.email || "user1",
          name: data.firstName ? `${data.firstName} ${data.lastName || ""}`.trim() : (data.username || "You"),
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.firstName || data.username || "You")}&background=2563eb&color=fff`,
          online: true,
        });
        else setUser({ id: "user1", name: "You", avatar: "https://ui-avatars.com/api/?name=You&background=2563eb&color=fff", online: true });
      })
      .catch(() => setUser({ id: "user1", name: "You", avatar: "https://ui-avatars.com/api/?name=You&background=2563eb&color=fff", online: true }));
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !user) return;
    socket = io("http://localhost:3001", {
      path: "/api/socket",
      autoConnect: false,
    });
    socket.connect();
    socket.emit("join", { userId: user.id, isAdmin: false });

    socket.on("chatHistory", (history) => {
      setMessages(
        history.map((msg, idx) => ({
          id: idx + 1,
          sender: msg.from === user.id ? user : mockOther,
          text: msg.text,
          timestamp: new Date(msg.timestamp),
        }))
      );
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: mockOther,
          text: msg.text,
          timestamp: new Date(msg.timestamp),
        },
      ]);
    });

    socket.on("typing", ({ isTyping }) => {
      setAdminTyping(isTyping);
      if (isTyping) {
        if (typingTimeout.current) clearTimeout(typingTimeout.current);
        typingTimeout.current = setTimeout(() => setAdminTyping(false), 3000);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [mounted, user]);

  useEffect(() => {
    if (mounted) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, mounted]);

  const handleSend = () => {
    if (!input.trim() || !user) return;
    setSending(true);
    const msg = {
      text: input,
      from: user.id,
      fromName: user.name,
      fromAvatar: user.avatar,
      to: "admin",
      timestamp: new Date().toISOString(),
    };
    socket.emit("message", msg);
    setMessages((msgs) => [
      ...msgs,
      {
        id: msgs.length + 1,
        sender: user,
        text: input,
        timestamp: new Date(),
      },
    ]);
    setInput("");
    setSending(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!user) return;
    socket.emit("typing", { from: user.id, fromName: user.name, fromAvatar: user.avatar, to: "admin", isTyping: true });
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => {
      socket.emit("typing", { from: user.id, fromName: user.name, fromAvatar: user.avatar, to: "admin", isTyping: false });
    }, 1500);
  };

  if (!mounted || !user) return null;

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 rounded-3xl flex flex-col h-[600px] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-white/80 rounded-t-3xl">
        <img src={mockOther.avatar} alt="avatar" className="w-11 h-11 rounded-full border-2 border-white" />
        <div className="flex-1 flex items-center gap-2">
          <div className="font-semibold text-gray-900 text-base">{mockOther.name}</div>

        </div>
        <div className="text-xs flex items-center gap-2 mt-1">
          <span className={`inline-block w-2 h-2 rounded-full ${mockOther.online ? "bg-green-400" : "bg-gray-400"}`}></span>
          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[11px] font-medium border border-gray-200">
            {mockOther.online ? "Online" : "Offline"}
          </span>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.sender.id === user.id ? "justify-end" : "justify-start"}`}
          >
            {msg.sender.id !== user.id && (
              <img src={msg.sender.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            )}
            <div className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm relative ${msg.sender.id === user.id
                ? "bg-blue-100 text-blue-900 rounded-br-md"
                : "bg-white text-gray-900 border border-gray-200 rounded-bl-md"}`}
            >
              <div>{msg.text}</div>
              <div className="text-[11px] text-right text-gray-400 mt-1 font-mono tracking-wide">
                {formatTime(msg.timestamp)}
              </div>
            </div>
            {msg.sender.id === user.id && (
              <img src={msg.sender.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
            )}
          </div>
        ))}
        {adminTyping && (
          <div className="flex items-center gap-2 text-xs text-gray-500 animate-pulse">
            <img src={mockOther.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
            Softmint Team is typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="relative p-4 bg-white border-t border-gray-100 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900 placeholder-gray-400"
          placeholder="Type a message..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={sending}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center"
          disabled={sending || !input.trim()}
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 