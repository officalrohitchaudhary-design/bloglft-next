"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8 text-sm">Last updated: December 12, 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <p>
            At bvoom ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [blogvoom.in], use our services, or engage with us. By using our services, you consent to the data practices described in this policy.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect information that identifies, relates to, describes, or could reasonably be linked to you ("Personal Information").</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Details:</strong> Name, email address, phone number, and billing address provided during registration or purchase.</li>
            <li><strong>Payment Information:</strong> Credit/debit card details or UPI IDs processed securely by our third-party payment processors (Razorpay/Stripe). We do not store your full payment credentials on our servers.</li>
            <li><strong>Usage Data:</strong> Information about your device, browser type, IP address, and how you interact with our website (e.g., pages visited, time spent).</li>
            <li><strong>Communication Data:</strong> Records of your correspondence with us via email, WhatsApp, or support tickets.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your information for the following legitimate business purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>To provide, operate, and maintain our services (e.g., setting up your blog, processing orders).</li>
            <li>To process transactions and send you related information, including confirmations and invoices.</li>
            <li>To communicate with you regarding updates, security alerts, and support messages.</li>
            <li>To improve our website, services, and marketing efforts.</li>
            <li>To comply with legal obligations and prevent fraud.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share your data only in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website, conducting our business, or serving you (e.g., hosting providers, payment gateways, email services), subject to confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> If required by law, regulation, or legal process (e.g., a subpoena or court order).</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, sale of company assets, or acquisition.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information. To exercise these rights, please contact us at help@blogvoom.in.</p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
            <br />
            <strong>Email:</strong> help@blogvoom.in
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

