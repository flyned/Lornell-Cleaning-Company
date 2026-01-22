
import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Let's Connect.</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Our support teams are available 24/7 for emergency restoration and contract clients. Reach out for a free consultation or emergency service requests.
          </p>
        </div>

        <ContactForm />

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="text-indigo-600" /> Headquarters
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed font-medium">
              30 Mill Street<br />
              Rochdale, MA 01542
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-600">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              Main Operations Center
            </div>
          </div>

          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Globe className="text-indigo-600" /> Service Area
            </h3>
            <p className="text-slate-600 mb-4 leading-relaxed font-medium">
              Proudly serving Massachusetts, Connecticut, Rhode Island, New Hampshire, Vermont, and Maine.
            </p>
            <p className="text-sm font-bold text-slate-400">Regional Response Teams</p>
          </div>

          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Clock className="text-indigo-600" /> Direct Access
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Phone (24/7)</span>
                <span className="text-slate-700 font-bold">(508) 887-2981</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Email</span>
                <span className="text-slate-700 font-bold">lornellcompany@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
