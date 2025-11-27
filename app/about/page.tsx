"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChartLine, FaUsers, FaLightbulb, FaGoogle } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-white">
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-20 bg-[#050505] text-white text-center px-4 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#68b13d]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#68b13d]/10 rounded-full blur-[120px]"></div>
         </div>
         <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              10 Years of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#8bc85a]">Blogging Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              We aren't just developers. We are bloggers who turned a passion into a profession. Now, we're here to help you do the same.
            </p>
         </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#68b13d]/10 rounded-full blur-3xl"></div>
               <div className="relative bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                    Our Vision
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    We believe that financial freedom shouldn't be complicated. The blogging industry has transformed over the last decade, and our vision is to make this digital goldmine accessible to everyone in India and beyond.
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Our goal is to empower <strong>10,000+ creators</strong> to quit their 9-to-5 jobs and build sustainable, passive income streams through Google AdSense and blogging.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-green-50 text-[#68b13d] flex items-center justify-center text-2xl mb-4">
                     <FaChartLine />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Focused</h3>
                  <p className="text-slate-500 text-sm">We focus on strategies that drive real traffic and revenue.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4">
                     <FaGoogle />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AdSense Experts</h3>
                  <p className="text-slate-500 text-sm">Mastery over Google's monetization policies and optimization.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4">
                     <HiOutlineUserGroup />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Community</h3>
                  <p className="text-slate-500 text-sm">Building a strong network of successful digital publishers.</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl mb-4">
                     <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation</h3>
                  <p className="text-slate-500 text-sm">Staying ahead of SEO trends and Google updates.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey / Experience Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">A Decade of Dominance</h2>
               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                  From the early days of simple blogs to the modern era of high-speed, mobile-first digital assets, we have seen it all.
               </p>
            </div>

            <div className="space-y-12">
               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-[#68b13d]">2015</h3>
                     <div className="text-slate-500 font-bold">The Beginning</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">Started as a small team of content creators. We learned SEO the hard way—by experimenting, failing, and eventually succeeding. We cracked the code to ranking on Google.</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-slate-900">2018</h3>
                     <div className="text-slate-500 font-bold">Mastering AdSense</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">We shifted our focus to monetization. We helped over 500+ clients get AdSense approval and optimized their layouts for maximum CTR (Click-Through Rate).</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-[#68b13d]">2025</h3>
                     <div className="text-slate-500 font-bold">Bloglft Launch</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">Introducing <strong>Bloglft</strong>. We productized our 10 years of experience into a simple "Business-in-a-Box" model. Now, anyone can launch a professional, earning-ready blog in just 24 hours.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#050505] text-white text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[#68b13d]/10 rounded-full blur-[150px] transform scale-150"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-slate-400 text-lg mb-10">
               Don't let another year pass by. Join the community of creators who are earning while they sleep.
            </p>
            <a
               href="/#pricing"
               className="inline-flex items-center gap-2 bg-[#68b13d] text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(104,177,61,0.5)]"
            >
               Start My Blog Today
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}

