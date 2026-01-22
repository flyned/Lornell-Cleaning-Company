
import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

const ConstructionCleaning: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="w-20 h-20 bg-yellow-100 text-yellow-700 rounded-[2rem] flex items-center justify-center">
              <HardHat size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
              Post-<br /><span className="text-yellow-600">Construction</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              Transitioning from a job site to a finished space requires a specialized touch. We handle the dust, debris, and detail work so you can open on schedule.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-slate-200 hover:bg-black transition-all flex items-center gap-2">
                Book Final Clean <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000" alt="Construction Site" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { step: "Phase 1: Rough Clean", desc: "Debris removal, initial dusting, and preparing surfaces for final finishes." },
            { step: "Phase 2: Deep Detail", desc: "Detailed cleaning of glass, cabinetry, vents, and lighting fixtures." },
            { step: "Phase 3: Final Polish", desc: "Touch-ups and floor waxing right before the grand opening." }
          ].map((phase, idx) => (
            <div key={idx} className="bg-yellow-50/50 p-10 rounded-[2.5rem] border border-yellow-100 relative group overflow-hidden">
               <div className="absolute -top-4 -right-4 text-yellow-200/50 font-black text-9xl group-hover:scale-110 transition-transform">0{idx+1}</div>
               <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">{phase.step}</h3>
               <p className="text-slate-600 leading-relaxed relative z-10">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionCleaning;
