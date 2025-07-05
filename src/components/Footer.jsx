import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGithub, FiLinkedin, FiTwitter, FiMail } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-6">
              Sampson Joey
            </h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Web developer focused on creating exceptional digital experiences. 
              Available for freelance projects and collaborations.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiGithub} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiTwitter} className="h-6 w-6" />
              </a>
              <a href="mailto:hola@sampsonjoey.com" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiMail} className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-black mb-6">Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#services" className="hover:text-black transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">E-commerce</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Performance</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-black mb-6">Links</h4>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#portfolio" className="hover:text-black transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Sampson Joey. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-4 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;