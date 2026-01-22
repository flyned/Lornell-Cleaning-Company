
import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="page-transition pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 mb-12 font-medium italic">Last Updated: October 2024</p>
          
          <div className="prose prose-indigo max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the Lornell Commercial Cleaning Co. website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">2. AI Quote Advisor Disclaimer</h2>
              <p>The cleaning recommendations and preliminary estimates provided by our Gemini-powered AI Advisor are for informational purposes only. They do not constitute a binding contract. Final pricing and service scopes are determined only after a physical site walkthrough by a Lornell representative.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">3. Service Area</h2>
              <p>Lornell services are strictly limited to the New England states. We reserve the right to decline service requests outside our active coverage areas as depicted on our Service Area maps.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">4. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">5. Intellectual Property</h2>
              <p>All content on this site, including logos, graphics, and the "Elevating the Standard of Clean" branding, is the property of Lornell Commercial Cleaning Co.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
