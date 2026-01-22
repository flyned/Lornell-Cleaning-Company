
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Facility Manager, Boston Tech Hub",
    content: "Lornell has completely transformed our office environment. Their attention to detail, especially in our high-traffic lab areas, is unmatched in New England.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "David Chen",
    role: "Owner, Harborview Seafood",
    content: "Maintaining a restaurant in Rhode Island means dealing with sand and salt daily. Lornell's team understands the local challenges and keeps our floors pristine.",
    image: "https://picsum.photos/seed/david/100/100"
  },
  {
    name: "Michael Rossi",
    role: "Director, Hartford Medical Center",
    content: "Critical care cleaning requires precision. Lornell delivers consistent hospital-grade disinfection every single night without fail.",
    image: "https://picsum.photos/seed/rossi/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Trusted Across the Region</h2>
          <p className="text-slate-600">Hear from the facility managers and owners who rely on Lornell.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] relative flex flex-col h-full hover:shadow-xl transition-shadow">
              <div className="absolute top-8 right-8 text-indigo-200">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex text-amber-400 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-slate-700 italic mb-8 flex-grow">"{t.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
