import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCode, FiShoppingBag, FiZap, FiTool } = FiIcons;

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "Custom websites built with modern technologies. From landing pages to complex web applications, I create solutions that perform.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      icon: FiCode
    },
    {
      number: "02", 
      title: "E-commerce",
      description: "Full-featured online stores with seamless payment integration. Built for conversion and optimized for performance.",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      icon: FiShoppingBag
    },
    {
      number: "03",
      title: "Performance",
      description: "Speed optimization and SEO that gets results. Your website will load fast and rank high in search results.",
      technologies: ["Core Web Vitals", "SEO", "Analytics", "Optimization"],
      icon: FiZap
    },
    {
      number: "04",
      title: "Maintenance",
      description: "Ongoing support and updates to keep your website secure and running smoothly. Peace of mind included.",
      technologies: ["Updates", "Security", "Backups", "Monitoring"],
      icon: FiTool
    }
  ];

  return (
    <section className="py-32 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
            Everything you need to establish a strong digital presence and grow your business online.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-2">
                <div className="flex items-center">
                  <span className="text-6xl md:text-7xl font-bold text-gray-200">
                    {service.number}
                  </span>
                  <div className="ml-4 p-3 bg-gray-100 rounded-lg">
                    <SafeIcon icon={service.icon} className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium">
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

export default Services;
