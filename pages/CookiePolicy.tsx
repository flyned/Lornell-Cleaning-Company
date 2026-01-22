
import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="page-transition pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-slate-100">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Cookie Policy</h1>
          <p className="text-slate-500 mb-12 font-medium italic">Last Updated: October 2024</p>
          
          <div className="prose prose-indigo max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">What are Cookies?</h2>
              <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better experience and analyze how our site is used.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-slate-900">Essential Cookies:</strong> 
                  Required for basic site functionality, such as navigating between pages and requesting quotes.
                </li>
                <li>
                  <strong className="text-slate-900">Analytical Cookies:</strong> 
                  Help us understand how New England businesses interact with our AI Advisor so we can improve the recommendations.
                </li>
                <li>
                  <strong className="text-slate-900">Preference Cookies:</strong> 
                  Remember your regional selections to show you relevant local service data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Managing Your Preferences</h2>
              <p>Most web browsers allow you to control cookies through their settings. Please note that disabling essential cookies may affect the functionality of our AI Quote Advisor and service maps.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Third-Party Cookies</h2>
              <p>We may use third-party analytics services (like Google Analytics) that set their own cookies to help us measure site performance and traffic patterns across our New England service hubs.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
