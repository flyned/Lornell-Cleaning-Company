
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const OfficeCleaning: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[2rem] flex items-center justify-center">
              <Building2 size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
              Office <br /><span className="text-indigo-600">Maintenance</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Creating a workspace that inspires productivity starts with a pristine environment. Our office maintenance protocols are designed for the modern New England corporate hub.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-2">
                Get an Office Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000" alt="Modern Office" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Daily Janitorial", desc: "Comprehensive nightly cleaning of workstations, common areas, and restrooms." },
            { title: "Floor Care", desc: "Expert carpet cleaning and hard floor polishing to maintain a professional appearance." },
            { title: "Window Cleaning", desc: "Scheduled interior and exterior window maintenance for crystal-clear views." },
            { title: "Day Porter Services", desc: "On-site support during business hours for high-traffic needs and spill management." },
            { title: "Kitchen Sanitization", desc: "Deep cleaning of breakrooms, fridges, and coffee stations." },
            { title: "Trash & Recycling", desc: "Strategic waste management and eco-friendly sorting programs." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex gap-4">
              <CheckCircle2 className="text-indigo-600 shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeCleaning;
