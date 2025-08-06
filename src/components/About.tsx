import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React.js and modern CSS frameworks.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Java, Spring Boot, and database management.'
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'Delivering complete web applications with seamless integration between frontend and backend.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.2)',
                    '0 0 40px rgba(147, 51, 234, 0.2)',
                    '0 0 20px rgba(59, 130, 246, 0.2)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/20 dark:border-purple-500/20"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate full stack developer with a focus on building scalable and user-friendly web applications using Java, Spring Boot, React.js, and Tailwind CSS. I love clean code, responsive design, and delivering real-world solutions.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My journey in software development has equipped me with strong problem-solving skills and a deep understanding of both frontend and backend technologies. I'm constantly learning new technologies and best practices to stay current in this ever-evolving field.
                </p>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-500/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-500/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-200/20 dark:border-purple-500/20 hover:border-blue-300/30 dark:hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;