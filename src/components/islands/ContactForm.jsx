import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
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
  );
};

export default ContactForm;
