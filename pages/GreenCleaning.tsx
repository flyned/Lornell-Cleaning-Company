
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const GreenCleaning: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 text-center lg:text-left">
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-[2.5rem] flex items-center justify-center">
              <Heart size={40} fill="currentColor" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
              Green <br /><span className="text-emerald-600">Cleaning</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Healthy for people, healthy for the planet. We exclusively use non-toxic, biodegradable products that don't sacrifice performance for safety.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center gap-2">
                Go Green Today <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl aspect-square lg:aspect-video border-8 border-white">
              <img src="https://images.unsplash.com/photo-1542601906970-3756741e78a9?auto=format&fit=crop&q=80&w=1000" alt="Eco Friendly Environment" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-emerald-100 mb-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-20 opacity-5 text-emerald-600"><Sparkles size={120} /></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-slate-900 mb-12">The Lornell Eco-Standard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
               {[
                 { title: "EPA Safer Choice", desc: "Every cleaning solution we bring on-site meets strict EPA environmental and performance standards." },
                 { title: "HEPA Filtration", desc: "Our vacuums trap 99.97% of particulates, significantly improving indoor air quality for your staff." },
                 { title: "Biodegradable Tools", desc: "We utilize microfiber systems that reduce water waste and eliminate paper towel landfill use." },
                 { title: "VOC-Free", desc: "Zero volatile organic compounds mean no harsh chemical smells or respiratory irritants after a clean." }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                   <div>
                     <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenCleaning;
