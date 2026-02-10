import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Interlock from './pages/services/Interlock';
import Decks from './pages/services/Decks';
import Landscaping from './pages/services/Landscaping';
import Fences from './pages/services/Fences';
import About from './pages/About';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Reviews from './components/Reviews';

import ReactGA from "react-ga4";

// Initialize with your Measurement ID
ReactGA.initialize("G-QMQ9T0FGM5");

// Send an initial pageview
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interlock" element={<Interlock />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/fences" element={<Fences />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Reviews />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;