
import React from 'react';
import { History, Target, Users, Award, ShieldCheck, Briefcase, Flame, Clock, GraduationCap } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="page-transition pt-32 bg-white">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
          <ShieldCheck size={14} />
          <span>Founded in 2003</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
           Professional Facility Management & <br /><span className="text-indigo-600 italic">Emergency Restoration.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Lornell Commercial Cleaning was founded in 2003 by Todd Lornell and has grown into a trusted provider of professional facility management and emergency restoration services across New England.
        </p>
      </div>

      {/* Track Record Grid */}
      <div className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Proven Track Record</h2>
             <p className="text-slate-600">Built on two decades of reliability, multi-industry expertise, and comprehensive compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <History className="text-indigo-600" size={32} />, title: "20+ Years", desc: "Continuous operation and growth since 2003." },
              { icon: <Briefcase className="text-indigo-600" size={32} />, title: "100+ Clients", desc: "Serving corporate, financial, medical, government, & industrial sectors." },
              { icon: <Clock className="text-indigo-600" size={32} />, title: "24/7 Response", desc: "Always-on capability for emergencies and maintenance." },
              { icon: <Flame className="text-indigo-600" size={32} />, title: "Restoration", desc: "Partnership with MacFawn Fire & Flood (30+ years established)." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="mb-4 bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center">{v.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company History & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-6">From Real Estate to <br />Facility Excellence</h2>
              <div className="w-20 h-2 bg-indigo-600 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                What started as a specialized commercial real estate company naturally expanded into facility management in 2009. Today, we operate as a dedicated cleaning and restoration services provider serving 100+ institutional clients including <strong>corporate offices, financial institutions, medical facilities, government buildings, and industrial warehouses.</strong>
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that clean, well-maintained facilities are fundamental to operational excellence. Whether providing daily maintenance to a corporate campus or responding to a fire emergency at 3 AM, we approach every engagement with institutional-grade professionalism, attention to detail, and commitment to compliance.
              </p>
            </div>
            
            <div className="bg-indigo-900 text-white p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Award className="text-yellow-400" />
                Our Commitment
              </h3>
              <p className="text-indigo-100 leading-relaxed">
                "We measure success by facility cleanliness, regulatory compliance, client satisfaction, and operational continuity. Every team member understands that your facility is your business—and we treat it that way."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-[3rem] shadow-2xl rotate-1">
               <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Corporate Architecture" 
              />
            </div>
            {/* Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-slate-900 text-white py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
             <div className="lg:w-1/3">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl relative bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                    alt="Todd Lornell" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                    <p className="text-2xl font-black">Todd Lornell</p>
                    <p className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Founder & President</p>
                  </div>
                </div>
             </div>
             <div className="lg:w-2/3 space-y-8">
               <h2 className="text-4xl font-black mb-6">Leadership rooted in <br /><span className="text-indigo-400">Experience.</span></h2>
               <p className="text-slate-300 text-lg leading-relaxed">
                 Todd Lornell brings 35+ years of business management, real estate, and operational excellence experience to Lornell Commercial Cleaning. His career spans diverse roles including property development, facility management, and commercial operations across multiple industries.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed">
                 This diverse background gives Todd unique insight into what facility managers need: reliable, professional cleaning and maintenance services that operate without disruption and meet the highest compliance standards.
               </p>
               <p className="text-slate-300 text-lg leading-relaxed">
                 Todd's philosophy centers on data-driven decision making, attention to detail, and long-term client relationships built on trust and results.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <p className="font-bold text-white mb-2 flex items-center gap-2"><Briefcase size={18} /> Licensed Professional</p>
                   <p className="text-sm text-slate-400">Holds broker licenses in Massachusetts and Connecticut.</p>
                 </div>
                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                   <p className="font-bold text-white mb-2 flex items-center gap-2"><GraduationCap size={18} /> Education</p>
                   <p className="text-sm text-slate-400">BA in Business Admin & BA in Education from University of Northern Colorado.</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default AboutUs;
