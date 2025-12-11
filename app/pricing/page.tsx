"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/pricing";

export default function PricingPage() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Header />
    <div className="mt-19 mx-auto"> <Pricing /></div>
      <Footer />
    </div>
  );
}
