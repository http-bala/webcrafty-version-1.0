import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderNavbar from './components/HeaderNavbar';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ModernFooter from './components/ModernFooter';
import Services from './pages/ServicesPage';
import WhatsappButton from './components/WhatsappButton';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/404Page';

const App = () => {
  return (
    <Router>
      <HeaderNavbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy" element={<PrivacyPolicyPage />} />
          <Route component={<NotFoundPage/>} /> {/* Catch-all 404 Page */}
        </Routes>
      </main>
      <ModernFooter/>
      <WhatsappButton/>
    </Router>
  );
};

export default App;
