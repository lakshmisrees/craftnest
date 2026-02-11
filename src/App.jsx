import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-pink-50 text-gray-800 font-sans scroll-smooth">
      {/* Navbar - fixed at top */}
      <Navbar />

      {/* Hero section with spacing for fixed navbar */}
      <section id="home" className="pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <Hero />
        </div>
      </section>

      {/* About section */}
      <section id="about" className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Product showcase section */}
      <section id="shop" className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Products />
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="bg-purple-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;