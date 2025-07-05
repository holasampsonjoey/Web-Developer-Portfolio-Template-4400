import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "HTML5", "CSS3", "Tailwind CSS", "MongoDB", "PostgreSQL", "Git",
    "Docker", "AWS", "Figma", "Webflow", "Shopify", "WordPress"
  ];

  const experience = [
    {
      year: "2024",
      role: "Senior Web Developer",
      company: "Freelance",
      description: "Leading web development projects for various clients, specializing in modern JavaScript frameworks and e-commerce solutions."
    },
    {
      year: "2022-2024",
      role: "Full Stack Developer",
      company: "Tech Startup",
      description: "Built and maintained web applications serving thousands of users, focusing on performance optimization and user experience."
    },
    {
      year: "2020-2022",
      role: "Frontend Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and web applications for clients across various industries, from startups to enterprise."
    }
  ];

  return (
    <section className="py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                I'm a web developer passionate about creating digital experiences that make a difference. 
                With over 5 years of experience, I've worked with startups, agencies, and established companies 
                to build websites and applications that perform.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving. I believe great websites 
                should be fast, accessible, and beautiful. Every project is an opportunity to push boundaries 
                and create something meaningful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Experience</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-6">
                    <div className="text-sm text-gray-500 font-medium mb-1">{exp.year}</div>
                    <div className="text-lg font-bold text-black mb-1">{exp.role}</div>
                    <div className="text-gray-600 mb-2">{exp.company}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">{exp.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-black mb-8">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-50 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;