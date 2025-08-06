import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Jeena J Das
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Full Stack Developer passionate about creating amazing web experiences
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-blue-100 dark:bg-purple-900/50 text-blue-600 dark:text-purple-400 hover:bg-blue-200 dark:hover:bg-purple-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-current" />
            </motion.div>
            <span></span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            © 2025 Jeena J Das. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;