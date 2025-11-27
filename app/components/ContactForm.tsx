"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck, FaRegCircleXmark } from "react-icons/fa6";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
  description: Yup.string(),
});

interface ContactFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
  isInModal?: boolean;
}

export default function ContactForm({ onSuccess, onClose, isInModal = false }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      }, 1000);
    },
  });

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-[#68b13d] animate-bounce">
          <FaCheck className="h-10 w-10" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-3">Thank You!</h3>
        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
          We have received your details. <br />
          Our team will connect with you within <span className="font-bold text-slate-900">24 hours</span>.
        </p>
        {isInModal && onClose && (
          <button
            onClick={onClose}
            className="w-full rounded-xl bg-[#68b13d] py-4 text-white font-bold text-lg hover:bg-[#5a9a33] transition-colors shadow-lg shadow-green-600/20"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h3 className="text-3xl font-black text-slate-900 mb-2">Get Started</h3>
        <p className="text-slate-500 font-medium">
          Fill in your details below to kickstart your blogging journey.
        </p>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps("name")}
            className={`w-full rounded-xl border-2 px-4 py-3.5 outline-none transition-all font-medium ${
              formik.touched.name && formik.errors.name
                ? "border-red-100 bg-red-50 text-red-900 focus:border-red-300"
                : "border-slate-100 bg-slate-50 text-slate-900 focus:border-[#68b13d] focus:bg-white"
            }`}
            placeholder="Enter your full name"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="mt-1.5 text-xs text-red-500 font-bold flex items-center gap-1">
              <FaRegCircleXmark /> {formik.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1.5">
            Email Address <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            className={`w-full rounded-xl border-2 px-4 py-3.5 outline-none transition-all font-medium ${
              formik.touched.email && formik.errors.email
                ? "border-red-100 bg-red-50 text-red-900 focus:border-red-300"
                : "border-slate-100 bg-slate-50 text-slate-900 focus:border-[#68b13d] focus:bg-white"
            }`}
            placeholder="john@example.com"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1.5 text-xs text-red-500 font-bold flex items-center gap-1">
              <FaRegCircleXmark /> {formik.errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-bold text-slate-700 mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">
              +91
            </span>
            <input
              id="mobile"
              type="tel"
              {...formik.getFieldProps("mobile")}
              className={`w-full rounded-xl border-2 pl-14 pr-4 py-3.5 outline-none transition-all font-medium ${
                formik.touched.mobile && formik.errors.mobile
                  ? "border-red-100 bg-red-50 text-red-900 focus:border-red-300"
                  : "border-slate-100 bg-slate-50 text-slate-900 focus:border-[#68b13d] focus:bg-white"
              }`}
              placeholder="98765 43210"
              maxLength={10}
            />
          </div>
          {formik.touched.mobile && formik.errors.mobile && (
            <p className="mt-1.5 text-xs text-red-500 font-bold flex items-center gap-1">
              <FaRegCircleXmark /> {formik.errors.mobile}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-1.5">
            Description <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="description"
            rows={3}
            {...formik.getFieldProps("description")}
            className="w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3.5 outline-none transition-all focus:border-[#68b13d] focus:bg-white font-medium resize-none"
            placeholder="Tell us about your blog idea..."
          />
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full rounded-xl bg-[#68b13d] py-4 text-white font-bold text-lg shadow-xl shadow-green-600/20 transition-all hover:bg-[#5a9a33] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? "Processing..." : "Submit Request"}
        </button>
      </form>
    </>
  );
}

