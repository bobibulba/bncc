import React from 'react';
import { Code, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Github, Heart, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', color: 'memphis-coral', label: 'Instagram' },
    { icon: Twitter, href: '#', color: 'memphis-cyan', label: 'Twitter' },
    { icon: Youtube, href: '#', color: 'memphis-orange', label: 'YouTube' },
    { icon: Github, href: '#', color: 'memphis-purple', label: 'GitHub' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Join BNCC', href: '#join' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-memphis-purple via-memphis-coral to-memphis-orange overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white bg-opacity-15 transform rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse-fast"></div>
        
        {/* Pattern elements */}
        <div className="absolute top-1/2 right-10 w-32 h-6 bg-white bg-opacity-20"
             style={{clipPath: 'polygon(0 0, 25% 100%, 50% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)'}}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform rotate-12 animate-wiggle">
                  <Code className="w-8 h-8 text-memphis-purple" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-memphis-yellow rounded-full animate-pulse-fast"></div>
              </div>
              <div>
                <h3 className="text-4xl font-fredoka font-bold text-white drop-shadow-lg">BNCC</h3>
                <p className="text-lg text-white opacity-90 font-fredoka">Bina Nusantara Computer Club</p>
              </div>
            </div>
            
            <p className="text-white font-fredoka text-lg leading-relaxed mb-6 opacity-90">
              Join the most <span className="font-bold text-memphis-yellow">vibrant</span> and 
              <span className="font-bold text-memphis-pink"> innovative</span> tech community at BINUS! 
              We're passionate about coding, creativity, and building the future together! 🚀
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-fredoka">bncc@binus.ac.id</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-fredoka">+62 21 5345 830</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-fredoka">BINUS University, Jakarta</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl font-fredoka font-bold text-white mb-6 flex items-center space-x-2">
              <Star className="w-6 h-6 text-memphis-yellow animate-pulse-fast" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white font-fredoka hover:text-memphis-yellow transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:bg-memphis-yellow transition-colors duration-300"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-2xl font-fredoka font-bold text-white mb-6 flex items-center space-x-2">
              <Heart className="w-6 h-6 text-memphis-pink animate-pulse-fast" />
              <span>Stay Connected</span>
            </h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-${social.color} hover:scale-110 transition-all duration-300 animate-bounce-slow`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-white font-fredoka mb-4 opacity-90">
                Subscribe for updates! 📧
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-full font-fredoka text-gray-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                />
                <button className="px-6 py-3 bg-memphis-yellow text-memphis-purple font-fredoka font-bold rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                  Subscribe! 🎉
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-white font-fredoka text-center lg:text-left">
              <p className="flex items-center justify-center lg:justify-start space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-memphis-pink animate-pulse-fast" />
                <span>by BNCC Team © 2024</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-white font-fredoka">
              <a href="#privacy" className="hover:text-memphis-yellow transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-memphis-yellow transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Fun Elements */}
        <div className="absolute bottom-4 right-4">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-memphis-yellow rounded-full animate-bounce-slow"></div>
            <div className="w-4 h-4 bg-memphis-pink rounded-full animate-bounce-slow" style={{animationDelay: '0.1s'}}></div>
            <div className="w-4 h-4 bg-memphis-cyan rounded-full animate-bounce-slow" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
