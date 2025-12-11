"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    // { href: "/#trust", label: "Why Us" },
    // { href: "/#what-is", label: "What You Get" },
    // { href: "/#pricing", label: "Pricing" },
    // { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
    { href: "/about", label: "हमारे बारे में" },
    { href: "/contact", label: "संपर्क करें" },
    { href: "/pricing", label: "प्लान्स" },
  ];

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={close}>
               <Image src="/images/smallsvg.svg" alt="BlogVoom" width={100} height={100} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#68b13d]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Link
              href="/#pricing"
              className="hidden items-center gap-2 rounded-full bg-[#68b13d] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-[#5a9a33] hover:scale-105 md:inline-flex"
            >
              Start Now
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Mobile Burger */}
            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full transform rounded-full bg-slate-900 transition-transform duration-200 ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full transform rounded-full bg-slate-900 transition-opacity duration-150 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-full transform rounded-full bg-slate-900 transition-transform duration-200 ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
      >
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-full transform bg-slate-950 p-6 text-white shadow-2xl transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-lg font-extrabold tracking-tight">BVoom</span>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              aria-label="Close navigation"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4 text-base font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2 hover:bg-white/5"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/#pricing"
              onClick={close}
              className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
            >
              {/* Start My Blog Now */}
              अभी शुरू करें
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

