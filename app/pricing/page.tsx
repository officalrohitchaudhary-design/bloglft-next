"use client";

import { useState } from "react";
import { 
  FaCheck, 
  FaWandMagicSparkles, 
  FaGift, 
  FaArrowRight 
} from "react-icons/fa6";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PricingPage() {
  const [showCouponPopup, setShowCouponPopup] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'starter' | 'pro'>('starter');

  const handleApplyCoupon = () => {
    setShowCouponPopup(false);
    setIsCouponApplied(true);
    // Auto select starter if free was selected to show the discount
    if (selectedPlan === 'free') {
        setSelectedPlan('starter');
    }
  };

  const handleMobileAction = () => {
    if (selectedPlan === 'free') {
        setShowCouponPopup(true);
    } else if (selectedPlan === 'starter') {
        const price = isCouponApplied ? '99' : '199';
        window.open(`https://wa.me/6284563903?text=I%20want%20to%20join%20Starter%20Pack%20for%20${price}`, '_blank');
    } else if (selectedPlan === 'pro') {
        const price = isCouponApplied ? '199' : '399';
        window.open(`https://wa.me/6284563903?text=I%20want%20to%20join%20AI%20Pro%20Pack%20for%20${price}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Header />

      {/* Main Content */}
      <main className="pt-24 pb-32 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
              सरल प्लान्स। <br/>
              <span className="text-[#68b13d]">आज ही कमाई शुरू करें।</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              अपने सपने को पूरा करने वाला प्लान चुनें। कोई छिपा हुआ चार्ज नहीं।
            </p>
          </div>

          {/* MOBILE VIEW (Selectable Cards) */}
          <div className="md:hidden flex flex-col gap-4">
             {/* Free Plan Mobile */}
             <div 
                onClick={() => setSelectedPlan('free')}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer bg-white
                    ${selectedPlan === 'free' ? 'border-slate-900 bg-slate-50' : 'border-slate-100'}
                `}
             >
                <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPlan === 'free' ? 'border-slate-900' : 'border-slate-300'}`}>
                        {selectedPlan === 'free' && <div className="w-3 h-3 rounded-full bg-slate-900" />}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900">फ्री प्लान</h3>
                        <p className="text-xs text-slate-500">शुरुआत करने वालों के लिए।</p>
                    </div>
                    <div className="text-right">
                        <div className="font-black text-slate-900 text-xl">₹0</div>
                    </div>
                </div>
                {selectedPlan === 'free' && (
                    <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-600"><FaCheck className="text-slate-900" /> बेसिक डैशबोर्ड एक्सेस</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><FaCheck className="text-slate-900" /> सीमित टेम्पलेट्स</div>
                    </div>
                )}
             </div>

             {/* Starter Plan Mobile */}
             <div 
                onClick={() => setSelectedPlan('starter')}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                    ${selectedPlan === 'starter' ? 'border-[#68b13d] bg-[#68b13d]/5' : 'border-slate-100 bg-white'}
                    ${isCouponApplied && selectedPlan === 'starter' ? 'shadow-[0_0_20px_rgba(104,177,61,0.3)] ring-1 ring-[#68b13d]' : ''}
                `}
             >
                {/* Popular Badge */}
                <div className="absolute top-0 right-0 bg-[#68b13d] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                    सबसे लोकप्रिय
                </div>

                <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPlan === 'starter' ? 'border-[#68b13d]' : 'border-slate-300'}`}>
                        {selectedPlan === 'starter' && <div className="w-3 h-3 rounded-full bg-[#68b13d]" />}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900">स्टार्टर प्लान</h3>
                        <p className="text-xs text-slate-500">नए ब्लॉगर्स के लिए बेस्ट।</p>
                    </div>
                    <div className="text-right">
                        {isCouponApplied && <div className="text-xs text-slate-400 line-through font-medium">₹199</div>}
                        <div className={`font-black text-xl ${isCouponApplied ? 'text-[#68b13d]' : 'text-slate-900'}`}>
                            {isCouponApplied ? '₹99' : '₹199'}
                        </div>
                    </div>
                </div>
                {selectedPlan === 'starter' && (
                    <div className="mt-3 pt-3 border-t border-[#68b13d]/20 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> पूरी वेबसाइट एक्सेस</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> एडमिन पैनल डेमो</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> अनलिमिटेड पोस्ट्स</div>
                    </div>
                )}
             </div>

             {/* AI Pro Plan Mobile */}
             <div 
                onClick={() => setSelectedPlan('pro')}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                    ${selectedPlan === 'pro' ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-100 bg-white'}
                    ${isCouponApplied && selectedPlan === 'pro' ? 'shadow-[0_0_20px_rgba(99,102,241,0.3)] ring-1 ring-indigo-500' : ''}
                `}
             >
                <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPlan === 'pro' ? 'border-indigo-500' : 'border-slate-300'}`}>
                        {selectedPlan === 'pro' && <div className="w-3 h-3 rounded-full bg-indigo-500" />}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 flex items-center gap-1">AI प्रो <FaWandMagicSparkles className="text-indigo-500 text-xs" /></h3>
                        <p className="text-xs text-slate-500">तेजी से ग्रोथ के लिए।</p>
                    </div>
                    <div className="text-right">
                        {isCouponApplied && <div className="text-xs text-slate-400 line-through font-medium">₹399</div>}
                        <div className={`font-black text-xl ${isCouponApplied ? 'text-indigo-600' : 'text-slate-900'}`}>
                            {isCouponApplied ? '₹199' : '₹399'}
                        </div>
                    </div>
                </div>
                {selectedPlan === 'pro' && (
                    <div className="mt-3 pt-3 border-t border-indigo-100 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> स्टार्टर के सभी फीचर्स</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> AI ब्लॉग राइटर</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> AI SEO टूल्स</div>
                    </div>
                )}
             </div>

          </div>

          {/* DESKTOP VIEW (Grid) - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-start">
            
            {/* 1. FREE PLAN CARD */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 order-1">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2">फ्री प्लान</h3>
                <p className="text-slate-500 text-sm font-medium">शुरुआत करने वालों के लिए। अपनी यात्रा शुरू करें।</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">₹0</span>
                <span className="text-slate-400 font-medium">/हमेशा के लिए</span>
              </div>

              <button 
                onClick={() => setShowCouponPopup(true)}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group"
              >
                शुरू करें
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><FaCheck size={10} /></div>
                  बेसिक डैशबोर्ड एक्सेस
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><FaCheck size={10} /></div>
                  सीमित टेम्पलेट्स
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><FaCheck size={10} /></div>
                  कम्युनिटी सपोर्ट
                </div>
              </div>
            </div>

            {/* 2. STARTER PLAN (Most Popular) */}
            <div className={`relative p-8 rounded-3xl bg-white border transition-all duration-500 order-2 md:-mt-4 z-10 
              ${isCouponApplied 
                ? 'border-[#68b13d] shadow-[0_0_40px_rgba(104,177,61,0.2)] scale-[1.02]' 
                : 'border-slate-200 shadow-xl'}`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#68b13d] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                सबसे लोकप्रिय
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2">स्टार्टर प्लान</h3>
                <p className="text-slate-500 text-sm font-medium">नए ब्लॉगर्स के लिए एकदम सही।</p>
              </div>
              
              <div className="mb-8 relative h-16">
                {isCouponApplied ? (
                  <div className="absolute top-0 left-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <div className="flex items-baseline gap-2">
                        <span className="text-slate-400 line-through text-lg font-semibold">₹199</span>
                        <span className="text-5xl font-black text-[#68b13d]">₹99</span>
                     </div>
                     <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded ml-1">50% की छूट लागू</span>
                  </div>
                ) : (
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-slate-900">₹199</span>
                      <span className="text-slate-400 font-medium">/महीना</span>
                   </div>
                )}
              </div>

              <a 
                href="https://wa.me/6284563903?text=I%20want%20to%20join%20Starter%20Pack%20for%2099"
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mb-8
                  ${isCouponApplied 
                    ? 'bg-[#68b13d] text-white hover:bg-[#5a9a33] shadow-lg shadow-green-200 animate-pulse' 
                    : 'bg-[#68b13d] text-white hover:bg-[#5a9a33]'}`}
              >
                {isCouponApplied ? 'स्टार्टर पैक लें - ₹99' : 'स्टार्टर पैक लें'}
              </a>

              <div className="space-y-4">
                {[
                  "पूरी वेबसाइट एक्सेस",
                  "एडमिन पैनल डेमो",
                  "अनलिमिटेड पोस्ट्स",
                  "बेसिक SEO टूल्स",
                  "होस्टिंग शामिल है"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[#68b13d]"><FaCheck size={10} /></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. AI PRO PLAN */}
            <div className={`relative p-8 rounded-3xl bg-white border transition-all duration-500 order-3
               ${isCouponApplied 
                ? 'border-indigo-500 shadow-[0_0_40px_rgba(99,102,241,0.2)]' 
                : 'border-slate-200 shadow-xl'}`}
            >
               {isCouponApplied && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-bounce">
                     सबसे बढ़िया
                  </div>
               )}

              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  AI प्रो 
                  <FaWandMagicSparkles className="text-indigo-500" />
                </h3>
                <p className="text-slate-500 text-sm font-medium">अपनी ग्रोथ को ऑटोमेट करें।</p>
              </div>
              
              <div className="mb-8 relative h-16">
                 {isCouponApplied ? (
                  <div className="absolute top-0 left-0 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                     <div className="flex items-baseline gap-2">
                        <span className="text-slate-400 line-through text-lg font-semibold">₹399</span>
                        <span className="text-5xl font-black text-indigo-600">₹199</span>
                     </div>
                     <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded ml-1">50% की छूट लागू</span>
                  </div>
                ) : (
                   <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-slate-900">₹399</span>
                      <span className="text-slate-400 font-medium">/महीना</span>
                   </div>
                )}
              </div>

              <a 
                 href="https://wa.me/6284563903?text=I%20want%20to%20join%20AI%20Pro%20Pack%20for%20199"
                 target="_blank" 
                 rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mb-8
                  ${isCouponApplied 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
              >
                {isCouponApplied ? 'AI प्रो लें - ₹199' : 'AI प्रो लें'}
              </a>

              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">स्टार्टर के सभी फीचर्स, और:</div>
                {[
                  "AI ब्लॉग राइटर",
                  "AI SEO टूल्स",
                  "AI कंटेंट जनरेटर",
                  "प्राथमिकता पर सपोर्ट",
                  "एडवांस्ड एनालिटिक्स"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><FaCheck size={10} /></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Custom Plan Link */}
          <div className="text-center mt-12 md:mt-16 mb-20 md:mb-0">
            <a href="https://wa.me/6284563903" className="text-slate-500 hover:text-[#68b13d] text-sm font-medium transition-colors border-b border-transparent hover:border-[#68b13d]">
              अपनी खुद की फुल रेडी-मेड वेबसाइट चाहिए? हमसे संपर्क करें।
            </a>
          </div>

        </div>
      </main>

      {/* MOBILE FIXED BOTTOM ACTION */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <button 
            onClick={handleMobileAction}
            className={`w-full py-4 rounded-xl font-black text-lg shadow-lg flex items-center justify-center gap-2
                ${selectedPlan === 'free' 
                    ? 'bg-slate-900 text-white' 
                    : selectedPlan === 'pro'
                        ? 'bg-indigo-600 text-white shadow-indigo-200'
                        : 'bg-[#68b13d] text-white shadow-green-200'
                }
            `}
        >
            {selectedPlan === 'free' ? (
                <>अभी शुरू करें <FaArrowRight /></>
            ) : selectedPlan === 'starter' ? (
                <>स्टार्टर लें {isCouponApplied ? '₹99' : '₹199'}</>
            ) : (
                <>AI प्रो लें {isCouponApplied ? '₹199' : '₹399'}</>
            )}
        </button>
      </div>

      <Footer />

      {/* COUPON POPUP */}
      {showCouponPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setShowCouponPopup(false)}
          />
          
          <div className="relative w-full max-w-md bg-white rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            
            {/* Confetti Background Effect (Simplified with CSS/SVG if needed, or just gradient) */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-yellow-50 to-transparent"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center text-yellow-500 shadow-lg shadow-yellow-200 animate-bounce">
                <FaGift className="text-4xl" />
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-2">बधाई हो!</h2>
              <p className="text-lg text-slate-600 mb-6">
                आपने अभी-अभी <span className="font-bold text-[#68b13d] bg-green-50 px-2 py-1 rounded-lg border border-green-100">50% का डिस्काउंट कूपन</span> अनलॉक किया है!
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-8">
                <p className="text-sm text-slate-500">
                  सभी पेड प्लान्स पर तुरंत डिस्काउंट पाने के लिए इस कूपन का इस्तेमाल करें।
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleApplyCoupon}
                  className="w-full py-4 rounded-xl bg-[#68b13d] text-white font-bold text-lg hover:bg-[#5a9a33] transition-all shadow-lg shadow-green-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  कूपन लागू करें
                </button>
                <button
                  onClick={() => setShowCouponPopup(false)}
                  className="w-full py-3 rounded-xl text-slate-400 font-bold hover:text-slate-600 hover:bg-slate-50 transition-colors text-sm"
                >
                  शायद बाद में
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
