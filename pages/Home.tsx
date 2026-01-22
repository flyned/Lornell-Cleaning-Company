
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceMap from '../components/ServiceMap';
import Testimonials from '../components/Testimonials';
import QuoteAI from '../components/QuoteAI';
import ContactForm from '../components/ContactForm';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="page-transition">
      <Hero />
      <section className="bg-white">
        <Services />
        <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
            Explore All Specialized Services <ArrowRight size={20} />
          </Link>
        </div>
      </section>
      
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Regional Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proudly serving businesses across Massachusetts, Connecticut, Rhode Island, New Hampshire, Vermont, and Maine.
            </p>
          </div>
          <ServiceMap />
          <div className="mt-12 text-center">
             <Link to="/service-area" className="text-indigo-600 font-bold hover:underline">View Detailed Coverage Maps</Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <QuoteAI />
        </div>
      </section>

      <Testimonials />
      
      <section className="py-20 bg-slate-50">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
