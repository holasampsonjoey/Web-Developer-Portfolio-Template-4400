import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;