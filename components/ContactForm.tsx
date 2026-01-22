
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="bg-indigo-600 p-12 text-white lg:w-1/3">
            <h2 className="text-3xl font-bold mb-8">Let's Talk Clean.</h2>
            <p className="text-indigo-100 mb-12">
              Ready to elevate your facility's standards? Contact us for a free on-site walkthrough and customized proposal.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 p-3 rounded-xl">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold">Call Us (24/7)</p>
                  <p className="text-indigo-100">(508) 887-2981</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 p-3 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-indigo-100">lornellcompany@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-500 p-3 rounded-xl">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold">Headquarters</p>
                  <p className="text-indigo-100">30 Mill Street, Rochdale, MA 01542</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-12 lg:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">FULL NAME</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">COMPANY NAME</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all" placeholder="Acme Inc." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">WORK EMAIL</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">PHONE NUMBER</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all" placeholder="(508) 887-2981" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">HOW CAN WE HELP?</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:border-indigo-500 outline-none transition-all" placeholder="Tell us about your facility and cleaning needs or emergency..."></textarea>
              </div>

              <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-3 w-full md:w-auto shadow-lg shadow-indigo-100">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
