"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, use as usePromise, useRef } from "react";
import { FaGooglePay, FaPhone, FaCreditCard } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";


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

// Service pricing data (should match the one in [slug]/page.js)
const services = {
  "web-development": {
    pricing: {
      basic: { price: "$5,000" },
      standard: { price: "$10,000" },
      premium: { price: "$20,000" },
    },
  },
  "mobile-development": {
    pricing: {
      basic: { price: "$8,000" },
      standard: { price: "$15,000" },
      premium: { price: "$30,000" },
    },
  },
  "ui-ux-design": {
    pricing: {
      basic: { price: "$3,000" },
      standard: { price: "$6,000" },
      premium: { price: "$12,000" },
    },
  },
  // Add more services as needed
};

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
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [upiId, setUpiId] = useState("");
  const [upiError, setUpiError] = useState("");
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

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setUpiId("");
    setUpiError("");
  };

  const handleUpiChange = (e) => {
    setUpiId(e.target.value);
    setUpiError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email.";
    if (paymentMethod === "card") {
      if (!form.card.trim()) newErrors.card = "Card number is required.";
      else if (!validateCard(form.card)) newErrors.card = "Enter a valid 16-digit card number.";
      if (!form.expiry.trim()) newErrors.expiry = "Expiry is required.";
      else if (!validateExpiry(form.expiry)) newErrors.expiry = "Format MM/YY";
      if (!form.cvc.trim()) newErrors.cvc = "CVC is required.";
      else if (!validateCVC(form.cvc)) newErrors.cvc = "Enter 3 or 4 digits.";
    } else {
      if (!upiId.trim()) newErrors.upiId = "UPI ID is required.";
      else if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) newErrors.upiId = "Enter a valid UPI ID.";
    }
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

  // Get the price for the selected plan and slug
  let price = "";
  if (slug && plan && services[slug] && services[slug].pricing[plan]) {
    price = services[slug].pricing[plan].price;
  }

  // Payment method options with icons
  const paymentOptions = [
    {
      value: "card",
      label: "Card",
      icon: <FaCreditCard className="w-6 h-6 text-blue-600" />,
    },
    {
      value: "googlepay",
      label: "Google Pay",
      icon: <FaGooglePay className="w-6 h-6 text-green-600" />,
    },
    {
      value: "phonepe",
      label: "PhonePe",
      icon: <FaPhone className="w-6 h-6 text-purple-600" />,
    },
    {
      value: "paytm",
      label: "Paytm",
      icon: <SiPaytm className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white p-4 sm:p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 max-w-md w-full border border-gray-100">
        <h1 className="text-3xl font-extrabold mb-2 text-blue-700 text-center tracking-tight">Payment for {slug && slug.replace(/-/g, " ")}</h1>
        {plan && (
          <div className="mb-6 text-center">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2 shadow-md">
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
          <form className="space-y-6 text-left" onSubmit={handleSubmit} autoComplete="off" noValidate>
            {/* Price Field (disabled) */}
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="price">Amount</label>
              <input
                type="text"
                name="price"
                id="price"
                value={price}
                disabled
                className="w-full px-4 py-3 rounded-xl border border-blue-200 bg-blue-50 text-lg font-bold text-blue-700 cursor-not-allowed shadow-inner focus:outline-none"
              />
            </div>
            {/* Payment Method Selection */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Payment Method</label>
              <div className="grid grid-cols-2 gap-3 mb-2">
                {paymentOptions.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`flex items-center gap-2 w-full px-4 py-3 rounded-xl border transition-all duration-200 shadow-sm font-medium text-base focus:outline-none
                      ${paymentMethod === option.value
                        ? "border-blue-600 bg-blue-50 ring-2 ring-blue-200"
                        : "border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50"}
                    `}
                    onClick={() => setPaymentMethod(option.value)}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* UPI ID Field (for UPI methods) */}
            {paymentMethod !== "card" && (
              <div className="rounded-xl bg-blue-50 p-4 border border-blue-100 shadow-inner">
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="upiId">UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  id="upiId"
                  value={upiId}
                  onChange={handleUpiChange}
                  className={`w-full px-4 py-3 rounded-lg border ${upiError || (errors.upiId && (touched.upiId || submitted)) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-white`}
                  placeholder="yourname@bank"
                  required
                />
                {(upiError || (errors.upiId && (touched.upiId || submitted))) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{upiError || errors.upiId}</p>}
              </div>
            )}
            {/* Card Fields (only if card is selected) */}
            {paymentMethod === "card" && (
              <div className="rounded-xl bg-blue-50 p-4 border border-blue-100 shadow-inner space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="card">Card Number</label>
                  <input
                    type="text"
                    name="card"
                    id="card"
                    value={form.card}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required={paymentMethod === "card"}
                    maxLength={19}
                    pattern="[0-9 ]{13,19}"
                    ref={fieldRefs.card}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.card && (touched.card || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-white`}
                    placeholder="1234 5678 9012 3456"
                    inputMode="numeric"
                  />
                  {errors.card && (touched.card || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.card}</p>}
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="expiry">Expiry</label>
                    <input
                      type="text"
                      name="expiry"
                      id="expiry"
                      value={form.expiry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={paymentMethod === "card"}
                      maxLength={5}
                      pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                      ref={fieldRefs.expiry}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.expiry && (touched.expiry || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-white`}
                      placeholder="MM/YY"
                      inputMode="numeric"
                    />
                    {errors.expiry && (touched.expiry || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.expiry}</p>}
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold mb-1" htmlFor="cvc">CVC</label>
                    <input
                      type="text"
                      name="cvc"
                      id="cvc"
                      value={form.cvc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={paymentMethod === "card"}
                      maxLength={4}
                      pattern="[0-9]{3,4}"
                      ref={fieldRefs.cvc}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.cvc && (touched.cvc || submitted) ? 'border-red-400' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:outline-none text-base bg-white`}
                      placeholder="123"
                      inputMode="numeric"
                    />
                    {errors.cvc && (touched.cvc || submitted) && <p className="text-red-500 text-xs mt-1 transition-opacity duration-300 ease-in opacity-100 animate-fade-in">{errors.cvc}</p>}
                  </div>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-60 shadow-lg"
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