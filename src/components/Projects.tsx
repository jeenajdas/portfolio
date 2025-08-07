import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'EasyTrip – Bus Ticket Booking App',
      description: 'A Full-stack bus ticket booking system with seat selection, booking flow, and QR-coded PDF tickets. Built with Spring Boot + React.Admin dashboard provides control over routes, users, and revenue reporting.',
      tech: ['Java', 'Spring Boot', 'React.js', 'iText', 'JWT','MySQL'],
      github: 'https://github.com/jeenajdas/bus-ticket-booking',
      image: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Finora – Expense Tracker',
      description: 'A personal finance management tool to track expenses, visualize data,set monthly budgets, and view spending insights with charts. Built with Spring Boot & React. Includes JWT auth and email verification.',
      tech: ['Java', 'Spring Boot', 'React.js', 'Chart.js', 'Tailwind CSS', 'MySQL'],
      
      github: 'https://github.com/jeenajdas/finora-expense-tracker',
      image: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    
    {
      title: 'Typing Speed Tester',
      description: 'A responsive web app to test and improve typing speed with real-time WPM calculation, accuracy tracking, and dynamic sentence generation. Built with React for fast rendering and clean user experience.',
      tech: ['React', 'CSS', 'JavaScript',],
      github: 'https://github.com/jeenajdas/typing-speed-test',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Concert Booking Backend',
      description: 'Full-featured Spring Boot backend for a concert ticket booking system with JWT auth, role-based access, seat reservation, PDF ticket generation with QR code, and email confirmations.Built with Spring Boot backend with JWT, ticket limits, and role-based access control.',
      tech: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
      github: 'https://github.com/jeenajdas/concert-booking-backend',
      image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Booksky – Book Tracker',
      description: 'A responsive web app to manage your reading list. Features include adding, editing, and deleting books, marking favorites, and persisting data using LocalStorage. Built with JavaScript, HTML, and CSS with a clean, minimalist UI.',


      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/jeenajdas/booksky',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-200/20 dark:border-purple-500/20 hover:border-blue-300/40 dark:hover:border-purple-400/40 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100/50 dark:bg-purple-900/30 text-blue-800 dark:text-purple-300 rounded-full border border-blue-200/30 dark:border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
