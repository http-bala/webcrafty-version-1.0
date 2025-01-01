import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate the page load duration (e.g., API calls, assets loading)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust the time for the loader
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <>
          <HeaderNavbar />
          <main>
            <PageTransitions />
          </main>
          <ModernFooter />
          <WhatsappButton />
        </>
      )}
    </Router>
  );
};

// A separate component for page transitions
const PageTransitions = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/service"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/portfolio"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/privacy"
          element={
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PrivacyPolicyPage />
            </motion.div>
          }
        />
        {/* Repeat for other routes */}
      </Routes>
    </AnimatePresence>
  );
};

export default App;
