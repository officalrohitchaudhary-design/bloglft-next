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
            <span className="text-[#68b13d] font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">हमारी कहानी</span>
            <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              {/* 10 सालों की <br/> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#68b13d] to-[#8bc85a]">ब्लॉगिंग में महारत</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
              हम सिर्फ डेवलपर्स नहीं हैं। हम वो ब्लॉगर्स हैं जिन्होंने अपने जुनून को पेशे में बदला है। और अब, हम आपकी मदद करने के लिए यहाँ हैं।
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
                    हमारा विजन
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    हमारा मानना है कि आर्थिक आज़ादी (Financial Freedom) मुश्किल नहीं होनी चाहिए। पिछले एक दशक में ब्लॉगिंग इंडस्ट्री पूरी तरह बदल चुकी है, और हमारा सपना है कि इस डिजिटल गोल्डमाइन को भारत और दुनिया भर के हर व्यक्ति के लिए सुलभ बनाया जाए।
                  </p>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    हमारा लक्ष्य <strong>10,000+ क्रिएटर्स</strong> को सशक्त बनाना है ताकि वे अपनी 9-5 की नौकरी छोड़ सकें और Google AdSense और ब्लॉगिंग के जरिए एक स्थायी पैसिव इनकम सोर्स बना सकें।
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-green-50 text-[#68b13d] flex items-center justify-center text-2xl mb-4">
                     <FaChartLine />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">ग्रोथ पर फोकस</h3>
                  <p className="text-slate-500 text-sm">हम उन रणनीतियों पर ध्यान देते हैं जो असली ट्रैफिक और रेवेन्यू लाती हैं।</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4">
                     <FaGoogle />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AdSense एक्सपर्ट्स</h3>
                  <p className="text-slate-500 text-sm">Google की मोनेटाइजेशन पॉलिसी और ऑप्टिमाइजेशन में हमें महारत हासिल है।</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-4">
                     <HiOutlineUserGroup />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">कम्युनिटी</h3>
                  <p className="text-slate-500 text-sm">सफल डिजिटल पब्लिशर्स का एक मजबूत नेटवर्क तैयार करना।</p>
               </div>
               <div className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl mb-4">
                     <FaLightbulb />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">इनोवेशन</h3>
                  <p className="text-slate-500 text-sm">SEO ट्रेंड्स और Google अपडेट्स में सबसे आगे रहना।</p>
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
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">एक दशक का सफर</h2>
               <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                  साधारण ब्लॉग्स के शुरुआती दिनों से लेकर आज के हाई-स्पीड, मोबाइल-फर्स्ट डिजिटल एसेट्स के दौर तक, हमने सब कुछ देखा है।
               </p>
            </div>

            <div className="space-y-12 hidden">
               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-[#68b13d]">2015</h3>
                     <div className="text-slate-500 font-bold">शुरुआत</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">हमने कंटेंट क्रिएटर्स की एक छोटी टीम के रूप में शुरुआत की। हमने प्रयोग करके, असफल होकर और अंततः सफल होकर SEO को कठिन तरीके से सीखा। हमने Google पर रैंक करने का कोड क्रैक कर लिया।</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-slate-900">2018</h3>
                     <div className="text-slate-500 font-bold">AdSense में महारत</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">हमने अपना ध्यान मोनेटाइजेशन (कमाई) पर लगाया। हमने 500 से अधिक क्लाइंट्स को AdSense अप्रूवल दिलाने में मदद की और अधिकतम CTR (क्लिक-थ्रू रेट) के लिए उनके लेआउट को ऑप्टिमाइज़ किया।</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-1/3 text-right md:text-right flex md:block flex-row-reverse items-center gap-4 md:gap-0">
                     <h3 className="text-4xl font-black text-[#68b13d]">2025</h3>
                     <div className="text-slate-500 font-bold">bvoom की लॉन्चिंग</div>
                  </div>
                  <div className="md:w-2/3 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                     <p className="text-slate-700">पेश है <strong>bvoom</strong>। हमने अपने 10 सालों के अनुभव को एक सरल "Business-in-a-Box" मॉडल में बदल दिया है। अब, कोई भी केवल 24 घंटों में एक प्रोफेशनल, कमाई के लिए तैयार ब्लॉग शुरू कर सकता है।</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-[#050505] text-white text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[#68b13d]/10 rounded-full blur-[150px] transform scale-150"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-6">क्या आप अपनी सफलता की कहानी लिखने के लिए तैयार हैं?</h2>
            <p className="text-slate-400 text-lg mb-10">
               एक और साल यूँ ही न जाने दें। उन क्रिएटर्स की कम्युनिटी में शामिल हों जो सोते समय भी कमाई कर रहे हैं।
            </p>
            <a
               href="/#pricing"
               className="inline-flex items-center gap-2 bg-[#68b13d] text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(104,177,61,0.5)]"
            >
               आज ही अपना ब्लॉग शुरू करें
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}

