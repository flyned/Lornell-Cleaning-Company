
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-indigo-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                LORNELL<span className="text-indigo-500 font-light italic"> Commercial Cleaning</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              30 Mill Street<br />
              Rochdale, MA 01542
            </p>
            <div className="space-y-1">
              <p className="text-white font-bold text-lg md:text-xl">
                (508) 887-2981
              </p>
              <p className="text-slate-400 text-sm">
                lornellcompany@gmail.com
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-all" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div className="sm:col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/office" className="hover:text-indigo-400 transition-colors">Office Maintenance</Link></li>
              <li><Link to="/services/medical" className="hover:text-indigo-400 transition-colors">Medical Disinfection</Link></li>
              <li><Link to="/services/construction" className="hover:text-indigo-400 transition-colors">Post-Construction</Link></li>
              <li><Link to="/services/industrial" className="hover:text-indigo-400 transition-colors">Industrial Cleaning</Link></li>
              <li><Link to="/services/green" className="hover:text-indigo-400 transition-colors">Green Cleaning</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-indigo-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-indigo-400 transition-colors">AI Quote</Link></li>
              <li><Link to="/service-area" className="hover:text-indigo-400 transition-colors">Locations</Link></li>
            </ul>
          </div>
          
          <div className="sm:col-span-1 lg:col-span-1">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-indigo-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 text-center md:text-left">
          <p>© 2026 Lornell Commercial Cleaning Co. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <span>Built for New England Businesses</span>
            <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <span>Headquarters in Rochdale, MA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
