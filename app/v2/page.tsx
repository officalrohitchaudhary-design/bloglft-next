"use client";

import { useState } from "react";
import { FaBolt, FaWandMagicSparkles, FaArrowTrendUp, FaUserCheck, FaFingerprint, FaCheck, FaRegClock, FaXmark } from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactForm from "../components/ContactForm";


                   function GetStartedModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
                     if (!isOpen) return null;
                   
                     return (
                       <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
                         {/* Backdrop */}
                         <div 
                           className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                           onClick={onClose}
                         />
                         
                         {/* Modal Content */}
                         <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-6 text-left shadow-2xl transition-all sm:p-8 md:p-10 animate-in fade-in zoom-in duration-200">
                           
                           {/* Close Button */}
                           <button
                             onClick={onClose}
                             className="absolute right-4 top-4 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors z-10"
                           >
                              <FaXmark className="h-5 w-5" />
                           </button>
                   
                           <ContactForm onClose={onClose} isInModal={true} />
                         </div>
                       </div>
                     );
                     }
export default function V2() {
   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   
    <div className="min-h-screen overflow-x-hidden font-sans bg-white text-slate-900">
      <Header />
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      
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
                {["/images/men1.png", "/images/women1.png", "/images/men2.jpg"].map((url, i) => (
                  <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden relative">
                     <div className={`absolute inset-0 bg-gradient-to-br from-[#68b13d] to-[#4d8a2a] opacity-${100 - (i * 20)}`}>
                        <Image src={url} alt="Background Glow" width={100} height={100} className="w-full h-full object-cover" />
                     </div>
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
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black tracking-tight leading-[1.1] md:leading-[0.95]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#68b13d] via-[#5a9a33] to-[#4d8a2a]">
                Money-Making Blog
              </span>
              </span>
              <span className="block text-lg sm:text-2xl md:text-4xl font-medium text-slate-500 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
                Start earning with <span className="font-black text-slate-900 relative inline-block">
                  Google Ads
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
                <span className="relative z-10">Start Now</span>
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

      {/* SECTION 2 — BENEFITS (Redesigned) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
         <div className="absolute top-1/2 -left-24 w-64 h-64 bg-[#68b13d] rounded-full blur-[120px] opacity-[0.08]"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-[0.05]"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            
            <div className=" max-w-3xl mx-auto mb-16 md:mb-24">
               <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] mb-6 md:mb-8">
               Benefits of Launching <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#4d8a2a]">
                Own Blog website
                </span>
              </h2>
               {/* <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
               Benefits of Launching Your  <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-emerald-600">Own Blog website</span>
               </h2> */}
               <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  Stop wasting time on technical setup. We give you a complete, ready-to-earn platform so you can focus on growing.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               
               {/* Card 1: Start Earning (Highlight) */}
               <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group border border-slate-100 hover:border-slate-200 transition-all duration-300">
                  <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#68b13d]/5 to-transparent pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                     <div className="w-20 h-20 rounded-[2rem] bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-4xl text-[#68b13d] flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <FaBolt />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 group-hover:text-[#68b13d] transition-colors">Start Earning Faster</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                           Skip the months of learning. Your site is pre-optimized for Ads & Affiliate marketing. <br className="hidden md:block"/>
                           <span className="font-bold text-slate-900">Just publish → traffic → earn.</span>
                        </p>
                     </div>
                  </div>
               </div>

               {/* Card 2: Passive Income (Dark) */}
               <div className="bg-[#111] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group text-white flex flex-col justify-between min-h-[300px]">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#68b13d] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div>
                     <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-[#68b13d] mb-6 backdrop-blur-md border border-white/10">
                        <FaArrowTrendUp />
                     </div>
                     <h3 className="text-2xl font-bold mb-2">Passive Income</h3>
                     <p className="text-slate-400 leading-relaxed text-sm">Build a digital asset that works 24/7, even while you sleep.</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                     <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Potential</span>
                     <span className="text-[#68b13d] font-bold flex items-center gap-1">
                        High Growth <FaArrowTrendUp className="text-xs"/>
                     </span>
                  </div>
               </div>

               {/* Card 3: Zero Tech Skills */}
               <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                     <FaUserCheck />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Tech Skills</h3>
                  <p className="text-slate-500 leading-relaxed">
                     No coding. No technical headaches. We handle the hard part so you don&apos;t have to.
                  </p>
               </div>

               {/* Card 4: Personal Brand */}
               <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                     <FaFingerprint />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Your Brand Identity</h3>
                  <p className="text-slate-500 leading-relaxed">
                     Stand out with a professional website that carries your name and builds authority.
                  </p>
               </div>

               {/* Card 5: 100% Done For You (Wide) */}
               <div className="md:col-span-1 bg-gradient-to-br from-emerald-50 to-white rounded-[2.5rem] p-8 md:p-10 border border-emerald-100 hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#68b13d] rounded-full blur-[80px] opacity-10"></div>
                  <div className="relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-[#68b13d]/10 text-[#68b13d] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <FaWandMagicSparkles />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">100% Done-For-You</h3>
                     <ul className="space-y-2">
                        {['Premium Design', 'SEO Setup', 'Fast Hosting', 'Security'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#68b13d]"></span>
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

            </div>

            <div className="mt-20 text-center">
               <p className="text-2xl md:text-3xl font-black text-slate-900 italic relative inline-block">
                  <span className="absolute -top-6 -left-4 text-6xl text-slate-200 opacity-50 select-none">&quot;</span>
                  Iss se easy start kahin nahi milne wala.
                  <span className="absolute -bottom-8 -right-4 text-6xl text-slate-200 opacity-50 select-none rotate-180">&quot;</span>
               </p>
            </div>

         </div>
      </section>

      {/* SECTION 3 — BEFORE VS AFTER TABLE (Redesigned) */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-500 rounded-full blur-[120px] opacity-[0.05]"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#68b13d] rounded-full blur-[150px] opacity-[0.05]"></div>

         <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
               <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 text-slate-600 font-bold text-xs uppercase tracking-wider mb-6 border border-slate-300/50">
                  Transformation
               </span>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Before vs After <br/>
                  <span className="text-[#68b13d]">Launching Your Blog</span>
               </h2>
               <p className="text-lg text-slate-600">
                  See the transformation in your life.
               </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[4px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#68b13d] to-transparent opacity-50"></div>
               
               {/* Desktop Header (Hidden on Mobile) */}
               <div className="hidden md:grid grid-cols-12 bg-slate-900/95 text-white px-6 py-6 font-bold text-sm uppercase tracking-wider backdrop-blur-sm">
                  <div className="col-span-4 pl-4">Problem</div>
                  <div className="col-span-4 flex items-center justify-center gap-2 text-red-200">Before</div>
                  <div className="col-span-4 flex items-center justify-center gap-2 text-[#68b13d]">After</div>
               </div>

               {/* Mobile Header (Visible on Mobile) */}
               <div className="md:hidden grid grid-cols-3 bg-slate-900/95 text-white py-4 font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm sticky top-0 z-20">
                  <div className="flex items-center pl-4">Problem</div>
                  <div className="flex items-center justify-center text-red-200">Before</div>
                  <div className="flex items-center justify-center text-[#68b13d]">After</div>
               </div>

               {/* Table Rows */}
               <div className="divide-y divide-slate-100">
                  {[
                     { title: "Money Problem" },
                     { title: "No Personal Brand" },
                     { title: "Be Your Own Boss" },
                     { title: "Travel Freedom" },
                     { title: "Location Freedom" },
                     { title: "Career Direction" },
                     { title: "Job Tension" },
                     { title: "No Opportunities" }
                  ].map((item, i) => (
                     <div key={i} className="grid grid-cols-3 md:grid-cols-12 hover:bg-slate-50/50 transition-all duration-300 group">
                        
                        {/* Problem Title */}
                        <div className="col-span-1 md:col-span-4 flex items-center px-4 md:px-8 py-4 md:py-6 md:border-r border-slate-50">
                           <h3 className="text-xs md:text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-tight">{item.title}</h3>
                        </div>

                        {/* BEFORE Column */}
                        <div className="col-span-1 md:col-span-4 px-2 md:px-6 py-4 md:py-6 flex items-center justify-center bg-slate-50/30 group-hover:bg-red-50/10 transition-colors">
                           <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-base md:text-xl group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-red-100">
                              ✕
                           </div>
                        </div>

                        {/* AFTER Column */}
                        <div className="col-span-1 md:col-span-4 px-2 md:px-6 py-4 md:py-6 border-l border-slate-100 flex items-center justify-center bg-white group-hover:bg-[#68b13d]/5 transition-colors">
                           <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#68b13d]/10 text-[#68b13d] flex items-center justify-center text-base md:text-xl group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:shadow-emerald-100">
                              ✓
                           </div>
                        </div>

                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* SECTION 4 — WHAT EXACTLY YOU GET */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden text-slate-900">
         {/* Background Glows */}
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[150px] opacity-10"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-[150px] opacity-10"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
               <span className="inline-block py-1 px-3 rounded-full bg-slate-50/10 border border-slate-50/10 text-[#68b13d] font-bold text-xs uppercase tracking-wider mb-6 backdrop-blur-sm">
                  The Complete Package
               </span>
               <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  What Exactly <span className="text-slate-900">You Get?</span>
               </h2>
               <p className="text-lg text-slate-400">
                  You get a fully loaded, premium blog website with everything pre-installed.
               </p>
            </div>

            {/* Grid Content */}
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
                            <FaCheck />
                      </div>
                         <div>
                            <h4 className="font-bold text-slate-900 text-sm md:text-base">100% Hand-Held Process</h4>
                            <p className="text-xs md:text-sm text-slate-500">We do the technical work. You focus on content.</p>
                         </div>
                         </div>
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
                     {['/images/w4.webp', '/images/w3.webp', '/images/w7.webp'].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-[#050505] bg-slate-800 relative overflow-hidden">
                           {/* <div className={`absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900`}></div> */}
                           <Image src={i} alt="Client" fill className="object-cover" />
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
                     role: "Fitness Blogger",
                     earnings: "₹80,000",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w4.webp",
                     quote: "I replaced my salary in 3 months."
                  },
                  {
                     name: "Priya Patel",
                     role: "Food Blogger",
                     earnings: "₹82,000",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w3.webp",
                     quote: "Brands now pay me to post recipes."
                  },
                  {
                     name: "Amit Verma",
                     role: "Crypto Analyst",
                     earnings: "₹1.2 Lakh",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w7.webp",
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
                     {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#68b13d] group-hover:border-[#68b13d] transition-colors shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                           <FaPlay className="ml-1 text-2xl" />
                        </div>
                     </div> */}

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
                            <FaCheck />
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
                   
                   <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full block bg-[#68b13d] text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-xl shadow-xl shadow-green-600/20 hover:bg-[#5a9a33] transition-all transform hover:-translate-y-1"
                   >
                      Get Started Now
                   </button>
                   
                   <p className="text-[10px] md:text-xs text-slate-400 mt-4 md:mt-6 flex items-center gap-1">
                      <FaRegClock /> Offer valid for limited slots only
                   </p>
             </div>

             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
