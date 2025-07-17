import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

// Mock blog posts data (should be replaced with real data or fetched from a CMS/database)
const posts = [
  {
    slug: "welcome-to-our-blog",
    title: "Welcome to Our Blog!",
    date: "2024-06-01",
    content: `Welcome to the SoftMint blog! Here, we'll share updates, tips, and stories about our journey building innovative web solutions. Stay tuned for more!`,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tag: "Announcement",
    author: "SoftMint Team"
  },
  {
    slug: "how-we-build-modern-web-apps",
    title: "How We Build Modern Web Apps",
    date: "2024-06-02",
    content: `At SoftMint, we use the latest technologies to build scalable and maintainable web applications. In this post, we take you behind the scenes of our development process.`,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tag: "Tech",
    author: "Vaibhav Goswami"
  },
  {
    slug: "ui-ux-best-practices-2024",
    title: "UI/UX Best Practices in 2024",
    date: "2024-06-03",
    content: `User experience is at the heart of everything we do. Here are our top UI/UX recommendations for 2024 to help you create delightful digital products.`,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tag: "Design",
    author: "SoftMint Team"
  }
];

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 sm:py-16">
       <Navbar/>
      {/* Hero Image */}
      <div className="relative w-full h-60 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg mb-8">
        <Image
          src={post.image || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"}
          alt={post.title}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 100vw, 700px"
          priority
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg backdrop-blur-sm">
          {post.tag}
        </span>
      </div>
      {/* Title & Meta */}
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
        {post.title}
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z" /></svg>
          {post.author}
        </span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      {/* Content */}
      <article className="prose prose-lg sm:prose-xl max-w-none text-gray-800 mt-8 mb-8">
        {post.content}
      </article>
      <div className="mt-10">
        <Link href="/blog" className="inline-block text-blue-600 font-semibold hover:underline transition-colors">← Back to Blog</Link>
      </div>
    </main>
  );
} 