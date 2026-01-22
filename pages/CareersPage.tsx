
import React from 'react';
import { Heart, Sparkles, TrendingUp, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              <span>Join the Crew</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9]">
              Work with the <span className="text-indigo-600">Best</span> in New England.
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              At Lornell, we don't just hire cleaners; we build facility specialists. We offer competitive pay, comprehensive benefits, and a clear path for professional advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                View Open Positions <ArrowRight size={18} />
              </button>
              <button className="bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Employee Benefits
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-4 rounded-[3rem] shadow-2xl rotate-1 border border-slate-100">
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Lornell Team Working Together" className="rounded-[2.5rem] w-full" />
            </div>
            <div className="absolute -top-6 -right-6 bg-indigo-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p className="text-2xl font-black">400+</p>
              <p className="text-xs font-bold opacity-80 uppercase">Team Members</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: <Heart className="text-red-500" />, title: "Living Wage", desc: "We pay 20% above regional industry averages for all entry positions." },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Comprehensive Health", desc: "Health, dental, and vision coverage for all full-time crew members." },
            { icon: <TrendingUp className="text-green-500" />, title: "Career Growth", desc: "80% of our area managers started as frontline cleaning specialists." },
            { icon: <Zap className="text-indigo-500" />, title: "Advanced Training", desc: "Paid certification in clinical disinfection and green cleaning protocols." },
          ].map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-50 transition-colors">{b.icon}</div>
              <h4 className="font-bold text-slate-900 mb-2">{b.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-black mb-6">Start Your Journey.</h2>
              <p className="text-indigo-100 text-lg mb-10 leading-relaxed">
                Even if you don't see an open listing for your specific city, we're always looking for dedicated talent. Send us your info and we'll reach out when a spot opens in your area.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-white/50 transition-all text-white placeholder:text-white/40" />
                <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-white/50 transition-all text-white placeholder:text-white/40" />
                <select className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 outline-none focus:ring-2 ring-white/50 transition-all appearance-none col-span-1 md:col-span-2 text-white">
                  <option className="text-slate-900">Primary Region of Interest</option>
                  <option className="text-slate-900">Massachusetts (Boston / Worcester)</option>
                  <option className="text-slate-900">Connecticut (Hartford / Stamford)</option>
                  <option className="text-slate-900">Rhode Island (Providence)</option>
                  <option className="text-slate-900">Maine / NH / Vermont</option>
                </select>
                <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-50 transition-all col-span-1 md:col-span-2 shadow-lg">
                  Submit Interest Form <ArrowRight size={18} />
                </button>
              </form>
           </div>
           {/* Decorative abstract shape */}
           <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-indigo-800 to-transparent opacity-30 pointer-events-none skew-x-12 translate-x-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
