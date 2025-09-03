import React from 'react';
import { Trophy, Medal, Star, Zap, Target, Crown } from 'lucide-react';

export const Competitions: React.FC = () => {
  const competitions = [
    {
      title: 'BNCC Coding Championship',
      category: 'Programming',
      prize: '$5,000',
      participants: '500+',
      difficulty: 'Advanced',
      description: 'The ultimate coding challenge! Solve complex algorithms and data structure problems to claim the crown.',
      icon: Crown,
      color: 'memphis-coral',
      bgGradient: 'from-memphis-coral to-memphis-orange',
      emoji: '👑'
    },
    {
      title: 'Web Design Contest',
      category: 'Design',
      prize: '$3,000',
      participants: '300+',
      difficulty: 'Intermediate',
      description: 'Create stunning, responsive websites that showcase your creativity and technical skills.',
      icon: Star,
      color: 'memphis-purple',
      bgGradient: 'from-memphis-purple to-memphis-magenta',
      emoji: '🎨'
    },
    {
      title: 'Mobile App Innovation',
      category: 'Development',
      prize: '$4,000',
      participants: '250+',
      difficulty: 'Advanced',
      description: 'Build innovative mobile applications that solve real-world problems and impress the judges.',
      icon: Zap,
      color: 'memphis-green',
      bgGradient: 'from-memphis-green to-memphis-cyan',
      emoji: '📱'
    },
    {
      title: 'AI Challenge',
      category: 'Machine Learning',
      prize: '$6,000',
      participants: '200+',
      difficulty: 'Expert',
      description: 'Develop cutting-edge AI solutions using machine learning and deep learning techniques.',
      icon: Target,
      color: 'memphis-yellow',
      bgGradient: 'from-memphis-yellow to-memphis-orange',
      emoji: '🤖'
    },
    {
      title: 'Cybersecurity CTF',
      category: 'Security',
      prize: '$3,500',
      participants: '400+',
      difficulty: 'Advanced',
      description: 'Capture the flag in this intense cybersecurity competition. Test your hacking and defense skills.',
      icon: Medal,
      color: 'memphis-cyan',
      bgGradient: 'from-memphis-cyan to-memphis-purple',
      emoji: '🛡️'
    },
    {
      title: 'Game Development Jam',
      category: 'Gaming',
      prize: '$2,500',
      participants: '150+',
      difficulty: 'Intermediate',
      description: 'Create amazing games in limited time. Show off your creativity and game development skills.',
      icon: Trophy,
      color: 'memphis-magenta',
      bgGradient: 'from-memphis-magenta to-memphis-coral',
      emoji: '🎮'
    }
  ];

  const achievements = [
    { title: 'National Champions', count: '15x', icon: Crown, color: 'memphis-coral' },
    { title: 'International Awards', count: '8x', icon: Trophy, color: 'memphis-purple' },
    { title: 'Industry Recognition', count: '25x', icon: Star, color: 'memphis-green' },
    { title: 'Student Winners', count: '200+', icon: Medal, color: 'memphis-orange' }
  ];

  return (
    <section id="competitions" className="relative py-20 bg-gradient-to-br from-memphis-orange via-white to-memphis-purple overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-12 w-28 h-28 bg-memphis-coral rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-memphis-green transform rotate-45 opacity-25 animate-bounce-slow"></div>
        <div className="absolute bottom-24 left-1/4 w-36 h-36 bg-memphis-yellow rounded-full opacity-15 animate-pulse-fast"></div>
        
        {/* Trophy patterns */}
        <div className="absolute top-1/4 right-12 w-16 h-16 bg-memphis-cyan opacity-30 transform rotate-12 animate-wiggle"></div>
        <div className="absolute bottom-1/3 left-8 w-24 h-8 bg-memphis-magenta opacity-40"
             style={{clipPath: 'polygon(0 0, 25% 100%, 50% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)'}}>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-memphis-orange text-white font-fredoka font-medium rounded-full transform rotate-2 animate-wiggle">
              🏆 Competitions
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-fredoka font-bold mb-6">
            <span className="text-memphis-coral drop-shadow-lg">Compete</span>
            <br />
            <span className="text-memphis-purple drop-shadow-lg">& Win</span>
            <br />
            <span className="text-memphis-green drop-shadow-lg">Big!</span>
          </h2>
          <p className="text-xl text-gray-700 font-fredoka max-w-3xl mx-auto">
            Show off your skills in our <span className="text-memphis-coral font-bold">exciting competitions</span>! 
            Win amazing prizes, gain recognition, and 
            <span className="text-memphis-purple font-bold"> level up</span> your career! 🚀
          </p>
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-memphis-coral via-memphis-purple to-memphis-green p-8 rounded-3xl shadow-2xl mb-16 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-white">
                <div className={`w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce-slow`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-fredoka font-bold mb-2">{achievement.count}</div>
                <div className="text-lg font-fredoka opacity-90">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform ${
                index % 2 === 0 ? 'rotate-2' : '-rotate-2'
              } hover:rotate-0 hover:scale-105 transition-all duration-500 border-4 border-${competition.color}`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${competition.bgGradient} p-6 text-white relative`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-bounce-slow`}>
                    <competition.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl animate-pulse-fast">{competition.emoji}</div>
                </div>
                <h3 className="text-2xl font-fredoka font-bold mb-2">{competition.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-fredoka">
                    {competition.category}
                  </span>
                  <span className="text-2xl font-fredoka font-bold">{competition.prize}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 font-fredoka mb-6 leading-relaxed">
                  {competition.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`text-2xl font-fredoka font-bold text-${competition.color}`}>
                      {competition.participants}
                    </div>
                    <div className="text-sm font-fredoka text-gray-600">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-fredoka font-bold text-${competition.color}`}>
                      {competition.difficulty}
                    </div>
                    <div className="text-sm font-fredoka text-gray-600">Difficulty</div>
                  </div>
                </div>

                {/* Register Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${competition.bgGradient} text-white font-fredoka font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2`}>
                  <span>Join Competition</span>
                  <Trophy className="w-4 h-4 animate-pulse-fast" />
                </button>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-${competition.color} rounded-full animate-pulse-fast`}></div>
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-${competition.color} transform rotate-45 animate-wiggle`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-memphis-yellow via-memphis-orange to-memphis-coral p-8 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto">
            <div className="text-6xl mb-4 animate-bounce-slow">🏆</div>
            <h3 className="text-4xl font-fredoka font-bold text-white mb-4">
              Ready to Compete?
            </h3>
            <p className="text-xl text-white font-fredoka mb-6 opacity-90">
              Join BNCC today and participate in amazing competitions with incredible prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-memphis-orange font-fredoka font-bold text-lg rounded-full hover:bg-memphis-yellow hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>View All Competitions</span>
                <Star className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-memphis-purple text-white font-fredoka font-bold text-lg rounded-full hover:bg-memphis-magenta transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Register Now</span>
                <Zap className="w-5 h-5 animate-pulse-fast" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
