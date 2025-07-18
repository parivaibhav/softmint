"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, use as usePromise, useRef } from "react";


function validateEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}
function validateCard(card) {
  return /^\d{16}$/.test(card.replace(/\s/g, ""));
}
function validateExpiry(expiry) {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
}
function validateCVC(cvc) {
  return /^\d{3,4}$/.test(cvc);
}

export default function PaymentPage({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const resolvedParams = typeof params.then === 'function' ? usePromise(params) : params;
  let slug;
  if (resolvedParams && typeof resolvedParams.value === "string") {
    try {
      const parsed = JSON.parse(resolvedParams.value);
      slug = parsed.slug;
    } catch {
      slug = undefined;
    }
  } else {
    slug = resolvedParams?.slug;
  }
  const [plan, setPlan] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", card: "", expiry: "", cvc: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const fieldRefs = {
    name: useRef(),
    email: useRef(),
    card: useRef(),
    expiry: useRef(),
    cvc: useRef(),
  };

  useEffect(() => {
    const planKey = searchParams.get("plan");
    setPlan(planKey);
  }, [searchParams]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.card.trim()) newErrors.card = "Card number is required.";
    else if (!validateCard(form.card)) newErrors.card = "Enter a valid 16-digit card number.";
    if (!form.expiry.trim()) newErrors.expiry = "Expiry is required.";
    else if (!validateExpiry(form.expiry)) newErrors.expiry = "Format MM/YY";
    if (!form.cvc.trim()) newErrors.cvc = "CVC is required.";
    else if (!validateCVC(form.cvc)) newErrors.cvc = "Enter 3 or 4 digits.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      // Focus and shake the first invalid field
      const firstErrorField = Object.keys(newErrors)[0];
      const ref = fieldRefs[firstErrorField]?.current;
      if (ref) {
        ref.classList.add("animate-shake");
        ref.focus();
        setTimeout(() => {
          if (ref) ref.classList.remove("animate-shake");
        }, 400);
      }
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4 sm:p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-md w-full text-center border border-gray-200">
        <h1 className="text-3xl font-bold mb-2 text-blue-700">Payment for {slug && slug.replace(/-/g, " ")}</h1>
        {plan && (
          <div className="mb-6">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
              Plan: <span className="capitalize">{plan}</span>
            </span>
            <p className="text-gray-500 text-sm">Please fill in your payment details below.</p>
          </div>
        )}
        {success ? (
          <div className="flex flex-col items-center justify-center py-8">
            <svg className="w-16 h-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-700 mb-4">Thank you for your purchase. We will contact you soon.</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200" onClick={() => router.push('/user/services')}>
              Go to Services
            </button>
          </div>
        ) : (
          <form className="space-y-4 text-left" onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                ref={fieldRefs.name}
                className={`w-full px-4 py-2 rounded-lg border ${errors.name && (touched.name || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-gray-50`}
                placeholder="Your Name"
              />
              {errors.name && (touched.name || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                ref={fieldRefs.email}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email && (touched.email || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-gray-50`}
                placeholder="you@email.com"
              />
              {errors.email && (touched.email || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="card">Card Number</label>
              <input
                type="text"
                name="card"
                id="card"
                value={form.card}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                maxLength={19}
                pattern="[0-9 ]{13,19}"
                ref={fieldRefs.card}
                className={`w-full px-4 py-2 rounded-lg border ${errors.card && (touched.card || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-gray-50`}
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
              />
              {errors.card && (touched.card || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.card}</p>}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="expiry">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  id="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  maxLength={5}
                  pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                  ref={fieldRefs.expiry}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.expiry && (touched.expiry || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-gray-50`}
                  placeholder="MM/YY"
                  inputMode="numeric"
                />
                {errors.expiry && (touched.expiry || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.expiry}</p>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-1" htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  name="cvc"
                  id="cvc"
                  value={form.cvc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  maxLength={4}
                  pattern="[0-9]{3,4}"
                  ref={fieldRefs.cvc}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.cvc && (touched.cvc || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-gray-50`}
                  placeholder="123"
                  inputMode="numeric"
                />
                {errors.cvc && (touched.cvc || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.cvc}</p>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-60"
              disabled={submitting}
            >
              {submitting ? 'Processing...' : 'Pay Now'}
            </button>
          </form>
        )}
        <button
          className="mt-6 text-blue-600 underline font-medium hover:text-purple-600"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
} 