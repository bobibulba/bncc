import React from 'react';
import { Calendar, Clock, MapPin, Users, Star, Zap } from 'lucide-react';

export const Events: React.FC = () => {
  const events = [
    {
      title: 'Hackathon 2024',
      date: 'March 15-17, 2024',
      time: '48 Hours',
      location: 'BINUS Campus',
      participants: '200+',
      description: 'Build amazing projects in 48 hours! Win prizes, learn new skills, and network with industry professionals.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-coral',
      bgGradient: 'from-memphis-coral to-memphis-orange'
    },
    {
      title: 'Web Development Workshop',
      date: 'March 22, 2024',
      time: '4 Hours',
      location: 'Lab Computer',
      participants: '50+',
      description: 'Learn modern web development with React, Node.js, and MongoDB. Perfect for beginners and intermediate developers.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-purple',
      bgGradient: 'from-memphis-purple to-memphis-magenta'
    },
    {
      title: 'AI/ML Bootcamp',
      date: 'April 5-7, 2024',
      time: '3 Days',
      location: 'Auditorium',
      participants: '150+',
      description: 'Dive deep into Artificial Intelligence and Machine Learning. Build your first AI model and understand the future of tech.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-green',
      bgGradient: 'from-memphis-green to-memphis-cyan'
    },
    {
      title: 'Mobile App Competition',
      date: 'April 20, 2024',
      time: '1 Day',
      location: 'Innovation Hub',
      participants: '100+',
      description: 'Showcase your mobile app development skills! Categories include iOS, Android, and Cross-platform development.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-yellow',
      bgGradient: 'from-memphis-yellow to-memphis-orange'
    },
    {
      title: 'Tech Talk Series',
      date: 'Every Friday',
      time: '2 Hours',
      location: 'Various Rooms',
      participants: '75+',
      description: 'Weekly sessions with industry experts sharing insights about latest technologies, career tips, and industry trends.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-cyan',
      bgGradient: 'from-memphis-cyan to-memphis-purple'
    },
    {
      title: 'Game Development Jam',
      date: 'May 10-12, 2024',
      time: '72 Hours',
      location: 'Game Lab',
      participants: '80+',
      description: 'Create awesome games in just 72 hours! Learn Unity, Unreal Engine, or web-based game development.',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      color: 'memphis-magenta',
      bgGradient: 'from-memphis-magenta to-memphis-coral'
    }
  ];

  return (
    <section id="events" className="relative py-20 bg-gradient-to-br from-memphis-green via-white to-memphis-cyan overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-24 h-24 bg-memphis-coral rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-24 w-16 h-16 bg-memphis-purple transform rotate-45 opacity-25 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-32 h-32 bg-memphis-yellow rounded-full opacity-15 animate-pulse-fast"></div>
        
        {/* Pattern elements */}
        <div className="absolute top-1/3 right-8 w-20 h-8 bg-memphis-orange opacity-40"
             style={{clipPath: 'polygon(0 0, 25% 100%, 50% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)'}}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-memphis-green text-white font-fredoka font-medium rounded-full transform -rotate-2 animate-wiggle">
              🎉 Upcoming Events
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">
            <span className="text-memphis-purple drop-shadow-lg">Amazing</span>
            <br />
            <span className="text-memphis-coral drop-shadow-lg">Events</span>
            <br />
            <span className="text-memphis-green drop-shadow-lg">Await!</span>
          </h2>
          <p className="text-xl text-gray-700 font-fredoka max-w-3xl mx-auto">
            Join our <span className="text-memphis-coral font-bold">colorful calendar</span> of exciting events! 
            From hackathons to workshops, there's always something 
            <span className="text-memphis-purple font-bold"> amazing</span> happening at BNCC! 🌈
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform ${
                index % 2 === 0 ? 'rotate-1' : '-rotate-1'
              } hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-${event.color}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${event.bgGradient} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center animate-bounce-slow`}>
                    <Calendar className={`w-6 h-6 text-${event.color}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-fredoka font-bold text-${event.color} mb-3`}>
                  {event.title}
                </h3>
                <p className="text-gray-700 font-fredoka mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className={`w-4 h-4 text-${event.color}`} />
                    <span className="text-sm font-fredoka text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className={`w-4 h-4 text-${event.color}`} />
                    <span className="text-sm font-fredoka text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className={`w-4 h-4 text-${event.color}`} />
                    <span className="text-sm font-fredoka text-gray-600">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className={`w-4 h-4 text-${event.color}`} />
                    <span className="text-sm font-fredoka text-gray-600">{event.participants}</span>
                  </div>
                </div>

                {/* Register Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${event.bgGradient} text-white font-fredoka font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
                  <span>Register Now</span>
                  <Star className="w-4 h-4 animate-pulse-fast" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-2 -left-2 w-6 h-6 bg-${event.color} rounded-full animate-pulse-fast`}></div>
              <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-${event.color} transform rotate-45 animate-wiggle`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-memphis-purple via-memphis-coral to-memphis-orange p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <h3 className="text-3xl font-fredoka font-bold text-white mb-4">
              Don't Miss Out! 🎨
            </h3>
            <p className="text-xl text-white font-fredoka mb-6 opacity-90">
              Subscribe to our newsletter and never miss an amazing event!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full font-fredoka text-gray-700 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              />
              <button className="px-8 py-3 bg-white text-memphis-purple font-fredoka font-bold rounded-full hover:bg-memphis-yellow hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
