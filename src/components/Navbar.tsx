import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/10 dark:bg-gray-900/90 backdrop-blur-md border-b border-blue-200/20 dark:border-purple-500/20 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Jeena J Das
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 border border-blue-200/20 dark:border-purple-500/20"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile CV Button */}
            <a
              href="/resume.pdf"
              download
              className="block w-full text-left px-4 py-2 text-blue-700 dark:text-purple-400 hover:underline"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
