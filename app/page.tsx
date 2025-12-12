"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChartLine, FaMoneyBillWave, FaHandshake, FaArrowTrendUp, FaRegClock, FaRegCircleCheck, FaRegCircleXmark, FaArrowRight, FaMobileScreen, FaGaugeHigh, FaServer, FaHeadset, FaRocket, FaWandMagicSparkles, FaGlobe, FaPenNib, FaCheck, FaXmark, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPlay, FaHouseUser, FaWhatsapp } from "react-icons/fa6";
// import { HiOutlineLink, HiOutlineCog6Tooth, HiOutlineRocketLaunch, HiOutlineCurrencyRupee, HiOutlineUserGroup } from "react-icons/hi2";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ContactForm from "./components/ContactForm";
// https://blogvoom-backend.onrender.com
import PricingPage from "./components/pricing";

export default function V3() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group cursor-pointer">
            
            {/* Custom Thumbnail */}
            <div className="absolute inset-0 z-10">
               <Image 
                  src="/images/thumnail.png" // Replace with your actual thumbnail image path if different
                  alt="Video Thumbnail" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
               
               {/* Play Button Overlay */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-[red] rounded-full flex items-center justify-center pl-1 shadow-lg">
                     <FaPlay className="text-white text-3xl" />
                  </div>
               </div>
            </div>

            <iframe 
               className="w-full h-full relative z-20 opacity-0 pointer-events-none transition-opacity duration-500"
               src="https://www.youtube.com/embed/og-vt-oQrL8?si=-I9j0s5jzBMVGdm5&autoplay=1" 
               title="YouTube video player"  
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
               onLoad={(e) => {
                  // Simple logic: When iframe loads, we can't easily detect 'play' without YouTube API JS.
                  // For a pure CSS/React solution without external scripts, the best way is to hide thumbnail on click.
                  // We'll implement a simple onClick handler on the wrapper div.
               }}
            ></iframe>

            {/* Click Handler to Show Video */}
            <div 
               className="absolute inset-0 z-30"
               onClick={(e) => {
                  const container = e.currentTarget.parentElement;
                  const thumbnail = container?.querySelector('.absolute.inset-0.z-10') as HTMLElement;
                  const iframe = container?.querySelector('iframe') as HTMLIFrameElement;
                  
                  if (thumbnail && iframe) {
                     thumbnail.style.opacity = '0';
                     thumbnail.style.pointerEvents = 'none';
                     iframe.style.opacity = '1';
                     iframe.style.pointerEvents = 'auto';
                     // Reload iframe with autoplay to start video immediately
                     iframe.src += "&autoplay=1";
                     
                     // Hide this overlay div so it doesn't block interaction
                     (e.currentTarget as HTMLElement).style.display = 'none';
                  }
               }}
            ></div>
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
                text: "हम आपके लिए पूरी वेबसाइट बना कर दे देंगे",
                icon: <FaWandMagicSparkles />,
                bg: "bg-blue-50",
                color: "text-blue-600"
              },
              {
               text: "अपनी वेबसाइट आप मोबाइल से ही संभाल सकते हैं (लैपटॉप की ज़रूरत नहीं)",
               icon: <FaMobileScreen />,
               bg: "bg-blue-50",
               color: "text-blue-600"
             },
              {
                text: "Google Ads(वेबसाइट) से कमाई कैसे होती है, हम आपको समझाएँगे",
                icon: <FaMoneyBillWave />,
                bg: "bg-green-50",
                color: "text-green-600"
              },
              {
               text: "घर बैठे… बैठे ऑनलाइन कमाई शुरू करें (सिर्फ रोज़ 20–30 मिनट काफी)",
               icon: <FaHouseUser />,
               bg: "bg-teal-50",
               color: "text-teal-600"
             },
             {
               text: "आपको किसी टेक्निकल नॉलेज की जरूरत नहीं",
               icon: <FaRegCircleCheck />,
               bg: "bg-orange-50",
               color: "text-orange-600"
             },
              {
                text: "SEO-फ्रेंडली और मोबाइल-फ्रेंडली ब्लॉग तैयार मिलेगा",
                icon: <FaMobileScreen />,
                bg: "bg-purple-50",
                color: "text-purple-600"
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

      {/* SECTION 7 — EARN FIRST PAY LATER (New CTA) */}
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

            {/* Premium Video Grid - Horizontal Scroll Snap on Mobile, Grid on Desktop */}
            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
               {[
                  {
                     name: "Rahul Sharma",
                     role: "फिटनेस ब्लॉगर",
                     earnings: "₹80,000",
                     image: "/images/w4.webp",
                     quote: "सिर्फ 3 महीने में मैंने अपनी सैलरी जितनी कमाई शुरू कर दी"
                  },
                  {
                     name: "Priya Patel",
                     role: "फूड ब्लॉगर",
                     earnings: "₹82,000",
                     image: "/images/w3.webp",
                     quote: "अब ब्रांड्स मुझे रेसिपी पोस्ट करने के पैसे देते हैं।"
                  },
                  {
                     name: "Amit Verma",
                     role: "क्रिप्टो एनालिस्ट",
                     earnings: "₹1.2 Lakh",
                     image: "/images/w7.webp",
                     quote: "रीडिज़ाइन के बाद मेरा ट्रैफ़िक दोगुना हो गया"
                  }
               ].map((client, i) => (
                  <div key={i} className="group relative shrink-0 w-[85vw] sm:w-[350px] md:w-auto h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 hover:border-[#68b13d]/50 transition-all duration-500 cursor-pointer snap-center shadow-xl">
                     
                     {/* Background Image with Zoom Effect */}
                     <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                        <Image 
                           src={client.image} 
                           alt={client.name}
                           fill
                           className="object-cover opacity-80 md:opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        {/* Cinematic Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
                     </div>

                     {/* Shorts UI Overlay */}
                     <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-10">
                        {/* Top Controls */}
                        <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-0 opacity-100">
                           <div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-white/80 text-xs font-bold border border-white/10">
                              Shorts
                           </div>
                           <div className="flex flex-col gap-4">
                              <div className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#68b13d] transition-colors border border-white/10">
                                 <FaPlay />
                              </div>
                           </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <div className="inline-flex items-center gap-2 bg-[#68b13d] text-white px-3 py-1.5 rounded-full text-xs font-bold mb-4 shadow-lg shadow-green-900/50">
                              <FaArrowTrendUp />
                              <span>कमाई {client.earnings}</span>
                           </div>

                           <h3 className="text-xl md:text-3xl font-black text-white mb-2 leading-tight line-clamp-3">
                              &ldquo;{client.quote}&rdquo;
                           </h3>
                           
                           <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/20">
                              <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#68b13d] overflow-hidden relative">
                                  <Image src={client.image} alt={client.name} fill className="object-cover" />
                              </div>
                              <div>
                                 <div className="font-bold text-white text-base">{client.name}</div>
                                 <div className="text-[#68b13d] text-xs font-medium">{client.role}</div>
                              </div>
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

      {/* SECTION — SPECIAL OFFER CTA (Minimalist & Impactful) */}
      <section className="py-8 px-4 sm:px-6">
         <div className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-[2rem] bg-[#68b13d] shadow-2xl shadow-green-600/30 group hover:scale-[1.01] transition-transform duration-300">
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col items-center gap-6">
               
               <div className="space-y-4">
                  {/* <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
                     <span className="text-white text-xs font-bold uppercase tracking-widest">Limited Offer</span>
                  </div> */}
                  
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  कभी-कभी एक फैसला  <br className="md:hidden" />
                     <span className="text-yellow-300">ज़िंदगी बदल देता है</span>
                  </h2>

                  {/* <p className="text-white/90 text-lg md:text-xl font-medium max-w-xl mx-auto">
                  एक छोटा सा कदम… आपकी पूरी जिंदगी बदल सकता है।
                  </p> */}
               </div>

               <a 
                  href="#pricing" 
                  className="group relative inline-flex items-center gap-3 bg-white text-[#68b13d] font-black text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
               >
                  <span>आज शुरू करें</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  
                  {/* Ripple Effect */}
                  <span className="absolute -inset-2 rounded-full border-2 border-white/30 animate-ping opacity-75"></span>
               </a>

               <p className="text-white/60 text-sm font-medium">
               शायद यही आपका टर्निंग पॉइंट हो
               </p>

            </div>
         </div>
      </section>

            {/* SECTION 8 — PRICING */}
            <section id="pricing" className="bg-[#f8f9fa] relative">
      <PricingPage />
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

   {/* SECTION — CALENDLY CTA (Book Meeting) */}
   {/* <section className="py-8 px-4 sm:px-6 ">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-[#006BFF] shadow-2xl shadow-blue-500/30 group hover:scale-[1.02] transition-transform duration-300">
          
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
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
      </section> */}

      <Footer />
    </div>
  );
}
