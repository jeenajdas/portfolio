import React from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub,
  FaKey, FaCode, FaDatabase
} from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTailwindcss, SiPostman, SiFirebase } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const skillCategories = [
  {
    category: 'Backend Development',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MySQL', icon: SiMysql },
      { name: 'REST API', icon: FaDatabase }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'JavaScript', icon: FaJs }
    ]
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VSCode', icon: DiVisualstudio },
      { name: 'Postman', icon: SiPostman },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'JWT', icon: FaKey }
      
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/20 dark:border-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
                      }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/40 dark:hover:shadow-purple-500/40"
                    >
                      <IconComponent className="text-4xl text-blue-600 dark:text-purple-400 mb-2 glow-text" />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-300/30 dark:border-purple-400/30 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Always learning and growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
