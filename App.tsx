
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import QuotePage from './pages/QuotePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import OfficeCleaning from './pages/OfficeCleaning';
import MedicalCleaning from './pages/MedicalCleaning';
import ConstructionCleaning from './pages/ConstructionCleaning';
import IndustrialCleaning from './pages/IndustrialCleaning';
import GreenCleaning from './pages/GreenCleaning';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header isScrolled={scrolled} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/office" element={<OfficeCleaning />} />
            <Route path="/services/medical" element={<MedicalCleaning />} />
            <Route path="/services/construction" element={<ConstructionCleaning />} />
            <Route path="/services/industrial" element={<IndustrialCleaning />} />
            <Route path="/services/green" element={<GreenCleaning />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
