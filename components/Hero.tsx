
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-12 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-50/50 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-50/50 rounded-full blur-[60px] md:blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-10">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-indigo-700 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} className="text-indigo-600" />
              <span>Professional Facility Management</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Commercial Cleaning & <br />
              <span className="text-indigo-600 italic relative inline-block">
                24/7 Emergency Restoration
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C30 2 170 2 198 6" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
              Institutional-grade facility maintenance for corporate offices, financial institutions, medical facilities & government buildings throughout New England.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link to="/quote" className="group bg-gradient-to-br from-indigo-500 to-indigo-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-extrabold text-base md:text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-95">
                Get Free Quote
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:5088872981" className="bg-white text-slate-700 border border-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-extrabold text-base md:text-lg flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                24/7 Emergency
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 pt-6 md:pt-8 border-t border-slate-100 text-center sm:text-left">
              <div className="flex -space-x-3 md:-space-x-4">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i} 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+123}`} 
                    className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white shadow-lg bg-indigo-50" 
                    alt="Client" 
                  />
                ))}
              </div>
              <div>
                <div className="flex justify-center sm:justify-start text-amber-400 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} md:size={18} fill="currentColor" />)}
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-700">Trusted by 100+ Institutional Clients</p>
              </div>
            </div>
          </div>

          <div className="relative group mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(79,70,229,0.2)] md:shadow-[0_32px_64px_-16px_rgba(79,70,229,0.3)] aspect-video sm:aspect-square md:aspect-square border-4 md:border-[10px] border-white/50 backdrop-blur-sm bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                alt="Professional Cleaning Services" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
              
              {/* Health Card Overlay - Hidden on small mobile to avoid clutter */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/50 shadow-2xl transform transition-all duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-green-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200 shrink-0">
                    <ShieldCheck size={24} md:size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-sm md:text-lg">Fully Compliant</h4>
                    <p className="text-[10px] md:text-sm text-slate-600 font-medium">OSHA, HIPAA, & EPA certified protocols.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badge - Only visible on desktop/tablet */}
            <div className="absolute -top-6 -right-3 md:-top-10 md:-right-6 bg-indigo-600 text-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_15px_30px_-5px_rgba(79,70,229,0.3)] z-20 hidden sm:block rotate-12 hover:rotate-0 transition-all duration-700 cursor-default">
              <p className="text-3xl md:text-5xl font-black leading-none mb-1">24/7</p>
              <p className="text-[8px] md:text-xs font-black uppercase tracking-[0.2em] opacity-80 whitespace-nowrap">Rapid Response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
