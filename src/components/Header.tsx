import React, { useState } from 'react';
import { Menu, X, Code, Users, Trophy, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-gradient-to-r from-memphis-coral via-memphis-purple to-memphis-green p-4 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-memphis-yellow rounded-full flex items-center justify-center transform rotate-12 animate-wiggle">
              <Code className="w-6 h-6 text-memphis-purple" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-memphis-pink rounded-full animate-pulse-fast"></div>
          </div>
          <div>
            <h1 className="text-3xl font-fredoka font-bold text-white drop-shadow-lg">BNCC</h1>
            <p className="text-sm text-memphis-pink font-fredoka">Computer Club</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: 'Home', icon: Code },
            { name: 'About', icon: Users },
            { name: 'Events', icon: Calendar },
            { name: 'Competitions', icon: Trophy }
          ].map((item, index) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-fredoka font-medium text-white hover:bg-white hover:text-memphis-purple transition-all duration-300 transform hover:scale-110 ${
                index % 2 === 0 ? 'bg-memphis-orange' : 'bg-memphis-cyan'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 bg-memphis-yellow rounded-full flex items-center justify-center text-memphis-purple hover:bg-memphis-pink transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-memphis-purple to-memphis-coral p-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {[
              { name: 'Home', icon: Code },
              { name: 'About', icon: Users },
              { name: 'Events', icon: Calendar },
              { name: 'Competitions', icon: Trophy }
            ].map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`flex items-center space-x-3 px-4 py-3 rounded-2xl font-fredoka font-medium text-white ${
                  index % 2 === 0 ? 'bg-memphis-orange' : 'bg-memphis-cyan'
                } hover:bg-white hover:text-memphis-purple transition-all duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
