
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-transition pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 mb-12 font-medium italic">Last Updated: October 2024</p>
          
          <div className="prose prose-indigo max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">1. Introduction</h2>
              <p>Lornell Commercial Cleaning Co. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services throughout New England.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details (name, email, phone number) for quote requests.</li>
                <li>Facility information (square footage, industry type) provided to our AI Advisor.</li>
                <li>Communication preferences and feedback.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">3. Use of AI Technology</h2>
              <p>Our website utilizes Google Gemini API technology to provide cleaning recommendations. When you interact with our AI Quote Advisor:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Input data regarding your facility is processed to generate specific recommendations.</li>
                <li>No personally identifiable information is transmitted to the AI engine unless explicitly included in your facility descriptions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">4. Regional Compliance</h2>
              <p>As a New England-based provider, we comply with relevant state privacy laws in Massachusetts, Connecticut, Rhode Island, New Hampshire, Vermont, and Maine.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">5. Contact Us</h2>
              <p>If you have questions about this policy, please contact us at:</p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="font-bold">Lornell Privacy Team</p>
                <p>100 Seaport Blvd, Boston, MA 02210</p>
                <p>privacy@lornellcleaning.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
