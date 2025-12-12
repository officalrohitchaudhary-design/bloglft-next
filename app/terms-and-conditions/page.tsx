"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl font-black mb-8">Terms and Conditions</h1>
        <p className="text-slate-500 mb-8 text-sm">Last updated: December 12, 2025</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <p>
            Welcome to bvoom. By accessing or using our website [blogvoom.in] and services, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you may not access the service.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">1. Services</h2>
          <p>
            bvoom provides digital services including but not limited to blog setup, website design, roadmap consultation, and educational content regarding blogging strategies. We act as a service provider and do not guarantee specific income results or financial success from your blog, as this depends on individual effort and market conditions.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">2. User Accounts</h2>
          <p>
            When you create an account or purchase a service, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">3. Payments and Billing</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Pricing:</strong> Prices for our services are described on our website and are subject to change without notice.</li>
            <li><strong>Payment Methods:</strong> We accept payments through approved payment gateways (e.g., UPI, Credit/Debit Cards). By submitting payment information, you authorize us to charge the applicable fees.</li>
            <li><strong>Taxes:</strong> You are responsible for all applicable taxes arising from your use of our services.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p>
            The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of bvoom and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of bvoom.
          </p>
          <p>
            Upon full payment for website setup services, you grant full ownership rights to the specific website design and content created for you, subject to any third-party licenses (e.g., WordPress themes, plugins).
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">5. Prohibited Uses</h2>
          <p>You agree not to use the Service:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate bvoom, a bvoom employee, another user, or any other person or entity.</li>
          </ul>

          <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            In no event shall bvoom, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
      
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

