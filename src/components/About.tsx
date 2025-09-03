import React from 'react';
import { Code, Users, Trophy, Lightbulb, Rocket, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Learn Programming',
      description: 'Master various programming languages and frameworks through hands-on workshops and mentorship programs.',
      color: 'memphis-coral',
      bgColor: 'bg-memphis-coral'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Connect with like-minded tech enthusiasts and build lasting friendships in our vibrant community.',
      color: 'memphis-purple',
      bgColor: 'bg-memphis-purple'
    },
    {
      icon: Trophy,
      title: 'Win Competitions',
      description: 'Participate in hackathons, coding contests, and tech competitions to showcase your skills.',
      color: 'memphis-green',
      bgColor: 'bg-memphis-green'
    },
    {
      icon: Lightbulb,
      title: 'Innovate Together',
      description: 'Collaborate on exciting projects and turn your creative ideas into reality with team support.',
      color: 'memphis-orange',
      bgColor: 'bg-memphis-orange'
    },
    {
      icon: Rocket,
      title: 'Launch Careers',
      description: 'Get career guidance, internship opportunities, and industry connections to boost your future.',
      color: 'memphis-cyan',
      bgColor: 'bg-memphis-cyan'
    },
    {
      icon: Heart,
      title: 'Have Fun',
      description: 'Enjoy tech talks, game nights, and social events that make learning programming enjoyable.',
      color: 'memphis-magenta',
      bgColor: 'bg-memphis-magenta'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-memphis-yellow via-white to-memphis-pink overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-memphis-coral rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-memphis-purple transform rotate-45 opacity-25 animate-wiggle"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-memphis-green rounded-full opacity-15 animate-bounce-slow"></div>
        
        {/* Zigzag pattern */}
        <div className="absolute top-1/2 right-10 w-32 h-6 bg-memphis-orange opacity-30"
             style={{clipPath: 'polygon(0 0, 25% 100%, 50% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)'}}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-memphis-purple text-white font-fredoka font-medium rounded-full transform rotate-2 animate-wiggle">
              🎨 About BNCC
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">
            <span className="text-memphis-coral drop-shadow-lg">Why Choose</span>
            <br />
            <span className="text-memphis-purple drop-shadow-lg">BNCC?</span>
          </h2>
          <p className="text-xl text-gray-700 font-fredoka max-w-3xl mx-auto">
            We're not just a computer club - we're a <span className="text-memphis-coral font-bold">colorful community</span> of 
            passionate developers, designers, and innovators who believe learning should be 
            <span className="text-memphis-green font-bold"> fun and exciting!</span> 🌈
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white rounded-3xl shadow-xl transform ${
                index % 2 === 0 ? 'rotate-2' : '-rotate-2'
              } hover:rotate-0 hover:scale-105 transition-all duration-300 border-4 border-${feature.color}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6 animate-bounce-slow`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className={`text-2xl font-fredoka font-bold text-${feature.color} mb-4`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 font-fredoka leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative elements */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-${feature.color} rounded-full animate-pulse-fast`}></div>
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-${feature.color} transform rotate-45 animate-wiggle`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-memphis-coral via-memphis-purple to-memphis-green p-8 rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Active Members', emoji: '👥' },
              { number: '50+', label: 'Events Per Year', emoji: '🎉' },
              { number: '100+', label: 'Projects Built', emoji: '💻' },
              { number: '25+', label: 'Awards Won', emoji: '🏆' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl mb-2 animate-bounce-slow">{stat.emoji}</div>
                <div className="text-4xl lg:text-5xl font-fredoka font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-fredoka opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group px-12 py-6 bg-gradient-to-r from-memphis-green to-memphis-cyan text-white font-fredoka font-bold text-xl rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-pulse-fast">
            <span className="flex items-center space-x-3">
              <span>Ready to Join the Fun?</span>
              <span className="text-2xl group-hover:animate-bounce">🎨</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
