import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollButton(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}
    >
      <Navbar/>


      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>

      {/* Footer with ref for visibility detection */}
      <div ref={footerRef}>
  <Footer showScrollButton={showScrollButton} scrollToTop={scrollToTop} />
</div>


      
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-md bg-blue-600 text-white hover:bg-blue-700 transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </div>
  );
}

export default App;
