import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";

const posts = [
  {
    id: 1,
    title: "Welcome to Our Blog!",
    excerpt: "Discover the latest updates, tips, and stories from the SoftMint team.",
    date: "2024-06-01",
    slug: "welcome-to-our-blog",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tag: "Announcement",
    author: "SoftMint Team"
  },
  {
    id: 2,
    title: "How We Build Modern Web Apps",
    excerpt: "A behind-the-scenes look at our tech stack and development process.",
    date: "2024-06-02",
    slug: "how-we-build-modern-web-apps",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tag: "Tech",
    author: "Vaibhav Goswami"
  },
  {
    id: 3,
    title: "UI/UX Best Practices in 2024",
    excerpt: "Our top recommendations for creating delightful user experiences.",
    date: "2024-06-03",
    slug: "ui-ux-best-practices-2024",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tag: "Design",
    author: "SoftMint Team"
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-8 mb-16 bg-transparent rounded-3xl overflow-hidden shadow-none flex items-center justify-center">
      <Navbar/>
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
            Blog
          </h1>
          <p className="text-lg text-gray-700 mb-6">Insights, stories, and updates from the SoftMint team.</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3 pb-16">
        {posts.map(post => (
          <div
            key={post.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 hover:-translate-y-1 hover:scale-[1.025]"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={post.id === 1}
              />
              <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                {post.tag}
              </span>
            </div>
            <div className="flex-1 flex flex-col p-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z" /></svg>
                  {post.author}
                </span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-blue-600 font-semibold hover:underline transition-colors">Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 