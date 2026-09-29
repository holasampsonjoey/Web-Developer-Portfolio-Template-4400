import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowUpRight, FiLink, FiGithub } = FiIcons;

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Nomad Traveler",
      category: "Web Development",
      description: "Travel blog platform with interactive maps, itinerary planning, and photo galleries. Features user accounts and social sharing.",
      image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop",
      technologies: ["Next.js", "MongoDB", "Mapbox", "Cloudinary"],
      year: "2024",
      liveLink: "https://example.com/nomad",
      githubLink: "https://github.com/sampsonjoey/nomad",
      type: "featured"
    },
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with advanced filtering, wishlist functionality, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
      liveLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/sampsonjoey/ecommerce",
      type: "web"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard with real-time data visualization and comprehensive reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Chart.js", "Express", "PostgreSQL"],
      year: "2024",
      liveLink: "https://example.com/dashboard",
      githubLink: "https://github.com/sampsonjoey/dashboard",
      type: "web"
    },
    {
      title: "Restaurant Chain",
      category: "Web Development",
      description: "Multi-location restaurant website with online ordering, table reservations, and loyalty program.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["Next.js", "Tailwind", "Prisma", "Stripe"],
      year: "2023",
      liveLink: "https://example.com/restaurant",
      githubLink: "https://github.com/sampsonjoey/restaurant",
      type: "featured"
    },
    {
      title: "Creative Portfolio",
      category: "Web Design",
      description: "Minimalist portfolio website for a creative professional with smooth animations and gallery features.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["React", "Framer Motion", "Sanity", "Vercel"],
      year: "2023",
      liveLink: "https://example.com/portfolio",
      githubLink: "https://github.com/sampsonjoey/portfolio",
      type: "design"
    },
    {
      title: "Photography Showcase",
      category: "Web Design",
      description: "Interactive photography portfolio with masonry grid layout, lightbox viewer, and custom filtering.",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800&h=600&fit=crop",
      technologies: ["React", "CSS Grid", "Lightbox", "Netlify"],
      year: "2023",
      liveLink: "https://example.com/photography",
      githubLink: "https://github.com/sampsonjoey/photography",
      type: "design"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <section className="py-32 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            Selected Work
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12">
            A collection of projects that showcase my approach to solving complex problems through design and development.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-6 py-3 text-sm font-medium transition-colors ${filter === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('featured')} 
              className={`px-6 py-3 text-sm font-medium transition-colors ${filter === 'featured' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Featured
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-6 py-3 text-sm font-medium transition-colors ${filter === 'web' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Web Apps
            </button>
            <button 
              onClick={() => setFilter('design')} 
              className={`px-6 py-3 text-sm font-medium transition-colors ${filter === 'design' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            >
              Design
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <SafeIcon icon={FiLink} className="h-6 w-6 text-black" />
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <SafeIcon icon={FiGithub} className="h-6 w-6 text-black" />
                    </a>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <SafeIcon icon={FiArrowUpRight} className="h-6 w-6 text-black" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {project.year}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-black group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
