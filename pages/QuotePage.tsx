
import React from 'react';
import QuoteAI from '../components/QuoteAI';
import { HelpCircle, Clock, Sparkles } from 'lucide-react';

const QuotePage: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-indigo-900 rounded-[3rem] p-12 lg:p-20 shadow-3xl text-white relative overflow-hidden">
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-800 skew-x-12 translate-x-1/2 opacity-30"></div>
          
          <QuoteAI />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <Sparkles />
            </div>
            <h4 className="text-xl font-bold mb-3">AI Driven Insights</h4>
            <p className="text-slate-600 leading-relaxed">
              Our proprietary Gemini-powered engine uses regional data to suggest cleaning protocols specific to New England's seasonal challenges.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <Clock />
            </div>
            <h4 className="text-xl font-bold mb-3">Save Days of Research</h4>
            <p className="text-slate-600 leading-relaxed">
              Get a baseline scope and plan in under 60 seconds, allowing you to move to the walkthrough stage faster.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <HelpCircle />
            </div>
            <h4 className="text-xl font-bold mb-3">Expert Review</h4>
            <p className="text-slate-600 leading-relaxed">
              Once you generate your AI plan, a human facility expert will review it to ensure 100% accuracy before your site visit.
            </p>
          </div>
        </div>

        <div className="mt-32 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            {[
              { q: "Is this quote legally binding?", a: "No, this is an AI-generated preliminary scope. A final binding quote is provided after our on-site walkthrough." },
              { q: "Does the AI account for seasonal changes?", a: "Yes, our engine factors in winter salt/snow impacts and summer humidity common in the New England region." },
              { q: "Can I customize the generated plan?", a: "Absolutely. The AI provides a starting point which you can refine with our experts during the consultation." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h5 className="font-bold text-indigo-900 mb-2">{item.q}</h5>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
