
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Stethoscope, Factory, HardHat, Store, School, ShieldCheck, Zap, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

const detailedServices = [
  {
    title: "Corporate & Office",
    path: "/services/office",
    icon: <Building2 />,
    features: ["Daily Janitorial Services", "High-Touch Point Disinfection", "Window Cleaning", "Trash & Recycling Management"],
    desc: "We create pristine workspaces that foster productivity and leave a lasting impression on your clients."
  },
  {
    title: "Healthcare Facilities",
    path: "/services/medical",
    icon: <Stethoscope />,
    features: ["HIPAA Compliant Protocols", "Terminal Cleaning", "Waiting Room Sanitization", "Surgical Center Maintenance"],
    desc: "Clinically clean environments where patient safety and regulatory compliance are our top priorities."
  },
  {
    title: "Industrial & Logistics",
    path: "/services/industrial",
    icon: <Factory />,
    features: ["Concrete Floor Scrubbing", "High-Bay Dusting", "Loading Dock Maintenance", "Breakroom Sanitation"],
    desc: "Rugged cleaning solutions for manufacturing plants and distribution hubs across New England."
  },
  {
    title: "Education & Campus",
    path: "/services",
    icon: <School />,
    features: ["Green Seal Certified Products", "Gymnasium Floor Care", "Dormitory Deep Cleans", "Cafeteria Sanitization"],
    desc: "Safe, healthy learning environments for students and faculty using non-toxic cleaning methods."
  },
  {
    title: "Post-Construction",
    path: "/services/construction",
    icon: <HardHat />,
    features: ["Debris & Dust Removal", "Window Detailing", "Floor Polishing", "Final Turn-Over Cleans"],
    desc: "Detailed cleanup services for developers and contractors to ensure a flawless project delivery."
  },
  {
    title: "Green Cleaning",
    path: "/services/green",
    icon: <Heart />,
    features: ["Eco-Label Products", "HEPA-Filtration Vacuums", "VOC-Free Solutions", "Microfiber Systems"],
    desc: "Sustainable cleaning programs that prioritize indoor air quality and environmental health."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="page-transition pt-32">
      <div className="bg-indigo-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Regional Service Catalog</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Comprehensive, professional cleaning protocols tailored for New England's most demanding industries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {detailedServices.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col h-full hover:border-indigo-200 transition-all">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link 
                to={s.path} 
                className="inline-flex items-center justify-center gap-2 bg-slate-50 text-indigo-600 py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all"
              >
                View Full Protocol <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-slate-50 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-slate-100 shadow-sm">
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">The Lornell Gold Standard</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-indigo-600 shrink-0">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Rigorous Quality Control</h4>
                      <p className="text-slate-600 text-sm">Every site undergoes a weekly 50-point inspection by a dedicated area manager.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-indigo-600 shrink-0">
                      <Zap />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Modern Fleet</h4>
                      <p className="text-slate-600 text-sm">We utilize autonomous scrubbers and IoT-enabled dispensers to track supply levels.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-indigo-600 shrink-0">
                      <Heart />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Health Focused</h4>
                      <p className="text-slate-600 text-sm">Prioritizing hospital-grade, VOC-free products that protect your indoor air quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white bg-slate-200 aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Professional cleaning equipment" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
