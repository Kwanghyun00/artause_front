import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceFlow from './components/ServiceFlow';
import Achievements from './components/Achievements';
import PartnerSlider from './components/PartnerSlider';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <ServiceFlow />
              <Achievements />
              <PartnerSlider />
              <Contact />
            </>
          } />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;