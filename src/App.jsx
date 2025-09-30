import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet'; // Removed due to resolution error, replaced with useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Projects from '../components/Projects.jsx';
import Pricing from '../components/Pricing.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { Toaster } from '../components/ui/toaster.jsx';
import PrivacyPolicy from '../pages/PrivacyPolicy.jsx';
import TermsAndConditions from '../pages/TermsAndConditions.jsx';
import RefundPolicy from '../pages/RefundPolicy.jsx';

function App() {

  // Replaced react-helmet functionality with a useEffect hook to avoid dependency issues.
  useEffect(() => {
    document.title = "Code4Degree - Ready-to-Use Final Year & Diploma Projects";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional final year and diploma projects for engineering students. Web, Android, PWA, Gen AI projects with full documentation and hosting included.");
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = "Professional final year and diploma projects for engineering students. Web, Android, PWA, Gen AI projects with full documentation and hosting included.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Helmet component removed */}
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Pricing />
              <Contact />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;

