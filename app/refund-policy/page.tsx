"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl font-black mb-8">No Refund Policy</h1>
        <p className="text-slate-500 mb-8 text-sm">Last updated: December 12, 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <p>
            At bvoom, we are committed to providing high-quality digital services and products. Due to the nature of our services (digital setup, consultations, and immediate access to intellectual property), <strong>all sales are final</strong>.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. No Refunds</h2>
          <p>
            We adhere to a strict <strong>No Refund Policy</strong>. Once a payment is made for any of our services, plans, or products, it is <strong>non-refundable and non-transferable</strong>.
          </p>
          <p>This applies to, but is not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Starter Packs and Activation Sessions.</li>
            <li>Website Setup and Design Services.</li>
            <li>Consultation Fees.</li>
            <li>Domain Registration and Hosting Fees incurred on your behalf.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. Why We Do Not Offer Refunds</h2>
          <p>
            Our services involve significant manual effort, time, and server costs from the moment you sign up. Additionally, digital goods and knowledge-based services cannot be &quot;returned&quot; once accessed or delivered. By purchasing our services, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You are paying for the time, expertise, and digital infrastructure setup.</li>
            <li>The outcome of your blog or website depends on your own efforts, and lack of financial success is not grounds for a refund.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Exceptional Circumstances</h2>
          <p>
            The only exception to this policy is if a technical error has occurred resulting in a double charge for the same transaction. In such specific cases, please contact us immediately with proof of the duplicate transaction.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Acceptance of This Policy</h2>
          <p>
            By placing an order or making a payment on bvoom, you confirm that you have read, understood, and agreed to this No Refund Policy. If you do not agree with this policy, please do not proceed with your purchase.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions regarding this policy before making a payment, please contact us:
            <br />
            <strong>Email:</strong> help@blogvoom.in
   
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
