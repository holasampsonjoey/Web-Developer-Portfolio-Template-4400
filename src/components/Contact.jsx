import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiPhone, FiMapPin, FiClock } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! I'll get back to you soon."
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: "", email: "", project: "", message: "" });
      setFormStatus({
        submitted: false,
        error: false,
        message: ""
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-32 bg-black text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Ready to start your project? I'd love to hear about your ideas and discuss how we can bring them to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {formStatus.submitted && (
                <div className={`p-4 ${formStatus.error ? 'bg-red-900/20' : 'bg-green-900/20'} mb-6`}>
                  {formStatus.message}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white focus:border-white focus:outline-none text-lg"
                >
                  <option value="" className="bg-black">Select project type</option>
                  <option value="website" className="bg-black">Website Development</option>
                  <option value="webapp" className="bg-black">Web Application</option>
                  <option value="ecommerce" className="bg-black">E-commerce</option>
                  <option value="design" className="bg-black">UI/UX Design</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-gray-400 focus:border-white focus:outline-none text-lg resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiMail} className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Email</div>
                    <a href="mailto:hola@sampsonjoey.com" className="text-lg text-white hover:text-gray-300 transition-colors">
                      hola@sampsonjoey.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiPhone} className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-lg text-white hover:text-gray-300 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiMapPin} className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Location</div>
                    <div className="text-lg text-white">Austin, TX</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiClock} className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Availability</div>
                    <div className="text-lg text-white">Monday - Friday, 9am - 6pm CST</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Response Time</h3>
              <p className="text-gray-300 leading-relaxed">
                I typically respond within 24 hours. For urgent projects or questions, 
                feel free to call directly and I'll get back to you as soon as possible.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What's Next?</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-white font-bold">01</span>
                  <span>I'll review your project details and get back to you</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white font-bold">02</span>
                  <span>We'll schedule a call to discuss your requirements</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white font-bold">03</span>
                  <span>I'll provide a detailed proposal and timeline</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-white font-bold">04</span>
                  <span>Upon approval, we'll begin the development process</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
