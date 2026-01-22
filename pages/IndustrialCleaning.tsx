
import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, CheckCircle2, ArrowRight } from 'lucide-react';

const IndustrialCleaning: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="w-20 h-20 bg-orange-600 text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-orange-900/40">
              <Factory size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9]">
              Industrial <br /><span className="text-orange-500">Strength</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              Manufacturing floors and distribution hubs require heavy-duty maintenance. We use industrial-grade equipment to keep your operations safe and compliant.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-orange-900 hover:bg-orange-700 transition-all flex items-center gap-2">
                Get Industrial Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3] border-[10px] border-white/5">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Industrial Facility" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            "Concrete Floor Scrubbing",
            "Loading Dock Sanitation",
            "High-Bay Dusting",
            "Machinery Degreasing",
            "Locker Room Cleaning",
            "HVAC Vent Maintenance",
            "Hazardous Spills",
            "Warehouse Sweeping"
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-3">
              <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
              <span className="font-bold text-sm tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialCleaning;
