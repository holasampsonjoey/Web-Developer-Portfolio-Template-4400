import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiArrowUp } = FiIcons;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-black mb-6">
              Sampson Joey
            </h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Full Stack Developer & UI/UX Designer focused on creating exceptional digital experiences. 
              Based in Austin, TX and available for freelance projects and collaborations.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/sampsonjoey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiGithub} className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/sampsonjoey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiLinkedin} className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/sampsonjoey" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiTwitter} className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/sampsonjoey.dev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
                <SafeIcon icon={FiInstagram} className="h-6 w-6" />
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
              <li><a href="#services" className="hover:text-black transition-colors">UI/UX Design</a></li>
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
              <li><a href="#" className="hover:text-black transition-colors">Resources</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Sampson Joey. All rights reserved.
          </p>
          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <span className="mr-2">Back to Top</span>
              <SafeIcon icon={FiArrowUp} className="h-4 w-4" />
            </button>
            <p className="text-gray-600 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
