
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Stethoscope, Factory, HardHat, Store, School, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Office Cleaning",
    path: "/services/office",
    desc: "Complete daily or weekly maintenance for high-traffic corporate environments.",
    icon: <Building2 className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Medical Facilities",
    path: "/services/medical",
    desc: "Stringent disinfecting protocols for clinics, labs, and specialized care centers.",
    icon: <Stethoscope className="w-8 h-8" />,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Industrial & Warehouse",
    path: "/services/industrial",
    desc: "Heavy-duty cleaning for manufacturing floors, loading docks, and storage units.",
    icon: <Factory className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Post-Construction",
    path: "/services/construction",
    desc: "Expert debris removal and detailed finishing for newly completed developments.",
    icon: <HardHat className="w-8 h-8" />,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Green Cleaning",
    path: "/services/green",
    desc: "Health-first protocols using non-toxic, eco-certified products for all spaces.",
    icon: <Store className="w-8 h-8" />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Educational Spaces",
    path: "/services",
    desc: "Safe, non-toxic cleaning for schools, universities, and daycare facilities.",
    icon: <School className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Comprehensive Facility Care</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don't just sweep floors; we manage environments. Our proprietary protocols are designed to enhance employee productivity and build customer trust through visible precision.
            </p>
          </div>
          <div className="hidden md:block">
             <Link to="/services" className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-1 hover:text-indigo-800 hover:border-indigo-800 transition-all">
               View All Specializations
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link 
              to={service.path}
              key={idx} 
              className="group p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 bg-white hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {service.desc}
              </p>
              <div className="pt-6 border-t border-slate-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-indigo-600 font-bold">
                Learn More <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
