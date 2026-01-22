
import React from 'react';
import ServiceMap from '../components/ServiceMap';
import { MapPin, Info } from 'lucide-react';

const regions = [
  {
    state: "Massachusetts",
    hubs: ["Greater Boston", "Worcester", "Springfield", "Cambridge"],
    note: "Our headquarters and densest service network."
  },
  {
    state: "Connecticut",
    hubs: ["Hartford", "Stamford", "New Haven", "Bridgeport"],
    note: "Serving the bustling Tri-State corridor."
  },
  {
    state: "Rhode Island",
    hubs: ["Providence", "Warwick", "Newport"],
    note: "Localized teams for the Ocean State."
  },
  {
    state: "New Hampshire",
    hubs: ["Manchester", "Nashua", "Portsmouth"],
    note: "Full coverage for the Seacoast and southern hubs."
  },
  {
    state: "Vermont",
    hubs: ["Burlington", "Montpelier", "Rutland"],
    note: "Eco-focused cleaning for the Green Mountain State."
  },
  {
    state: "Maine",
    hubs: ["Portland", "Augusta", "Bangor"],
    note: "Coastal and central facility support."
  }
];

const ServiceAreaPage: React.FC = () => {
  return (
    <div className="page-transition pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Our Presence</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From the bustling streets of Boston to the quiet tech parks of Vermont, Lornell brings professional facility care to every corner of New England.
          </p>
        </div>

        <ServiceMap />

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((r, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-indigo-600 text-white p-2 rounded-lg">
                  <MapPin size={20} />
                </div>
                <h3 className="text-xl font-bold">{r.state}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex flex-wrap gap-2">
                  {r.hubs.map((hub, hi) => (
                    <span key={hi} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold italic">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-2 text-sm text-slate-500 border-t pt-4">
                <Info size={16} className="shrink-0 mt-0.5" />
                <p>{r.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-indigo-50 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
             <h2 className="text-2xl font-bold text-indigo-900 mb-2">Don't see your city?</h2>
             <p className="text-indigo-700">We are rapidly expanding. Contact us to check availability in your specific zip code.</p>
          </div>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all whitespace-nowrap">
            Check My Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
