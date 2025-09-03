import React from 'react';
import { ArrowRight, Zap, Star, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-memphis-pink via-white to-memphis-yellow overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-memphis-coral rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-memphis-purple transform rotate-45 opacity-25 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-memphis-green rounded-full opacity-15 animate-pulse-fast"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-memphis-orange text-white font-fredoka font-medium rounded-full transform -rotate-2 animate-wiggle">
              🚀 Welcome to the Future!
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-fredoka font-bold mb-6 leading-tight">
            <span className="text-memphis-purple drop-shadow-lg">BINA</span>
            <br />
            <span className="text-memphis-coral drop-shadow-lg">NUSANTARA</span>
            <br />
            <span className="text-memphis-green drop-shadow-lg">COMPUTER</span>
            <br />
            <span className="text-memphis-orange drop-shadow-lg">CLUB</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 font-fredoka mb-8 max-w-2xl">
            Join the most <span className="text-memphis-coral font-bold">vibrant</span> and 
            <span className="text-memphis-purple font-bold"> innovative</span> tech community! 
            Learn, create, and compete with fellow programmers in a 
            <span className="text-memphis-green font-bold"> colorful</span> journey of discovery! 🎨💻
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group px-8 py-4 bg-gradient-to-r from-memphis-coral to-memphis-orange text-white font-fredoka font-bold text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
              <span>Join BNCC Now!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 bg-white text-memphis-purple font-fredoka font-bold text-lg rounded-full border-4 border-memphis-purple transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:bg-memphis-purple hover:text-white">
              Explore Events
            </button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
            {[
              { number: '500+', label: 'Members', icon: Heart, color: 'memphis-coral' },
              { number: '50+', label: 'Events', icon: Star, color: 'memphis-purple' },
              { number: '100+', label: 'Projects', icon: Zap, color: 'memphis-green' }
            ].map((stat, index) => (
              <div key={index} className={`text-center p-4 bg-white rounded-2xl shadow-lg transform rotate-${index % 2 === 0 ? '2' : '-2'} hover:rotate-0 transition-transform duration-300`}>
                <div className={`w-12 h-12 bg-${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce-slow`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-2xl font-fredoka font-bold text-${stat.color}`}>{stat.number}</div>
                <div className="text-sm font-fredoka text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 relative">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="BNCC Community"
              className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            
            {/* Floating elements around image */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-memphis-yellow rounded-full flex items-center justify-center animate-bounce-slow">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-memphis-pink rounded-full flex items-center justify-center animate-pulse-fast">
              <span className="text-xl">🎯</span>
            </div>
            <div className="absolute -bottom-6 -left-4 w-14 h-14 bg-memphis-cyan rounded-full flex items-center justify-center animate-wiggle">
              <span className="text-xl">🚀</span>
            </div>
            <div className="absolute -bottom-4 -right-6 w-18 h-18 bg-memphis-green rounded-full flex items-center justify-center animate-float">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
