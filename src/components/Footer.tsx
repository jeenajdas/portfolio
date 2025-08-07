import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  showScrollButton: boolean;
  scrollToTop: () => void;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({  }, ref) => {
    const socialLinks = [
      { icon: Github, href: 'https://github.com/jeenajdas', label: 'GitHub' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/jeena-j-das-94a4822a8', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:jeenajee80@gmail.com', label: 'Email' }
    ];

    return (
      <footer
        ref={ref}
        className="bg-white dark:bg-gray-950 py-10 px-4 border-t border-gray-300/20 dark:border-gray-700/40 relative"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-2"
          >
            Jeena J Das
          </motion.h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
            Full Stack Developer | Crafting seamless and interactive web solutions
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-blue-100 dark:bg-purple-900/40 text-blue-600 dark:text-purple-300 hover:bg-blue-200 dark:hover:bg-purple-800 transition-all duration-300 hover:shadow-md"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Professional Footer Text */}
          <div className="text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Jeena J Das. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
