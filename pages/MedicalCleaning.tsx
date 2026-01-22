
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, ShieldCheck, ArrowRight, Zap } from 'lucide-react';

const MedicalCleaning: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
             <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" alt="Medical Facility" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-[2rem] flex items-center justify-center">
              <Stethoscope size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.9]">
              Medical <br /><span className="text-red-600">Disinfection</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              In healthcare, "clean" is a matter of safety. We provide HIPAA-compliant, clinically precise disinfection for labs, clinics, and hospitals.
            </p>
            <div className="flex gap-4">
              <Link to="/quote" className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-red-100 hover:bg-red-700 transition-all flex items-center gap-2">
                Request Medical Consult <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl mb-24">
          <h2 className="text-3xl font-black mb-12 text-center">Clinical Precision Protocols</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Terminal Cleaning</h4>
                  <p className="text-slate-600 text-sm">Strict disinfection of patient rooms and surgical suites after use.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0"><Zap /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Electrostatic Spraying</h4>
                  <p className="text-slate-600 text-sm">360-degree coverage of complex equipment and furniture surfaces.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0"><ShieldCheck /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Bloodborne Pathogen Training</h4>
                  <p className="text-slate-600 text-sm">100% of our medical crew is certified in safe handling and disposal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0"><Zap /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Waiting Room Focus</h4>
                  <p className="text-slate-600 text-sm">High-frequency sanitization of public touch points to prevent cross-contamination.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCleaning;
