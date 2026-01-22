
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, Phone, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isTransparent = !isScrolled && location.pathname === '/';

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'AI Quote', path: '/quote' },
    { name: 'About', path: '/about' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isTransparent ? 'bg-transparent py-4 md:py-6' : 'bg-white/95 backdrop-blur-md shadow-lg py-2 md:py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 md:space-x-3 group shrink-0">
              <div className="bg-indigo-600 p-1.5 md:p-2 rounded-xl shadow-lg shadow-indigo-200 group-hover:rotate-12 transition-transform duration-300">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className={`text-lg md:text-2xl font-black tracking-tighter ${!isTransparent ? 'text-slate-900' : 'text-slate-900'}`}>
                LORNELL <span className="text-indigo-600 font-light italic hidden sm:inline">Commercial Cleaning</span>
                <span className="text-indigo-600 font-light italic sm:hidden">CLEAN</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`font-semibold text-xs uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-600'}`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:5088872981" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2 transform hover:-translate-y-0.5 active:scale-95">
                <Phone size={18} />
                (508) 887-2981
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeMenu}></div>
        <div className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex-grow flex flex-col justify-center space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={closeMenu}
                className={`text-2xl font-black uppercase tracking-tight transition-colors ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Urgent Inquiries</p>
              <a href="tel:5088872981" className="bg-indigo-600 text-white w-full py-4 rounded-2xl font-black text-center flex items-center justify-center gap-3 shadow-xl shadow-indigo-100">
                <Phone size={24} />
                (508) 887-2981
              </a>
            </div>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400">Headquartered in Rochdale, MA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
