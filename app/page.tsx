"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChartLine, FaMoneyBillWave, FaHandshake, FaArrowTrendUp, FaRegClock, FaRegCircleCheck, FaRegCircleXmark, FaArrowRight, FaMobileScreen, FaGaugeHigh, FaServer, FaHeadset, FaRocket, FaWandMagicSparkles, FaGlobe, FaPenNib, FaCheck, FaXmark, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPlay } from "react-icons/fa6";
import { HiOutlineLink, HiOutlineCog6Tooth, HiOutlineRocketLaunch, HiOutlineCurrencyRupee, HiOutlineUserGroup } from "react-icons/hi2";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#trust", label: "Why Us" },
    { href: "#what-is", label: "What You Get" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-6">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2" onClick={close}>
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#68b13d] text-lg font-black text-white shadow-lg shadow-green-500/20">
                B
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                  Bloglft
                </span>
                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  Blog Launch Studio
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[#68b13d]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="#pricing"
              className="hidden items-center gap-2 rounded-full bg-[#68b13d] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-[#5a9a33] hover:scale-105 md:inline-flex"
            >
              Start Now
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

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
            <span className="text-lg font-extrabold tracking-tight">Bloglft</span>
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
              <a
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2 hover:bg-white/5"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-8">
            <a
              href="#pricing"
              onClick={close}
              className="flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100"
            >
              Start My Blog Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans" style={{background: '#ffffff'}}>

      <Header />
      {/* SECTION 1 — HERO (Clean & Modern Design) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        {/* Premium Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#68b13d]/10 to-transparent rounded-[100%] blur-[100px] opacity-60"></div>
          <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#8bc85a]/10 blur-[120px]"></div>
          <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#68b13d]/10 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl z-10">
          <div className="text-center space-y-8 md:space-y-14">
            
            {/* Trust Badge - Premium Pill Design */}
            <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/80 border border-[#68b13d]/20 shadow-sm backdrop-blur-sm hover:border-[#68b13d]/40 transition-colors cursor-default max-w-full overflow-hidden">
              <div className="flex -space-x-3 flex-shrink-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden relative">
                     <div className={`absolute inset-0 bg-gradient-to-br from-[#68b13d] to-[#4d8a2a] opacity-${100 - (i * 20)}`}></div>
              </div>
                ))}
              </div>
              <div className="flex flex-col items-start text-left leading-none truncate">
                 <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-[#68b13d]">Verified</span>
                 <span className="text-xs md:text-sm font-bold text-slate-700 truncate">Trusted by 2,000+ Creators</span>
              </div>
            </div>

            {/* Main Heading - Big Brand Typography */}
            <h1 className="space-y-2 md:space-y-6">
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] md:leading-[0.95]">
                Launch Your Own
              </span>
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-[0.95]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#68b13d] via-[#5a9a33] to-[#4d8a2a]">
                Money-Making Blog
              </span>
              </span>
              <span className="block text-lg sm:text-2xl md:text-4xl font-medium text-slate-500 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
                Start earning in just <span className="font-black text-slate-900 relative inline-block">
                  1 Hour
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#68b13d]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>. No coding required.
              </span>
            </h1>
            
            {/* CTAs - High Conversion */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center pt-6 md:pt-8">
              <a
                href="#pricing"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-[#68b13d] text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(104,177,61,0.5)] overflow-hidden"
              >
                <span className="relative z-10">Start My Blog Now</span>
                <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Button Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
              </a>
              
              <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500">
                 <svg className="w-4 h-4 md:w-5 md:h-5 text-[#68b13d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 <span>No Credit Card Required</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS STRIP */}
      <div className="py-16 bg-slate-50 border-y border-slate-100 hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Powered by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
             {/* Partner Logos */}
             <div className="h-8 md:h-10 relative cursor-pointer transition-transform hover:scale-110">
               <Image 
                 src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                 alt="Google"
                 width={100}
                 height={35}
                 className="h-full w-auto object-contain"
                 unoptimized
               />
          </div>
             <div className="h-8 md:h-10 relative cursor-pointer transition-transform hover:scale-110">
               <Image 
                 src="https://s.w.org/style/images/wp-header-logo.png"
                 alt="WordPress"
                 width={100}
                 height={35}
                 className="h-full w-auto object-contain"
                 unoptimized
               />
        </div>
             <div className="h-8 md:h-10 relative cursor-pointer transition-transform hover:scale-110">
               <Image 
                 src="https://www.hostinger.com/assets/images/2020/logo/hostinger-logo.svg"
                 alt="Hostinger"
                 width={100}
                 height={35}
                 className="h-full w-auto object-contain"
                 unoptimized
               />
      </div>
             <div className="h-8 md:h-10 relative cursor-pointer transition-transform hover:scale-110">
               <Image 
                 src="https://www.cloudflare.com/resources/images/slt3lc6tev37/1WjTl2KZ8z7YbM5v8G1QYp/0ab4c4eadd3c0d1a57a8b8e8f8e8f8e8/cloudflare-logo.svg"
                 alt="Cloudflare"
                 width={100}
                 height={35}
                 className="h-full w-auto object-contain"
                 unoptimized
               />
             </div>
             <div className="h-8 md:h-10 relative cursor-pointer transition-transform hover:scale-110">
               <Image 
                 src="https://www.gstatic.com/adsense/logo/adsense_logo.svg"
                 alt="Google AdSense"
                 width={100}
                 height={35}
                 className="h-full w-auto object-contain"
                 unoptimized
               />
             </div>
          </div>
        </div>
        </div>

      {/* SECTION 2 — WHY TRUST US (Brand New Premium Layout) */}
      <section id="trust" className="py-16 md:py-20 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Visual Authority (Abstract Dashboard) */}
            <div className="relative order-2 lg:order-1">
               {/* Decorative blob */}
               <div className="absolute -top-20 -left-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#68b13d]/10 rounded-full blur-[80px]"></div>
               
               <div className="relative bg-slate-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden">
                  {/* Abstract Graph UI */}
                  <div className="space-y-6">
                     <div className="flex items-center justify-between mb-6 md:mb-8">
                        <div>
                           <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Monthly Earnings</div>
                           <div className="text-2xl md:text-4xl font-black text-slate-900">₹1,24,500</div>
                        </div>
                        <div className="px-2 py-1 md:px-3 md:py-1 bg-green-100 text-green-700 text-[10px] md:text-xs font-bold rounded-full flex items-center gap-1">
                           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                           +24%
                        </div>
                     </div>
                     
                     {/* Bar Chart Visual */}
                     <div className="flex items-end gap-2 md:gap-3 h-32 md:h-40 pb-2 border-b border-slate-200">
                        {[40, 65, 45, 80, 55, 90, 75, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-[#68b13d] rounded-t-lg opacity-20 hover:opacity-100 transition-opacity duration-500" style={{height: `${h}%`}}></div>
                        ))}
               </div>
               </div>

                  {/* Floating Success Cards */}
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl border border-slate-100 max-w-[160px] md:max-w-[200px] animate-bounce" style={{animationDuration: '3s'}}>
                     <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center text-lg md:text-xl">💰</div>
                        <div>
                           <div className="text-[10px] md:text-xs font-bold text-slate-500">AdSense Payout</div>
                           <div className="text-xs md:text-sm font-black text-slate-900">₹45,200</div>
               </div>
               </div>
            </div>
          </div>
             </div>
             
            {/* Right Column: Copy & Stats */}
            <div className="order-1 lg:order-2">
              <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Since 2015</span>
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
                We Don&apos;t Just Build Websites. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#4d8a2a]">
                  We Build Careers.
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-10">
                Blogging isn&apos;t a hobby anymore—it&apos;s a serious digital asset. We&apos;ve spent a decade perfecting the formula that turns ordinary people into digital entrepreneurs.
              </p>

              <div className="space-y-6 md:space-y-8 border-l-2 border-slate-100 pl-6 md:pl-8">
                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[39px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-white bg-[#68b13d]"></div>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900">₹10 Crore+</h4>
                    <p className="text-slate-500 font-medium text-sm md:text-base">Generated by our clients via AdSense & Affiliates</p>
                            </div>
                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[39px] top-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-4 border-white bg-slate-300"></div>
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900">2,000+</h4>
                    <p className="text-slate-500 font-medium text-sm md:text-base">Active blogs launched and running successfully</p>
                         </div>
                      </div>
                      
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100">
                 <div className="flex items-center gap-4">
                    <div className="flex -space-x-2 md:-space-x-3">
                       {[1,2,3,4].map(i => (
                          <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-200"></div>
                       ))}
                      </div>
                    <div className="text-xs md:text-sm">
                       <span className="font-bold text-slate-900 block">Join 2,000+ Creators</span>
                       <span className="text-slate-500">Rated 4.9/5 on TrustPilot</span>
                   </div>
                 </div>
             </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3 — WHY BLOGGING IS #1 (Clean Tech Vibe) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center  mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
              The Ultimate <span className="text-[#68b13d] underline decoration-4 decoration-[#68b13d]/20 underline-offset-8">Income Asset</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Stop trading time for money. Build a digital asset that works for you 24/7.
            </p>
          </div>

          {/* 3-Column Feature Grid (Clean & Minimal) */}
          {/* <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
             {[
                {
                   title: "Google AdSense",
                   desc: "Get paid by Google just for showing ads. The most reliable monthly income source.",
                   icon: <FaMoneyBillWave />,
                   color: "bg-blue-50 text-blue-600",
                   borderColor: "border-blue-100"
                },
                {
                   title: "Affiliate Marketing",
                   desc: "Recommend products you love. Earn 10-50% commission on every single sale.",
                   icon: <HiOutlineLink />,
                   color: "bg-purple-50 text-purple-600",
                   borderColor: "border-purple-100"
                },
                {
                   title: "Brand Sponsorships",
                   desc: "As you grow, brands pay you directly to review or mention their products.",
                   icon: <FaHandshake />,
                   color: "bg-pink-50 text-pink-600",
                   borderColor: "border-pink-100"
                }
             ].map((item, i) => (
                <div key={i} className={`group p-6 md:p-10 rounded-[2rem] bg-white border-2 ${item.borderColor} hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 relative overflow-hidden`}>
                   <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.color.split(' ')[0]}`}></div>
                   <div className="relative z-10">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${item.color} flex items-center justify-center text-2xl md:text-3xl mb-6 md:mb-8 group-hover:scale-110 transition-transform bg-white shadow-sm`}>
                         {item.icon}
                </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{item.title}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{item.desc}</p>
             </div>
                </div>
             ))}
             </div> */}

          {/* Comparison & Opportunity Section */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
             
             {/* Comparison Table (Clean List Style) */}
             <div className="lg:col-span-7 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-slate-100">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-10">Why Blogging Beats Social Media</h3>
                <div className="space-y-4 md:space-y-6">
                   {[
                      { label: "Face / Camera Required?", blog: "No", social: "Yes" },
                      { label: "Content Lifespan", blog: "Years", social: "Hours" },
                      { label: "Passive Income Potential", blog: "High", social: "Low" },
                      { label: "Ownership", blog: "100% Yours", social: "Platform's" },
                      { label: "Competition", blog: "Low", social: "Extreme" },
                   ].map((row, idx) => (
                      <div key={idx} className="flex items-center justify-between py-3 md:py-4 border-b border-slate-200 last:border-0">
                         <span className="font-bold text-slate-700 text-sm md:text-lg flex-1">{row.label}</span>
                         <div className="flex items-center gap-2 md:gap-8 text-right">
                            <div className="w-16 md:w-24 hidden sm:block">
                               <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase block mb-1">Social Media</span>
                               <span className="font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full text-xs md:text-sm">{row.social}</span>
                </div>
                            <div className="w-20 md:w-24 border-l border-slate-200 pl-2 md:pl-8">
                               <span className="text-[10px] md:text-xs font-bold text-[#68b13d] uppercase block mb-1">Blogging</span>
                               <span className="font-bold text-[#68b13d] bg-[#68b13d]/10 px-2 py-1 rounded-full text-xs md:text-sm">{row.blog}</span>
             </div>
          </div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Golden Era Callout (Dark Theme Pop) */}
             <div className="lg:col-span-5 bg-[#1a1a1a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#68b13d] rounded-full blur-[100px] opacity-20"></div>
                
                <div className="relative z-10">
                   <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#68b13d]/20 text-[#68b13d] font-bold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6 border border-[#68b13d]/30">
                      Market Opportunity
                   </span>
                   <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
                      2025 is the <br/>
                      <span className="text-[#68b13d]">Golden Era</span>
                   </h3>
                   <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                      With AI tools and growing internet usage in India, starting a blog is 10x easier and more profitable than ever before.
                   </p>
                   <a href="#pricing" className="inline-flex items-center gap-3 font-bold text-white group hover:text-[#68b13d] transition-colors">
                      Start Your Journey
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#68b13d] group-hover:text-white transition-all">
                         <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                      </div>
                   </a>
                </div>
             </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — COMPLETE PACKAGE (Unboxing Value Vibe) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative bg-[#f8f9fa] overflow-hidden">
        {/* Subtle Technical Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">All-In-One Solution</span>
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
              Your Complete <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900">Business In A Box</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
              We don&apos;t just give you a website. We hand over a fully functional, revenue-ready digital business.
            </p>
          </div>

          {/* Modern Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(160px,auto)]">
            
            {/* Card 1: Premium Design (Large 4x2) */}
            <div className="md:col-span-4 md:row-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-slate-50 to-transparent opacity-50"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="mb-6 md:mb-8">
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl md:text-2xl mb-4 md:mb-6">
                      <FaMobileScreen />
              </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">Premium Mobile-First Design</h3>
                   <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
                      Your blog comes with a high-end, magazine-style layout that looks stunning on every device. Optimized for speed and reading experience.
                   </p>
                </div>
                
                {/* Abstract UI Mockup */}
                <div className="flex flex-wrap gap-3 md:gap-4 mt-2 md:mt-4">
                   <div className="bg-slate-900 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-white text-[10px] md:text-xs font-bold">Mobile Ready</div>
                   <div className="bg-green-50 text-green-700 rounded-xl px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span> 99/100 Speed Score
                </div>
              </div>
            </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            </div>

            {/* Card 2: SEO (Small 2x1) */}
            <div className="md:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <FaArrowTrendUp />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">SEO Pre-Configured</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Sitemap, Schema, and Google Search Console setup included.</p>
            </div>

            {/* Card 3: Admin Panel (Small 2x1) */}
            <div className="md:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg md:text-xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <HiOutlineCog6Tooth />
                     </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">Easy Admin Panel</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Manage posts and ads as easily as posting on Facebook.</p>
            </div>

            {/* Card 4: AdSense Ready (Wide 3x1) */}
            <div className="md:col-span-3 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-lg relative overflow-hidden group text-white">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#68b13d] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
               <div className="relative z-10">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 text-[#68b13d] flex items-center justify-center text-lg md:text-xl border border-white/10">
                        <FaMoneyBillWave />
               </div>
                     <span className="px-2 py-1 md:px-3 rounded-full bg-[#68b13d]/20 text-[#68b13d] text-[10px] md:text-xs font-bold uppercase tracking-wider border border-[#68b13d]/20">High CTR</span>
            </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">AdSense Optimized</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">Strategic ad placements built into the theme to maximize your click-through rate and earnings.</p>
               </div>
            </div>

            {/* Card 5: Tech Stack (Wide 3x1) */}
            <div className="md:col-span-3 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
               <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-lg md:text-xl">
                        <FaServer />
          </div>
                     <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                           <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] md:text-[10px] font-bold text-slate-400">
                              {i === 1 ? 'H' : i === 2 ? 'D' : 'S'}
        </div>
                        ))}
        </div>
          </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">Hosting & Domain</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">We guide you through purchasing the best affordable hosting. You own 100% of your assets.</p>
               </div>
            </div>

            {/* Card 6: Support (Full Width Strip on Mobile, Col on Desktop - Adjusted for grid) */}
            <div className="md:col-span-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative z-10 text-center md:text-left">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 flex items-center justify-center text-xl md:text-2xl backdrop-blur-sm">
                     <FaHeadset />
               </div>
                  <div>
                     <h3 className="text-xl md:text-2xl font-bold mb-1">Lifetime WhatsApp Support</h3>
                     <p className="text-indigo-100 text-sm">Stuck? We are just a message away to help you fix issues.</p>
            </div>
               </div>
               <button className="relative z-10 w-full md:w-auto px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                  Chat With Us
               </button>
            </div>

               </div>
            </div>
      </section>

      {/* SECTION 5 — 4-STEP PROCESS (Connected Flow Vibe) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-slate-900 text-white">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[20%] left-[10%] w-[800px] h-[800px] bg-[#68b13d]/10 rounded-full blur-[120px]"></div>
          </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-24">
            <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4 block">Simple Process</span>
            <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6">
              From Idea to Income <br/>
              <span className="text-[#68b13d]">In 4 Simple Steps</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0"></div>
            {/* Connecting Line (Mobile) - Vertical */}
            <div className="md:hidden absolute top-0 left-8 w-1 h-full bg-slate-800 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
               {[
                  { 
                     step: "01", 
                     title: "Choose Plan", 
                     desc: "Select the package that fits your goals. No hidden fees.", 
                     icon: <FaRocket />,
                     color: "bg-blue-500"
                  },
                  { 
                     step: "02", 
                     title: "We Build It", 
                     desc: "Our experts set up design, SEO, and essential pages.", 
                     icon: <FaWandMagicSparkles />,
                     color: "bg-purple-500" 
                  },
                  { 
                     step: "03", 
                     title: "Launch Live", 
                     desc: "Connect domain & hosting. Your site goes live instantly.", 
                     icon: <FaGlobe />,
                     color: "bg-pink-500"
                  },
                  { 
                     step: "04", 
                     title: "Start Earning", 
                     desc: "Post content, get traffic, and monetize with AdSense.", 
                     icon: <FaPenNib />,
                     color: "bg-[#68b13d]"
                  }
               ].map((item, i) => (
                  <div key={i} className="group relative flex md:block items-start gap-6">
                     {/* <div className={`w-16 h-16 flex-shrink-0 rounded-2xl ${item.color} flex items-center justify-center text-2xl md:text-3xl text-white mb-0 md:mb-6 shadow-lg shadow-${item.color}/30 z-10 relative`}>
                        {item.icon}
                      </div> */}
                     <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 hover:border-[#68b13d] transition-all duration-300 hover:-translate-y-2 flex-1 relative overflow-hidden">
                        <div className="text-4xl md:text-5xl font-black text-slate-700 mb-2 md:mb-4 opacity-50 absolute top-4 right-4 md:top-6 md:right-6 select-none">{item.step}</div>
                        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 5.5 — CLIENT REVIEWS (Premium Dark Cinematic Vibe) */}
      <section className="py-20 md:py-32 px-4 sm:px-6 bg-[#050505] relative overflow-hidden">
         {/* Ambient Background Effects */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#68b13d]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#68b13d]/10 rounded-full blur-[120px]"></div>
         </div>

         <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
               <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                     <span className="flex h-2 w-2 rounded-full bg-[#68b13d]"></span>
                     <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm">Wall of Love</span>
                  </div>
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                     Real People. <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#8bc85a]">Real Earnings.</span>
                  </h2>
               </div>
               <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                     <div className="text-3xl font-black text-white">4.9/5</div>
                     <div className="text-sm text-slate-400">Average Rating</div>
                  </div>
                  <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-slate-800 relative overflow-hidden">
                           <div className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900`}></div>
                        </div>
                     ))}
                     <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-[#68b13d] flex items-center justify-center text-white font-bold text-xs">
                        +2k
                     </div>
                  </div>
               </div>
            </div>

            {/* Premium Video Grid */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
               {[
                  {
                     name: "Rahul Sharma",
                     role: "Tech Reviewer",
                     earnings: "₹45,000",
                     period: "per month",
                     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     quote: "I replaced my salary in 3 months."
                  },
                  {
                     name: "Priya Patel",
                     role: "Food Blogger",
                     earnings: "₹82,000",
                     period: "per month",
                     image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     quote: "Brands now pay me to post recipes."
                  },
                  {
                     name: "Amit Verma",
                     role: "Crypto Analyst",
                     earnings: "₹1.2 Lakh",
                     period: "per month",
                     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     quote: "My traffic doubled after the redesign."
                  }
               ].map((client, i) => (
                  <div key={i} className="group relative h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 hover:border-[#68b13d]/50 transition-all duration-500 cursor-pointer">
                     
                     {/* Background Image with Zoom Effect */}
                     <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                        <Image 
                           src={client.image} 
                           alt={client.name}
                           fill
                           className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        {/* Cinematic Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                     </div>

                     {/* Play Button (Centered) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#68b13d] group-hover:border-[#68b13d] transition-colors shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                           <FaPlay className="ml-1 text-2xl" />
                        </div>
                     </div>

                     {/* Content Content (Bottom) */}
                     <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        
                        {/* Earnings Tag */}
                        <div className="inline-flex items-center gap-2 bg-[#68b13d] text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-green-900/50">
                           <FaArrowTrendUp />
                           <span>Earning {client.earnings}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                           &ldquo;{client.quote}&rdquo;
                        </h3>
                        
                        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/10">
                           <div>
                              <div className="font-bold text-white text-lg">{client.name}</div>
                              <div className="text-[#68b13d] text-sm font-medium">{client.role}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* Trust Strip */}
            {/* <div className="mt-16 md:mt-24 py-8 border-y border-white/5 flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {['Google', 'AdSense', 'WordPress', 'Hostinger'].map((brand, i) => (
                  <div key={i} className="text-xl md:text-2xl font-black text-white/50 uppercase tracking-widest select-none">
                     {brand}
                  </div>
               ))}
            </div> */}

         </div>
      </section>

      {/* SECTION 6 — URGENCY (Reality Check Vibe) */}
      <section className="py-16 md:py-32 px-4 sm:px-6 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
           
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             
             {/* Left: The Cost of Waiting */}
             <div className="relative">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                   Why Starting <span className="text-red-500 underline decoration-4 decoration-red-200 underline-offset-4">Today</span> Matters
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-10">
                   Every day you wait, a keyword gets taken, a niche gets filled, and a competitor gets ahead.
                </p>
                
                <div className="space-y-4 md:space-y-6">
                   {[
                      { title: "Traffic Opportunity", status: "High", trend: "Declining for late entrants", color: "text-orange-500" },
                      { title: "Competition Level", status: "Low", trend: "Increasing daily", color: "text-green-600" },
                      { title: "Google Trust Score", status: "Zero", trend: "Takes months to build (Start Now)", color: "text-slate-500" },
                   ].map((stat, i) => (
                      <div key={i} className="bg-slate-50 p-4 md:p-6 rounded-2xl border border-slate-100 flex justify-between items-center">
                         <div>
                            <div className="font-bold text-slate-900 text-base md:text-lg">{stat.title}</div>
                            <div className="text-xs md:text-sm text-slate-500">{stat.trend}</div>
                      </div>
                         <div className={`font-black text-lg md:text-xl ${stat.color}`}>{stat.status}</div>
                   </div>
                   ))}
             </div>
          </div>

             {/* Right: The Reward */}
             <div className="relative bg-[#68b13d] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-white shadow-2xl shadow-green-200/50 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <div className="relative z-10">
                   <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 md:px-6 md:py-2 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8">
                      Future Projection
        </div>
                   <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6">
                      Imagine 12 Months From Now
                   </h3>
                   <div className="text-5xl md:text-7xl font-black mb-2 md:mb-4">₹50k+</div>
                   <p className="text-base md:text-lg text-green-100 mb-8 md:mb-10">Monthly Passive Income</p>
                   
                   <ul className="text-left space-y-3 md:space-y-4 mb-8 md:mb-10 max-w-sm mx-auto pl-4 md:pl-0">
                      <li className="flex items-center gap-3">
                         <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#68b13d]"><FaCheck size={10}/></div>
                         <span className="font-bold text-sm md:text-base">Financial Freedom</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#68b13d]"><FaCheck size={10}/></div>
                         <span className="font-bold text-sm md:text-base">Work From Anywhere</span>
                      </li>
                      <li className="flex items-center gap-3">
                         <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center text-[#68b13d]"><FaCheck size={10}/></div>
                         <span className="font-bold text-sm md:text-base">Be Your Own Boss</span>
                      </li>
                   </ul>

                   <button className="w-full bg-white text-[#68b13d] font-black text-base md:text-lg py-3 md:py-4 rounded-xl shadow-lg hover:bg-green-50 transition-colors">
                      Claim This Future
                   </button>
                      </div>
                   </div>

                         </div>
                         </div>
      </section>

      {/* SECTION 7 — PRICING (No-Brainer Deal Vibe) */}
      <section id="pricing" className="py-16 md:py-32 px-4 sm:px-6 bg-[#f8f9fa] relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6">
                One Price. <span className="text-[#68b13d]">Everything Included.</span>
             </h2>
             <p className="text-lg md:text-xl text-slate-600">No monthly fees. No hidden charges. Just a one-time investment.</p>
                      </div>

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#68b13d] via-[#8bc85a] to-[#68b13d]"></div>
             
             <div className="grid md:grid-cols-12">
                
                {/* Left: Value Stack */}
                <div className="md:col-span-7 p-6 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
                   <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">What You Get Today:</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
                      {[
                         "Premium Blog Design",
                         "Mobile Responsive Layout",
                         "SEO Optimization Setup",
                         "Google Search Console",
                         "Google Analytics",
                         "AdSense Ready Structure",
                         "Essential Pages (About, Contact)",
                         "Speed Optimization",
                         "Social Media Integration",
                         "WhatsApp Support Access",
                         "Hosting Setup Guide",
                         "Domain Connection"
                         ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-[#68b13d] flex items-center justify-center text-xs font-bold">
                               <FaCheck />
                            </div>
                            <span className="text-slate-600 font-medium text-sm">{feature}</span>
                            </div>
                         ))}
                      </div>

                   <div className="mt-8 md:mt-10 p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#68b13d]/10 flex items-center justify-center text-[#68b13d] text-xl md:text-2xl">
                            <FaHandshake />
                      </div>
                         <div>
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">100% Hand-Held Process</h4>
                            <p className="text-xs md:text-sm text-slate-500">We do the technical work. You focus on content.</p>
                         </div>
                         </div>
                         </div>
                      </div>

                {/* Right: Price & CTA */}
                <div className="md:col-span-5 p-8 md:p-14 bg-slate-50 flex flex-col justify-center items-center text-center relative overflow-hidden">
                   <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#68b13d]/10 rounded-full blur-3xl"></div>
                   
                   <div className="inline-block bg-red-100 text-red-600 font-bold text-[10px] md:text-xs px-3 py-1 md:px-4 md:py-1 rounded-full uppercase tracking-wide mb-4 md:mb-6">
                      Limited Time Offer
                </div>

                   <div className="mb-1 md:mb-2 text-slate-400 line-through text-lg md:text-xl font-semibold">₹12,499</div>
                   <div className="text-5xl md:text-6xl font-black text-slate-900 mb-1 md:mb-2">₹4,999</div>
                   <div className="text-green-600 font-bold text-xs md:text-sm mb-6 md:mb-8">Save ₹7,500 (60% OFF)</div>
                   
                   <a href="#contact" className="w-full block bg-[#68b13d] text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-xl shadow-xl shadow-green-600/20 hover:bg-[#5a9a33] transition-all transform hover:-translate-y-1">
                      Get Started Now
                   </a>
                   
                   <p className="text-[10px] md:text-xs text-slate-400 mt-4 md:mt-6 flex items-center gap-1">
                      <FaRegClock /> Offer valid for limited slots only
                   </p>
             </div>

             </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-black text-white py-20 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center mb-20">
            {/* Brand Logo */}
            <div className="text-3xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Bloglft.
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
                <a 
                  href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1DA1F2] transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#E1306C] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#0077B5] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#FF0000] transition-all duration-300 group"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Big Text Bottom */}
          <div className="border-t border-white/10 pt-20">
            <h2 className="text-[12vw] leading-none font-black text-center tracking-tighter text-white/5 hover:text-white/10 transition-colors duration-500 select-none cursor-default">
              BUILD WITH BLOGLFT
            </h2>
          </div>
          
          <div className="text-center text-slate-500 text-sm mt-8">
            &copy; {new Date().getFullYear()} Bloglft. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
