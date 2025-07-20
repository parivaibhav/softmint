"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, use as usePromise, useRef } from "react";


export default function EditBlogPage({ params }) {
  const resolvedParams = typeof params.then === 'function' ? usePromise(params) : params;
  const { id } = resolvedParams;
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [shake, setShake] = useState({});
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    async function fetchBlog() {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Not found");
        const blog = await res.json();
        setTitle(blog.title || "");
        setAuthor(blog.author || "");
        setTag(blog.tag || "");
        setContent(blog.content || "");
      } catch (err) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [id]);

  const validate = (fields = { title, author, content }) => {
    const errors = {};
    if (!fields.title.trim()) errors.title = "Title is required.";
    if (!fields.author.trim()) errors.author = "Author is required.";
    if (!fields.content.trim()) errors.content = "Content is required.";
    if (fields.title.length > 100) errors.title = "Title must be under 100 characters.";
    if (fields.author.length > 50) errors.author = "Author must be under 50 characters.";
    if (fields.content.length < 20) errors.content = "Content must be at least 20 characters.";
    return errors;
  };

  // Live validation as user types
  const handleFieldChange = (field, value) => {
    if (field === "title") setTitle(value);
    if (field === "author") setAuthor(value);
    if (field === "content") setContent(value);
    if (field === "tag") setTag(value);
    setFieldErrors((prev) => {
      const newFields = { ...prev, [field]: undefined };
      const errors = validate({
        title: field === "title" ? value : title,
        author: field === "author" ? value : author,
        content: field === "content" ? value : content,
      });
      return { ...newFields, ...errors };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      // Focus first invalid field
      if (errors.title) {
        setShake((s) => ({ ...s, title: true }));
        titleRef.current?.focus();
      } else if (errors.author) {
        setShake((s) => ({ ...s, author: true }));
        authorRef.current?.focus();
      } else if (errors.content) {
        setShake((s) => ({ ...s, content: true }));
        contentRef.current?.focus();
      }
      setTimeout(() => setShake({}), 500);
      return;
    }
    // Auto-generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    const res = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, author, tag, content }),
    });
    if (res.ok) {
      router.push("/admin/blog");
    } else {
      alert("Failed to update blog");
    }
  };

  if (loading) {
    return <div className="max-w-xl mx-auto py-20 text-center text-gray-500 font-bold">Loading...</div>;
  }
  if (notFound) {
    return <div className="max-w-xl mx-auto py-20 text-center text-red-500 font-bold">Blog not found.</div>;
  }

  const WarningIcon = () => (
    <svg className="inline w-4 h-4 mr-1 text-red-500 align-text-bottom" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
   
      <div className="flex-1 w-full max-w-2xl mx-auto py-8 px-2 sm:px-4 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Blog</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-4 sm:p-8 flex flex-col gap-6">
          <div>
            <label
              className={`block font-semibold mb-2 transition-all ${fieldErrors.title ? 'text-red-600 flex items-center gap-1' : 'text-gray-700'}`}
              htmlFor="title"
            >
              {fieldErrors.title ? <><WarningIcon /> {fieldErrors.title}</> : 'Title'}
            </label>
            <input
              id="title"
              ref={titleRef}
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'}${shake.title ? ' animate-shake' : ''}`}
              value={title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              maxLength={100}
              required
              aria-invalid={!!fieldErrors.title}
              aria-describedby={fieldErrors.title ? 'title-error' : undefined}
            />
            {/* No extra error message below input, label handles it */}
          </div>
          <div>
            <label
              className={`block font-semibold mb-2 transition-all ${fieldErrors.author ? 'text-red-600 flex items-center gap-1' : 'text-gray-700'}`}
              htmlFor="author"
            >
              {fieldErrors.author ? <><WarningIcon /> {fieldErrors.author}</> : 'Author'}
            </label>
            <input
              id="author"
              ref={authorRef}
              type="text"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.author ? 'border-red-500 bg-red-50' : 'border-gray-300'}${shake.author ? ' animate-shake' : ''}`}
              value={author}
              onChange={(e) => handleFieldChange("author", e.target.value)}
              maxLength={50}
              required
              aria-invalid={!!fieldErrors.author}
              aria-describedby={fieldErrors.author ? 'author-error' : undefined}
            />
            {/* No extra error message below input, label handles it */}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="tag">Tag</label>
            <input
              id="tag"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>
          <div>
            <label
              className={`block font-semibold mb-2 transition-all ${fieldErrors.content ? 'text-red-600 flex items-center gap-1' : 'text-gray-700'}`}
              htmlFor="content"
            >
              {fieldErrors.content ? <><WarningIcon /> {fieldErrors.content}</> : 'Content'}
            </label>
            <textarea
              id="content"
              ref={contentRef}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.content ? 'border-red-500 bg-red-50' : 'border-gray-300'}${shake.content ? ' animate-shake' : ''}`}
              value={content}
              onChange={(e) => handleFieldChange("content", e.target.value)}
              rows={8}
              minLength={20}
              required
              aria-invalid={!!fieldErrors.content}
              aria-describedby={fieldErrors.content ? 'content-error' : undefined}
            />
            {/* No extra error message below input, label handles it */}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              onClick={() => router.push("/admin/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition w-full sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 