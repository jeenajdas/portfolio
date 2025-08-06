import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import profileImg from '../assets/jeena.jpeg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Hi, I'm Jeena
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 h-12 flex items-center justify-center lg:justify-start"
          >
            <span className="text-lg text-gray-700 dark:text-gray-400 mr-2">Specialized in:</span>
            <span className="text-lg font-mono text-blue-700 dark:text-purple-400">
              <ReactTyped
                strings={['Java', 'Spring Boot', 'React.js', 'Tailwind CSS', 'HTML', 'CSS', 'Javascript', 'MySQL']}
                typeSpeed={100}
                backSpeed={50}
                loop
                showCursor={true}
                cursorChar="|"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-800 dark:text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
          >
            Passionate about building modern, responsive, and accessible web experiences using the latest technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-700 dark:border-purple-400 text-blue-700 dark:text-purple-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-700 dark:border-purple-400 text-blue-700 dark:text-purple-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300 text-center"
            >
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-blue-100 dark:bg-purple-900/50 text-blue-700 dark:text-purple-400 hover:bg-blue-200 dark:hover:bg-purple-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.img
            src={profileImg}
            alt="Jeena J Das"
            className="w-72 h-72 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg border-4 border-blue-700 dark:border-purple-400"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
