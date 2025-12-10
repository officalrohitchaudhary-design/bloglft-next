"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChartLine, FaMoneyBillWave, FaHandshake, FaArrowTrendUp, FaRegClock, FaRegCircleCheck, FaRegCircleXmark, FaArrowRight, FaMobileScreen, FaGaugeHigh, FaServer, FaHeadset, FaRocket, FaWandMagicSparkles, FaGlobe, FaPenNib, FaCheck, FaXmark, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPlay, FaHouseUser, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineLink, HiOutlineCog6Tooth, HiOutlineRocketLaunch, HiOutlineCurrencyRupee, HiOutlineUserGroup } from "react-icons/hi2";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// https://blogvoom-backend.onrender.com
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
      <div className="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-6 text-left shadow-2xl transition-all sm:p-8 animate-in fade-in zoom-in duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors z-10"
        >
           <FaXmark className="h-5 w-5" />
        </button>

        {/* Earn First Pay Later Content */}
        <div className="text-center">
            
            {/* Animated Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/30 transform rotate-3 hover:rotate-6 transition-transform">
               <FaRocket className="text-4xl text-white" />
            </div>

            <div className="inline-block bg-yellow-100 text-yellow-800 font-bold px-3 py-1 rounded-full text-xs mb-4 uppercase tracking-wider">
                Limited Time Launch Offer
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
                पहले कमाओ <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">बाद में पैसे दो</span>
            </h3>
            
            <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed mt-4 mb-8 max-w-sm mx-auto">
                पहले वेबसाइट लॉन्च करो, जब पैसा आना शुरू हो जाएगा <br/>
                तब बाद में <span className="text-slate-900 font-black">₹4999</span> दे देना। <br/>
                <span className="block mt-2 text-indigo-600 font-bold">
                   अभी सिर्फ ₹199 में Starter Pack जॉइन करें (14 Days Refundable)
                </span>
            </p>

            {/* Value Stack */}
            <div className="bg-slate-50 rounded-2xl p-5 mb-8 text-left border border-slate-100">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">You Get Instantly:</div>
               <ul className="space-y-3">
                  {[
                     "30-Min Strategy Call (Value ₹2000)",
                     "Niche Selection Guide (Value ₹1000)",
                     "Website Roadmap (Value ₹1500)",
                     "Guaranteed 80% Discount"
                  ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                           <FaCheck />
                        </div>
                        {item}
                     </li>
                  ))}
               </ul>
            </div>

            {/* Big CTA */}
            <a 
               href="https://wa.me/6284563903?text=I%20want%20to%20join%20Starter%20Pack%20for%20199"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-lg py-4 rounded-xl shadow-xl shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group"
            >
               <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
               <span className="relative z-10 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-2xl" />
                  Join Starter Pack @ ₹199
               </span>
            </a>

            <p className="text-xs text-slate-400 mt-4">
               100% Refundable if you don't like the plan.
            </p>
        </div>
      </div>
    </div>
  );
}

export default function V3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden font-sans" style={{background: '#ffffff'}}>

      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header />
      {/* SECTION 1 — HERO (Clean & Modern Design) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        {/* Premium Background Glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#68b13d]/10 to-transparent rounded-[100%] blur-[100px] opacity-60"></div>
          <div className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#8bc85a]/10 blur-[120px]"></div>
          <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#68b13d]/10 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto w-full max-w-6xl z-10">
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
                 {/* <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-[#68b13d]">Verified</span> */}
                 <span className="text-xs md:text-sm font-bold text-slate-700 truncate"> 2,000+ लोगों का भरोसा</span>
              </div>
            </div>

            {/* Main Heading - Big Brand Typography */}
            <h1 className="space-y-2 md:space-y-6">
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] md:leading-[0.95]">
                अपनी खुद की कमाई करने 
              </span>
              <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-[0.95]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#68b13d] via-[#5a9a33] to-[#4d8a2a] text-[31px] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-[0.95]">
                वाली वेबसाइट लॉन्च करें
                </span>
              </span>
              <span className="block text-lg sm:text-2xl md:text-4xl font-medium text-slate-500 mt-6 md:mt-8 max-w-3xl mx-auto leading-relaxed">
                 <span className="font-black text-slate-900 relative inline-block">
                  Google Ads  
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-[#68b13d]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span> के साथ कमाई शुरू करें — 
                घर बैठे-बैठे।
                {/* बिना किसी कोडिंग के। */}
              </span>
            </h1>
            
            {/* CTAs - High Conversion */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center pt-6 md:pt-8">
              <a
                href="#pricing"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-[#68b13d] text-white font-bold text-lg md:text-xl px-8 py-4 md:px-10 md:py-5 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(104,177,61,0.5)] overflow-hidden"
              >
                <span className="relative z-10">अभी शुरू करें </span>
                <svg className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Button Shine Effect */}
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
              </a>
              
              {/* <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500">
                 <svg className="w-4 h-4 md:w-5 md:h-5 text-[#68b13d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 <span>No Credit Card Required</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-16 md:py-32 px-4 sm:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
            {/* header */}
          <div className="text-center  mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
              कैसे काम करता है? <span className="text-[#68b13d] underline decoration-4 decoration-[#68b13d]/20 underline-offset-8"> (1 मिनट में समझें)</span>
            </h2>
          </div>
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

        
      {/* SECTION — SIMPLE STEPS (Easy to understand points) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#68b13d]"></span>
              Why Choose Us?
            </div> */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              💡 आसान स्टेप्स <span className="text-[#68b13d]">(Simple Points)</span>
            </h2>
          </div>

          {/* Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "हम आपके लिए पूरी वेबसाइट सेटअप कर देंगे",
                icon: <FaWandMagicSparkles />,
                bg: "bg-blue-50",
                color: "text-blue-600"
              },
              {
                text: "Google Ads से कमाई कैसे होती है, हम आपको समझाएँगे",
                icon: <FaMoneyBillWave />,
                bg: "bg-green-50",
                color: "text-green-600"
              },
              {
                text: "SEO-फ्रेंडली और मोबाइल-फ्रेंडली ब्लॉग तैयार मिलेगा",
                icon: <FaMobileScreen />,
                bg: "bg-purple-50",
                color: "text-purple-600"
              },
              {
                text: "आपको किसी टेक्निकल नॉलेज की जरूरत नहीं",
                icon: <FaRegCircleCheck />,
                bg: "bg-orange-50",
                color: "text-orange-600"
              },
              {
                text: "कम निवेश में घर बैठे ऑनलाइन कमाई शुरू करें",
                icon: <FaHouseUser />,
                bg: "bg-teal-50",
                color: "text-teal-600"
              },
              {
                text: "लाइफटाइम सपोर्ट और गाइडेंस उपलब्ध",
                icon: <FaHeadset />,
                bg: "bg-rose-50",
                color: "text-rose-600"
                  }
               ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`shrink-0 w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xl`}>
                        {item.icon}
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-lg leading-tight pt-1">
                    {item.text}
                  </p>
                      </div>
                   </div>
                ))}
             </div>

        </div>
      </section>

   {/* SECTION — CALENDLY CTA (Book Meeting) */}
   <section className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[#006BFF] shadow-2xl shadow-blue-500/30 group hover:scale-[1.02] transition-transform duration-300">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Text Content */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-white text-xs md:text-sm font-bold uppercase tracking-wider mb-4 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Video Call Available
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Face-to-Face <br/>
                <span className="text-blue-100">Meeting Book करें</span>
              </h2>
              <p className="text-white/90 text-lg font-medium max-w-md mx-auto md:mx-0">
                 सीधे हमारे एक्सपर्ट्स के साथ 1:1 वीडियो कॉल पर बात करें और अपने सारे सवाल पूछें।
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <a 
                href="https://calendly.com/singhmak305/30min" // Replace with actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#006BFF] font-black text-xl px-8 py-5 rounded-2xl shadow-xl hover:bg-blue-50 transition-all transform group-hover:-translate-y-1"
              >
                <FaRegClock className="text-3xl" />
                <span>Book Free Call</span>
              </a>
              <p className="text-white/70 text-xs mt-3 font-medium">15 min free consultation</p>
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
               <div className="max-w-5xl">
                  {/* <div className="flex items-center gap-3 mb-4">
                     <span className="flex h-2 w-2 rounded-full bg-[#68b13d]"></span>
                     <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm">Wall of Love</span>
                  </div> */}
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                  लोगों का भरोसा
                  <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#8bc85a]">असली लोग, असली सफलता</span>
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
                     role: "फिटनेस ब्लॉगर",
                     earnings: "₹80,000",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w4.webp",
                     quote: "सिर्फ 3 महीने में मैंने अपनी सैलरी जितनी कमाई शुरू कर दी"
                  },
                  {
                     name: "Priya Patel",
                     role: "फूड ब्लॉगर",
                     earnings: "₹82,000",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w3.webp",
                     quote: "अब ब्रांड्स मुझे रेसिपी पोस्ट करने के पैसे देते हैं।"
                  },
                  {
                     name: "Amit Verma",
                     role: "क्रिप्टो एनालिस्ट",
                     earnings: "₹1.2 Lakh",
                     period: "per month",
                     // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                     image: "/images/w7.webp",
                     quote: "रीडिज़ाइन के बाद मेरा ट्रैफ़िक दोगुना हो गया"
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
                           <span>कमाई {client.earnings}</span>
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


      {/* SECTION — EARN FIRST PAY LATER (New CTA) */}
      <section className="py-8 px-4 sm:px-6">
         <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 shadow-2xl shadow-indigo-500/30 group hover:scale-[1.02] transition-transform duration-300">
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
               
               {/* Text Content */}
               <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-wider mb-4 border border-yellow-300 shadow-lg animate-pulse">
                     <span className="w-2 h-2 rounded-full bg-yellow-900"></span>
                     Special Offer
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                     कमाई पहले, 
                     <span className="text-yellow-400"> पेमेंट बाद में</span>
                  </h2>
                  <p className="text-indigo-100 text-lg font-medium max-w-xl mx-auto md:mx-0 leading-relaxed">
                     वेबसाइट लॉन्च करने से पहले, हम आपको देते हैं <span className="text-white font-bold border-b border-yellow-400/50">30-मिनट का स्टार्टर एक्टिवेशन सेशन</span> — सिर्फ <span className="text-yellow-400 font-black text-2xl">₹199</span> में।
                  </p>
                  <p className="text-white/60 text-sm mt-4 italic">
                     *सीखें कि कैसे आपकी वेबसाइट पहले दिन से ही कमाई के लिए तैयार होगी।
                  </p>
               </div>

               {/* CTA Button */}
               <div className="shrink-0 flex flex-col items-center">
                  <a 
                     href="https://wa.me/6284563903?text=I%20want%20Starter%20Activation%20Session%20for%20199" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 bg-yellow-400 text-yellow-900 font-black text-xl px-8 py-5 rounded-2xl shadow-[0_10px_20px_rgba(250,204,21,0.3)] hover:bg-yellow-300 transition-all transform group-hover:-translate-y-1 relative overflow-hidden"
                  >
                     {/* Shine Effect */}
                     <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform animate-[shimmer_2s_infinite]"></div>
                     
                     <FaRocket className="text-2xl" />
                     <span>अभी बुक करें ₹199</span>
                  </a>
                  <p className="text-indigo-200 text-xs mt-3 font-medium">Limited slots available today</p>
               </div>

            </div>
         </div>
      </section>

      <section className="py-16 md:py-32 px-4 sm:px-6 bg-white relative">
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header */}
    <div className="text-center mx-auto mb-12 md:mb-20">
      <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
      आपकी लाइफ का सबसे  <span className="text-[#68b13d] underline decoration-4 decoration-[#68b13d]/20 underline-offset-8">पावरफुल इनकम सोर्स</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
      जब आप सो रहे होते हैं… तब भी जो कमाए—ऐसा डिजिटल एसेट बनाएं।
      </p>
    </div>

    {/* Comparison & Opportunity Section */}
    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
      
      {/* Comparison Table */}
      <div className="lg:col-span-7 bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 border border-slate-100">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-10">ब्लॉगिंग वेबसाइट vs सोशल मीडिया (youtube)</h3>
        <div className="space-y-4 md:space-y-6">
          {[
            { label: "चेहरा / कैमरा चाहिए?", blog: "नहीं", social: "हाँ" },
            { label: "कंटेंट कितने समय तक चलता है?", blog: "सालों तक", social: "कुछ घंटे" },
            { label: "कमाई के मौके", blog: "बहुत ज्यादा", social: "बहुत कम" },
            { label: "ओनरशिप", blog: "100% आपकी", social: "प्लेटफॉर्म की" },
            { label: "प्रतिस्पर्धा", blog: "कम", social: "बहुत ज्यादा" },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between py-3 md:py-4 border-b border-slate-200 last:border-0">
              <span className="font-bold text-slate-700 text-sm md:text-lg flex-1">{row.label}</span>
              <div className="flex items-center gap-2 md:gap-8 text-right">
                <div className="w-16 md:w-24 hidden sm:block">
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase block mb-1">सोशल मीडिया</span>
                  <span className="font-bold text-red-500 bg-red-50 px-2 py-1 rounded-full text-xs md:text-sm">{row.social}</span>
                </div>
                <div className="w-20 md:w-24 border-l border-slate-200 pl-2 md:pl-8">
                  <span className="text-[10px] md:text-xs font-bold text-[#68b13d] uppercase block mb-1">ब्लॉगिंग वेबसाइट</span>
                  <span className="font-bold text-[#68b13d] bg-[#68b13d]/10 px-2 py-1 rounded-full text-xs md:text-sm">{row.blog}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Golden Era Callout */}
      <div className="lg:col-span-5 bg-[#1a1a1a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#68b13d] rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#68b13d]/20 text-[#68b13d] font-bold text-[10px] md:text-xs uppercase tracking-wider mb-4 md:mb-6 border border-[#68b13d]/30">
            मार्केट अवसर
          </span>
          <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
            2026 ब्लॉगिंग का <br/>
            <span className="text-[#68b13d]">सुनेहरा दौर है</span>
          </h3>
          <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
            AI टूल्स और भारत में तेजी से बढ़ते इंटरनेट यूज़र्स की वजह से, आज ब्लॉग शुरू करना पहले से 10 गुना आसान और ज्यादा मुनाफ़ेदार है।
          </p>
          <a href="#pricing" className="inline-flex items-center gap-3 font-bold text-white group hover:text-[#68b13d] transition-colors">
            अपनी ब्लॉगिंग वेबसाइट शुरू करें
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#68b13d] group-hover:text-white transition-all">
              <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </a>
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
        एक ही कीमत। <span className="text-[#68b13d]">सब कुछ शामिल।</span>
      </h2>
      <p className="text-lg md:text-xl text-slate-600">
        ना कोई मंथली फीस। ना कोई छिपा चार्ज। सिर्फ एक बार की स्मार्ट इन्वेस्टमेंट।
      </p>
    </div>

    <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#68b13d] via-[#8bc85a] to-[#68b13d]"></div>

      <div className="grid md:grid-cols-12">

        {/* LEFT SIDE */}
        <div className="md:col-span-7 p-6 md:p-14 border-b md:border-b-0 md:border-r border-slate-100">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8">आज आपको क्या-क्या मिलेगा:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:gap-y-4 gap-x-8">
            {[
              "प्रीमियम ब्लॉग डिज़ाइन",
              "मोबाइल रेस्पॉन्सिव लेआउट",
              "SEO ऑप्टिमाइज़ेशन सेटअप",
              "Google Search Console इंटीग्रेशन",
              "Google Analytics सेटअप",
              "AdSense-रेडी स्ट्रक्चर",
              "ज़रूरी पेजेज (About, Contact)",
              "स्पीड ऑप्टिमाइज़ेशन",
              "सोशल मीडिया इंटीग्रेशन",
              "WhatsApp सपोर्ट एक्सेस",
              "होस्टिंग सेटअप गाइड",
              "डोमेन कनेक्शन सपोर्ट"
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
                <h4 className="font-bold text-slate-900 text-sm md:text-base">100% हैंड-होल्ड प्रोसेस</h4>
                <p className="text-xs md:text-sm text-slate-500">टेक्निकल काम हम करते हैं। आप सिर्फ कंटेंट पर फोकस करें।</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-5 p-8 md:p-14 bg-slate-50 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#68b13d]/10 rounded-full blur-3xl"></div>

          <div className="inline-block bg-red-100 text-red-600 font-bold text-[10px] md:text-xs px-3 py-1 md:px-4 md:py-1 rounded-full uppercase tracking-wide mb-4 md:mb-6">
            Limited Time Offer
          </div>

          <div className="relative group cursor-default">
             <div className="mb-1 md:mb-2 text-slate-400 line-through text-lg md:text-xl font-semibold filter blur-[2px] opacity-50 group-hover:blur-0 transition-all duration-300">₹12,499</div>
             <div className="text-5xl md:text-6xl font-black text-slate-900 mb-1 md:mb-2 filter blur-md group-hover:blur-0 transition-all duration-500 select-none">₹4,999</div>
             
             {/* Overlay Text */}
             <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
               <span className="bg-[red] text-white px-4 py-2 rounded-lg font-bold text-sm md:text-base shadow-lg transform rotate-[-5deg] ">
                 पहले कमाओ — बाद में पैसे दो
               </span>
             </div>
          </div>

          <div className="text-green-600 font-bold text-xs md:text-sm mb-6 md:mb-8 mt-2">₹ 4999</div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full block bg-[#68b13d] text-white font-bold text-lg md:text-xl py-4 md:py-5 rounded-xl shadow-xl shadow-green-600/20 hover:bg-[#5a9a33] transition-all transform hover:-translate-y-1 relative overflow-hidden group/btn"
          >
            <span className="relative z-10">अभी शुरू करें</span>
            <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform group-hover/btn:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
          </button>

          <p className="text-[10px] md:text-xs text-slate-400 mt-4 md:mt-6 flex items-center gap-1">
            <FaRegClock /> ऑफर सीमित स्लॉट्स के लिए ही उपलब्ध
          </p>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* SECTION 6 — URGENCY (Reality Check Vibe) */}
           <section className="py-16 md:py-32 px-4 sm:px-6 relative bg-white hidden">
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

              {/* SECTION — WHATSAPP CTA (Instant Access) */}
              <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[#25D366] shadow-2xl shadow-green-500/30 group hover:scale-[1.02] transition-transform duration-300">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                 तुरंत जवाब 
                <br/>
                <span className="text-green-900">मुफ्त सलाह</span>
              </h2>
              <p className="text-white/90 text-lg font-medium max-w-md mx-auto md:mx-0">
              हमारी टीम आपसे सीधे बात करे
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <a 
                href="https://wa.me/6284563903" // Replace with actual number
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#25D366] font-black text-xl px-8 py-5 rounded-2xl shadow-xl hover:bg-green-50 transition-all transform group-hover:-translate-y-1"
              >
                <FaWhatsapp className="text-3xl" />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-white/70 text-xs mt-3 font-medium">Typically replies in &lt; 2 mins</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
