"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { FaEnvelope, FaWhatsapp, FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-slate-50">
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-12 bg-[#050505] text-white text-center px-4 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#68b13d]/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#68b13d]/10 rounded-full blur-[120px]"></div>
         </div>
         <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have questions? We're here to help you start your blogging journey.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Whether you have a question about our pricing, need a demo, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-6">
              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-[#68b13d] flex items-center justify-center text-xl flex-shrink-0">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Chat with us</h3>
                  <p className="text-slate-500">Our friendly team is here to help.</p>
                  <a href="#" className="text-[#68b13d] font-bold hover:underline">+91 98765 43210</a>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500">Drop us a line anytime.</p>
                  <a href="mailto:hello@bloglft.com" className="text-blue-600 font-bold hover:underline">contact@blogvoom.com</a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl flex-shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Office</h3>
                  <p className="text-slate-500">Come say hello at our office HQ.</p>
                  <p className="text-slate-900 font-bold">New Delhi, India</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

