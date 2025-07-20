"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Layers, 
  Mail, 
  Bell, 
  User, 
  Users, 
  MessageCircle, 
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Tag,
  Loader2,
  Send,
  MoreVertical,
  Phone,
  Video,
  Search,
  Menu,
  X,
  ArrowLeft
} from "lucide-react";

// Loading Skeleton Components
function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex space-x-4 sm:space-x-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-16 sm:w-20"></div>
          ))}
        </div>
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className="border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex space-x-4 sm:space-x-8">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="h-4 bg-gray-100 rounded w-20 sm:w-24"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function WidgetSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 animate-pulse">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-20 sm:w-24"></div>
              <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16"></div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="mt-4">
            <div className="h-4 bg-gray-200 rounded w-28 sm:w-32"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dashboard Widgets
function DashboardWidgets({ blogCount, serviceCount, messageCount, contactCount, loading }) {
  const widgets = [
    {
      label: "Total Blogs",
      value: blogCount,
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      trend: "+12%",
      trendColor: "text-green-600"
    },
    {
      label: "Active Services",
      value: serviceCount,
      icon: Layers,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      trend: "+8%",
      trendColor: "text-green-600"
    },
    {
      label: "New Messages",
      value: messageCount,
      icon: MessageCircle,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      trend: "+15%",
      trendColor: "text-green-600"
    },
    {
      label: "Total Contacts",
      value: contactCount,
      icon: Users,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      trend: "+5%",
      trendColor: "text-green-600"
    },
  ];
  
  if (loading) {
    return <WidgetSkeleton />;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {widgets.map((widget) => {
        const Icon = widget.icon;
        return (
          <div key={widget.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-all duration-200 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{widget.label}</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{widget.value}</p>
              </div>
              <div className={`p-2 sm:p-3 rounded-lg ${widget.bgColor} group-hover:scale-110 transition-transform duration-200`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${widget.textColor}`} />
              </div>
            </div>
            <div className="mt-3 sm:mt-4 flex items-center text-xs sm:text-sm">
              <TrendingUp className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${widget.trendColor}`} />
              <span className={widget.trendColor}>{widget.trend} from last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Chat Section
const sampleChats = [
  {
    id: 1,
    name: "John Smith",
    avatar: "JS",
    lastMessage: "Hi, I have a question about the web development service",
    time: "2 min ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "SJ",
    lastMessage: "Thanks for the quick response!",
    time: "1 hour ago",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Mike Wilson",
    avatar: "MW",
    lastMessage: "When can we schedule a call?",
    time: "3 hours ago",
    unread: 1,
    online: true
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "ED",
    lastMessage: "The project looks great so far",
    time: "1 day ago",
    unread: 0,
    online: false
  }
];

const sampleMessages = [
  {
    id: 1,
    sender: "John Smith",
    avatar: "JS",
    message: "Hi, I have a question about the web development service",
    time: "10:30 AM",
    isOwn: false
  },
  {
    id: 2,
    sender: "Admin",
    avatar: "A",
    message: "Hello John! I'd be happy to help. What would you like to know?",
    time: "10:32 AM",
    isOwn: true
  },
  {
    id: 3,
    sender: "John Smith",
    avatar: "JS",
    message: "I'm looking to build an e-commerce website. What's the typical timeline and cost?",
    time: "10:33 AM",
    isOwn: false
  },
  {
    id: 4,
    sender: "Admin",
    avatar: "A",
    message: "Great question! For an e-commerce website, we typically need 6-8 weeks for development. The cost ranges from $8,000 to $15,000 depending on features. Would you like to schedule a consultation call?",
    time: "10:35 AM",
    isOwn: true
  },
  {
    id: 5,
    sender: "John Smith",
    avatar: "JS",
    message: "That sounds perfect! Yes, I'd love to schedule a call. What times work for you this week?",
    time: "10:36 AM",
    isOwn: false
  }
];

function ChatTab() {
  const [selectedChat, setSelectedChat] = useState(sampleChats[0]);
  const [message, setMessage] = useState("");
  const [chats] = useState(sampleChats);
  const [messages, setMessages] = useState(sampleMessages);
  const [showChatList, setShowChatList] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "Admin",
        avatar: "A",
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setShowChatList(false);
  };

  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Chat Support</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Manage customer conversations and provide support</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[500px] sm:h-[600px] flex flex-col sm:flex-row">
        {/* Chat List - Mobile: Full width overlay, Desktop: Sidebar */}
        <div className={`fixed sm:static top-0 left-0 w-full sm:w-80 h-full sm:h-auto bg-white z-30 transition-transform duration-300 ${showChatList ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 flex flex-col border-b sm:border-b-0 sm:border-r border-gray-200 shadow-lg sm:shadow-none`}>
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Conversations</h3>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setShowChatList(false)}
                className="sm:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close chat list"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Chat List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => { handleChatSelect(chat); if(window.innerWidth < 640) setShowChatList(false); }}
                className={`flex items-center gap-3 px-4 py-3 sm:p-4 cursor-pointer transition-colors hover:bg-gray-50 ${selectedChat?.id === chat.id ? 'bg-blue-50 border-l-4 border-blue-500 sm:border-l-0 sm:border-blue-200' : ''}`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-sm">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-[100px]">{chat.name}</h4>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{chat.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 truncate max-w-[160px] sm:max-w-[140px]">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 sm:w-5 sm:h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative overflow-hidden rounded-b-xl">
          {/* Chat Header */}
          <div className="p-3 sm:p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowChatList(true)}
                className="sm:hidden p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {selectedChat?.avatar}
                </div>
                {selectedChat?.online && (
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{selectedChat?.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  {selectedChat?.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="w-4 h-4" />
              </button>
              <button className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-2 sm:space-y-4 animate-fadein">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'} animate-fadein`}
              >
                <div className={`flex items-end space-x-2 max-w-[90vw] sm:max-w-xs lg:max-w-md ${msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {!msg.isOwn && (
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                  <div className={`px-3 sm:px-4 py-2 rounded-lg text-sm ${
                    msg.isOwn 
                      ? 'bg-blue-600 text-white rounded-br-md' 
                      : 'bg-gray-100 text-gray-900 rounded-bl-md'
                  }`}>
                    <p className="text-xs sm:text-sm break-words">{msg.message}</p>
                    <p className={`text-xs mt-1 ${
                      msg.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Sticky Message Input */}
          <div className="p-2 sm:p-4 border-t border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100/80 backdrop-blur-md sticky bottom-0 left-0 w-full z-10 shadow-[0_-2px_16px_0_rgba(0,0,0,0.04)]">
            <div className="flex items-end justify-center space-x-2 sm:space-x-3 w-full">
              <div className="flex-1 max-w-full sm:max-w-xl relative">
                <textarea
                  value={message}
                  onChange={e => {
                    setMessage(e.target.value);
                    e.target.style.height = '44px';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  onInput={e => {
                    e.target.style.height = '44px';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full min-h-[44px] max-h-40 px-4 sm:px-7 py-3 border border-gray-200 rounded-2xl bg-white/70 shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none text-base transition-all duration-200 placeholder-gray-400 backdrop-blur-md"
                  rows={1}
                  style={{ overflow: 'hidden', boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="flex-shrink-0 h-11 w-11 sm:h-12 sm:w-12 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 -mb-2"
                style={{ boxShadow: '0 6px 24px 0 rgba(59,130,246,0.15)' }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Section
function BlogTab() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  function getTagColor(tag) {
    switch (tag) {
      case "Announcement":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Tech":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "Design":
        return "bg-pink-100 text-pink-700 border-pink-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  }

  function getInitials(name) {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "?";
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBlogs((prev) => prev.filter((b) => b._id !== id && b.id !== id));
      } else {
        alert("Failed to delete blog.");
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Blog Management</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your blog posts and content</p>
        </div>
        <Link 
          href="/admin/blog/add" 
          className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Blog
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <TableSkeleton />
        ) : error ? (
          <div className="p-6 sm:p-8 text-center">
            <div className="text-red-500 mb-2">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Loader2 className="w-4 h-4 mr-2" />
              Retry
            </button>
          </div>
        ) : blogs.length === 0 ? (
          <div className="p-6 sm:p-8 text-center">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No blogs found.</p>
            <Link 
              href="/admin/blog/add" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Blog
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tag</th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blogs.map((blog) => (
                  <tr key={blog._id || blog.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-medium mr-2 sm:mr-3">
                          {getInitials(blog.author || "?")}
                        </div>
                        <div className="text-sm text-gray-900">{blog.author}</div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        {blog.date ? new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : "-"}
                      </div>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <span className={`inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium border ${getTagColor(blog.tag)}`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {blog.tag}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <Link 
                          href={`/admin/blog/edit/${blog._id || blog.id}`}
                          className="inline-flex items-center px-2 sm:px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-150"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Link>
                        <button 
                          onClick={() => handleDelete(blog._id || blog.id)}
                          className="inline-flex items-center px-2 sm:px-3 py-1.5 border border-red-300 shadow-sm text-xs font-medium rounded-md text-red-700 bg-white hover:bg-red-50 hover:border-red-400 transition-all duration-150"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// Services Section
const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom web applications built with React, Next.js, and Node.js.",
    status: "Active",
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design solutions for engaging experiences.",
    status: "Active",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions.",
    status: "Active",
  },
];

function ServicesTab() {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Service Management</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your service offerings</p>
        </div>
        <button className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md text-sm">
          <Plus className="w-4 h-4 mr-2" />
          Add New Service
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="text-sm font-medium text-gray-900">{service.title}</div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="text-sm text-gray-500 max-w-xs sm:max-w-md">{service.description}</div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <span className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {service.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <button className="inline-flex items-center px-2 sm:px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-150">
                        <Edit className="w-3 h-3 mr-1" />
                        Edit
                      </button>
                      <button className="inline-flex items-center px-2 sm:px-3 py-1.5 border border-red-300 shadow-sm text-xs font-medium rounded-md text-red-700 bg-white hover:bg-red-50 hover:border-red-400 transition-all duration-150">
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Contact Section
function ContactTab() {
  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Contact Messages</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">View and manage contact form submissions</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 text-center">
        <Mail className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No contact messages yet.</p>
      </div>
    </div>
  );
}

// Messages Section
function MessagesTab() {
  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Messages & Notifications</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Manage system messages and notifications</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 text-center">
        <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No messages or notifications yet.</p>
      </div>
    </div>
  );
}

const TABS = [
  { name: "Blog", icon: BookOpen, component: BlogTab },
  { name: "Services", icon: Layers, component: ServicesTab },
  { name: "Chat", icon: MessageCircle, component: ChatTab, badgeKey: "messageCount" },
  { name: "Contact", icon: Mail, component: ContactTab, badgeKey: "contactCount" },
  { name: "Messages", icon: Bell, component: MessagesTab, badgeKey: "messageCount" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Blog");
  const [blogCount, setBlogCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch counts
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((blogs) => {
        setBlogCount(blogs.length);
        setLoading(false);
      })
      .catch(() => {
        setBlogCount(0);
        setLoading(false);
      });

    setServiceCount(services.length);
    setMessageCount(4); // Set to number of sample chats
    setContactCount(0);
  }, []);

  const ActiveComponent = TABS.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">Welcome to your admin dashboard. Manage your content and monitor your site.</p>
      </div>

      {/* Dashboard Widgets */}
      <DashboardWidgets
        blogCount={blogCount}
        serviceCount={serviceCount}
        messageCount={messageCount}
        contactCount={contactCount}
        loading={loading}
      />

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 sm:space-x-8 px-4 sm:px-6 overflow-x-auto">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center py-3 sm:py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 relative whitespace-nowrap ${
                    isActive
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className={`w-4 h-4 mr-2 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
                  {tab.name}
                  {tab.badgeKey && (
                    <span className={`ml-2 inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {tab.badgeKey === "contactCount" ? contactCount : messageCount}
                    </span>
                  )}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-t-full"></div>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-4 sm:p-6">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    </div>
  );
}
