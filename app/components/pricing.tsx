"use client";

import { useState } from "react";
import { 
  FaCheck, 
  FaWandMagicSparkles, 
  FaArrowRight,
  FaXmark
} from "react-icons/fa6";
import { FaExternalLinkAlt, FaCopy } from "react-icons/fa";
import ContactForm from "./ContactForm";

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

export default function PricingPage() {
  const [showFreePopup, setShowFreePopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'starter' | 'pro'>('free');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleMobileAction = () => {
    if (selectedPlan === 'free') {
        setShowFreePopup(true);
    } else if (selectedPlan === 'starter') {  
        setIsModalOpen(true);
    } else if (selectedPlan === 'pro') {
        setIsModalOpen(true);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast here
  };

  return (
    <div className="font-sans bg-slate-50">
          <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          
      {/* Main Content */}
      <main className="pt-10 pb-10 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">
            आसान प्लान्स।
             <br/>
              <span className="text-[#68b13d]">आज ही कमाई शुरू करें।</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              वो Plan चुनें जो आपके लिए सही है। कोई hidden fees नहीं।
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
                        <h3 className="font-bold text-slate-900">Free Plan</h3>
                        <p className="text-xs text-slate-500">Demo Access</p>
                    </div>
                    <div className="text-right">
                        <div className="font-black text-slate-900 text-xl">Free</div>
                    </div>
                </div>
                {selectedPlan === 'free' && (
                    <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-600"><FaCheck className="text-slate-900" /> वेबसाइट डेमो</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><FaCheck className="text-slate-900" /> एडमिन पैनल डेमो</div>
                        <div className="flex items-center gap-2 text-xs text-slate-600"><FaCheck className="text-slate-900" /> बेसिक चैट सपोर्ट</div>
                        {/* <div className="text-xs font-medium text-slate-500 mt-2">👉 शून्य लागत, शून्य भार, अधिकतम लीड्स।</div> */}
                    </div>
                )}
             </div>

             {/* Starter Plan Mobile */}
             <div 
                onClick={() => setSelectedPlan('starter')}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                    ${selectedPlan === 'starter' ? 'border-[#68b13d] bg-[#68b13d]/5' : 'border-slate-100 bg-white'}
                `}
             >
                <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPlan === 'starter' ? 'border-[#68b13d]' : 'border-slate-300'}`}>
                        {selectedPlan === 'starter' && <div className="w-3 h-3 rounded-full bg-[#68b13d]" />}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900">Starter Plan</h3>
                        <p className="text-xs text-slate-500">Website Launch Roadmap</p>
                    </div>
                    <div className="text-right">
                        <div className="font-black text-xl text-slate-900">₹199</div>
                    </div>
                </div>
                {selectedPlan === 'starter' && (
                    <div className="mt-3 pt-3 border-t border-[#68b13d]/20 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> वेबसाइट लॉन्च रोडमैप</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> जल्दी वेबसाइट एक्सेस</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> सपोर्ट</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> 1 डेमो वेबसाइट</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-[#68b13d]" /> ब्रंड नाम फाइंडर</div>
                        {/* <div className="text-xs font-medium text-slate-500 mt-2">👉 First paid step → trust → next plan sale easy.</div> */}
                    </div>
                )}
             </div>

             {/* AI Pro Plan Mobile */}
             <div 
                onClick={() => setSelectedPlan('pro')}
                className={`relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden
                    ${selectedPlan === 'pro' ? 'border-indigo-500 bg-indigo-50/30' : 'border-slate-100 bg-white'}
                `}
             >
                <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${selectedPlan === 'pro' ? 'border-indigo-500' : 'border-slate-300'}`}>
                        {selectedPlan === 'pro' && <div className="w-3 h-3 rounded-full bg-indigo-500" />}
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-slate-900 flex items-center gap-1">AI Pro Plan <FaWandMagicSparkles className="text-indigo-500 text-xs" /></h3>
                        <p className="text-xs text-slate-500">AI Tools Roadmap</p>
                    </div>
                    <div className="text-right">
                        <div className="font-black text-xl text-slate-900">₹399</div>
                    </div>
                </div>
                {selectedPlan === 'pro' && (
                    <div className="mt-3 pt-3 border-t border-indigo-100 space-y-2 animate-in slide-in-from-top-2 fade-in">
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> AI टूल्स गाइड</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> अधिक पैसे कमाने का रोडमैप</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> वेबसाइट लॉन्च रोडमैप</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> वेबसाइट + एडमिन पैनल डेमो</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> प्राथमिकता सपोर्ट</div>
                        <div className="flex items-center gap-2 text-xs text-slate-700"><FaCheck className="text-indigo-500" /> AI ब्रंड फाइंडर गाइड</div>
                        {/* <div className="text-xs font-medium text-slate-500 mt-2">👉 High perceived value → high conversion → max profit.</div> */}
                    </div>
                )}
             </div>

          </div>

          {/* DESKTOP VIEW (Grid) - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 items-start">
            
            {/* 1. FREE PLAN CARD */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 order-1">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Free Plan</h3>
                <p className="text-slate-500 text-sm font-medium">Demo Access</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">Free</span>
              </div>

              <button 
                onClick={() => setShowFreePopup(true)}
                className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group"
              >
                डेमो देखें
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 space-y-4">
                {[
                  "वेबसाइट डेमो",
                  "एडमिन पैनल डेमो",
                  "बेसिक चैट सपोर्ट"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><FaCheck size={10} /></div>
                        {item}
                    </div>
                ))}
              </div>
                {/* <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs font-medium text-slate-500 italic">👉 Zero cost, zero workload, maximum leads.</p>
                </div> */}
            </div>

            {/* 2. STARTER PLAN */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-500 order-2 md:-mt-4 z-10 hover:border-[#68b13d] hover:shadow-[0_0_40px_rgba(104,177,61,0.1)]">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Starter Plan</h3>
                <p className="text-slate-500 text-sm font-medium">Website Launch Roadmap</p>
              </div>
              
              <div className="mb-8 relative h-16">
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900">₹199</span>
                 </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mb-8 bg-[#68b13d] text-white hover:bg-[#5a9a33]"
              >
                शुरू करें ₹199
              </button>

              <div className="space-y-4">
                {[
                  "वेबसाइट लॉन्च रोडमैप",
                  "जल्दी वेबसाइट एक्सेस",
                  "सपोर्ट",
                  "1 डेमो वेबसाइट",
                  "ब्रंड नाम फाइंडर"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[#68b13d]"><FaCheck size={10} /></div>
                    {item}
                  </div>
                ))}
              </div>
              {/* <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-500 italic">👉 First paid step → trust → next plan sale easy.</p>
              </div> */}
            </div>

            {/* 3. AI PRO PLAN */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-xl transition-all duration-500 order-3 hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]">
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
                  AI Pro Plan 
                  <FaWandMagicSparkles className="text-indigo-500" />
                </h3>
                <p className="text-slate-500 text-sm font-medium">AI Tools Roadmap</p>
              </div>
              
              <div className="mb-8 relative h-16">
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-slate-900">₹399</span>
                 </div>
              </div>

              <button 
                 onClick={() => setIsModalOpen(true)}
                 rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 mb-8 bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200"
              >
                शुरू करें ₹399
              </button>

              <div className="space-y-4">
                {[
                  "AI टूल्स गाइड",
                  "अधिक पैसे कमाने का रोडमैप",
                  "वेबसाइट लॉन्च रोडमैप",
                  "वेबसाइट + एडमिन पैनल डेमो",
                  "प्राथमिकता सपोर्ट",
                  "AI ब्रंड फाइंडर गाइड"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600"><FaCheck size={10} /></div>
                    {item}
                  </div>
                ))}
              </div>
              {/* <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs font-medium text-slate-500 italic">👉 High perceived value → high conversion → max profit.</p>
              </div> */}
            </div>

          </div>

          {/* Custom Plan Link */}
            <div className="text-center mt-12 md:mt-16 mb-0 md:mb-0">
                <button onClick={() => setIsModalOpen(true)} className="text-slate-500 hover:text-[#68b13d] text-sm font-medium transition-colors border-b border-transparent hover:border-[#68b13d]">
                अपनी खुद की फुल रेडी-मेड वेबसाइट चाहिए? हमसे संपर्क करें।
                </button>
            </div>

        </div>
      </main>

      {/* MOBILE FIXED BOTTOM ACTION */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
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
                <>डेमो देखें <FaArrowRight /></>
            ) : selectedPlan === 'starter' ? (
                <>शुरू करें ₹199</>
            ) : (
                <>शुरू करें ₹399</>
            )}
        </button>
      </div>


      {/* FREE PLAN POPUP */}
      {showFreePopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={() => setShowFreePopup(false)}
          />
          
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">
                        <FaWandMagicSparkles />
                    </div>
                    <div>
                        <h2 className="text-xl font-black text-slate-900 leading-tight">डेमो एक्सेस</h2>
                        <p className="text-xs text-slate-500 font-medium">बिना पैसे दिए, खुद चलाकर देखें</p>
                    </div>
                </div>
                <button 
                    onClick={() => setShowFreePopup(false)} 
                    className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600 flex items-center justify-center transition-colors"
                >
                    <FaXmark />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar space-y-8">
                
                {/* 1. Website Demo */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold">1</span>
                        <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">लाइव वेबसाइट डेमो</h3>
                    </div>
                    <div className="group relative p-4 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all">
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <div className="text-xs text-blue-600 font-bold mb-0.5">वेबसाइट लिंक</div>
                                <a href="https://blogfly-syhl.vercel.app" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-blue-600 truncate block text-lg">
                                https://blogfly-syhl.vercel.app
                                </a>
                            </div>
                            <a 
                                href="https://blogfly-syhl.vercel.app" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="shrink-0 px-4 py-2 bg-white text-blue-600 text-sm font-bold rounded-lg shadow-sm border border-blue-100 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                                क्लिक करें <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Admin Panel Demo */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold">2</span>
                        <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">एडमिन पैनल डेमो</h3>
                    </div>
                    
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                        {/* Link */}
                        <div className="p-4 border-b border-slate-100 bg-white flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                {/* <div className="text-xs text-purple-600 font-bold mb-0.5">लॉगिन लिंक</div> */}
                                <a href="https://blogfly-syhl.vercel.app/admin/dashboard" target="_blank" rel="noopener noreferrer" className="text-slate-900 font-bold hover:text-purple-600 truncate block">
                                    https://blogfly-syhl.vercel.app/admin/dashboard
                                </a>
                            </div>
                            <a 
                                href="https://blogfly-syhl.vercel.app/admin/dashboard" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="shrink-0  h-8 flex items-center justify-center bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                            >
                                क्लिक करें <FaExternalLinkAlt className="text-xs ms-2" />
                            </a>
                        </div>

                        {/* Credentials Grid */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100">
                            <div className="bg-white p-4 group cursor-pointer" onClick={() => copyToClipboard('admin@demo.com')}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Email / Username</span>
                                    <FaCopy className="text-slate-300 group-hover:text-[#68b13d] transition-colors text-sm" />
                                </div>
                                <div className="font-mono text-slate-700 font-medium select-all">admin@demo.com</div>
                            </div>
                            <div className="bg-white p-4 group cursor-pointer" onClick={() => copyToClipboard('admin123')}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-bold text-slate-400 uppercase">Password</span>
                                    <FaCopy className="text-slate-300 group-hover:text-[#68b13d] transition-colors text-sm" />
                                </div>
                                <div className="font-mono text-slate-700 font-medium select-all">admin123</div>
                            </div>
                        </div> */}
                    </div>
                      {/* <p className="text-xs text-slate-400 text-center px-4">
                          💡 लॉगिन करने के लिए ऊपर दिए गए ईमेल और पासवर्ड का उपयोग करें।
                      </p> */}
                </div>

            </div>

            {/* Footer Action */}
            <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => setShowFreePopup(false)}
                  className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  समझ गया, धन्यवाद
                </button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
