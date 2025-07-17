"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { PhotoIcon } from "@heroicons/react/24/solid";


const WarningIcon = () => (
  <svg
    className="inline w-4 h-4 mr-1 text-red-500 align-text-bottom"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default function AddBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [shake, setShake] = useState({});
  const titleRef = useRef();
  const authorRef = useRef();
  const contentRef = useRef();

  const validate = (fields = { title, author, content }) => {
    const errors = {};
    if (!fields.title.trim()) errors.title = "Title is required.";
    else if (fields.title.length < 5)
      errors.title = "Title must be at least 5 characters.";
    if (!fields.author.trim()) errors.author = "Author is required.";
    if (!fields.content.trim()) errors.content = "Content is required.";
    if (fields.title.length > 100)
      errors.title = "Title must be under 100 characters.";
    if (fields.author.length > 50)
      errors.author = "Author must be under 50 characters.";
    if (fields.content.length < 20)
      errors.content = "Content must be at least 20 characters.";
    return errors;
  };

  // Live validation as user types
  const handleFieldChange = (field, value) => {
    // Update state
    if (field === "title") setTitle(value);
    if (field === "author") setAuthor(value);
    if (field === "content") setContent(value);
    if (field === "tag") setTag(value);
    // Validate only this field
    setFieldErrors((prev) => {
      const newErrors = { ...prev };
      // Validate the current field only
      const singleField = { title, author, content, [field]: value };
      const errors = validate(singleField);
      if (errors[field]) {
        newErrors[field] = errors[field];
      } else {
        delete newErrors[field];
      }
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      // Shake all invalid fields and focus the first
      const newShake = {};
      if (errors.title) newShake.title = true;
      if (errors.author) newShake.author = true;
      if (errors.content) newShake.content = true;
      setShake(newShake);
      // Focus the first invalid field
      if (errors.title) titleRef.current?.focus();
      else if (errors.author) authorRef.current?.focus();
      else if (errors.content) contentRef.current?.focus();
      setTimeout(() => setShake({}), 500);
      return;
    }
    setLoading(true);
    try {
      const blogId = uuidv4();
      // Auto-generate slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          author,
          tag,
          content,
        }),
      });
      if (!res.ok) throw new Error("Failed to add blog");
      router.push("/admin/blog");
    } catch (err) {
      setError(err.message || "Failed to add blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
 
      <div className="flex-1 w-full max-w-2xl mx-auto py-8 px-2 sm:px-4 md:py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Add Blog
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow p-4 sm:p-8 flex flex-col gap-6"
        >
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.title ? 'border-red-500 bg-red-50' : 'border-gray-300'}${shake.title ? " animate-shake" : ""}`}
              value={title}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              maxLength={100}
              required
              aria-invalid={!!fieldErrors.title}
              aria-describedby={fieldErrors.title ? "title-error" : undefined}
            />
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
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${fieldErrors.author ? 'border-red-500 bg-red-50' : 'border-gray-300'}${shake.author ? " animate-shake" : ""}`}
              value={author}
              onChange={(e) => handleFieldChange("author", e.target.value)}
              maxLength={50}
              required
              aria-invalid={!!fieldErrors.author}
              aria-describedby={fieldErrors.author ? "author-error" : undefined}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="tag"
            >
              Tag
            </label>
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
              aria-describedby={fieldErrors.content ? "content-error" : undefined}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm font-semibold text-center">
              {error}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition w-full sm:w-auto"
              onClick={() => router.push("/admin/blog")}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
