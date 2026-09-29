import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "CEO, TechStart",
      content: "Working with Sampson was an absolute pleasure. He took our vague concept and turned it into a stunning, functional website that's helped us increase conversions by 40%. His attention to detail and commitment to quality is unmatched.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director, StyleBrand",
      content: "Sampson completely transformed our e-commerce platform. The new design is not only beautiful but has significantly improved our user experience and sales. He's responsive, professional, and truly understands how to create websites that convert.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, DataViz",
      content: "I've worked with many developers, but Sampson stands out for his technical expertise and creative problem-solving. He built us a complex web application that's been crucial for our business growth. I highly recommend his services.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
