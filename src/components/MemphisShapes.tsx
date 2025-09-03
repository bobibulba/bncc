import React from 'react';

export const MemphisShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-memphis-coral rounded-full animate-float opacity-80"></div>
      <div className="absolute top-32 right-20 w-12 h-12 bg-memphis-yellow transform rotate-45 animate-bounce-slow opacity-70"></div>
      <div className="absolute top-64 left-1/4 w-20 h-20 bg-memphis-green rounded-full animate-pulse-fast opacity-60"></div>
      <div className="absolute bottom-32 right-10 w-14 h-14 bg-memphis-purple transform rotate-12 animate-wiggle opacity-75"></div>
      <div className="absolute bottom-64 left-16 w-18 h-18 bg-memphis-cyan rounded-full animate-float opacity-65"></div>
      
      {/* Zigzag patterns */}
      <div className="absolute top-20 right-1/3 w-32 h-4 bg-memphis-orange opacity-50" 
           style={{clipPath: 'polygon(0 0, 25% 100%, 50% 0, 75% 100%, 100% 0, 100% 100%, 0 100%)'}}>
      </div>
      <div className="absolute bottom-40 left-1/3 w-40 h-6 bg-memphis-magenta opacity-40"
           style={{clipPath: 'polygon(0 0, 20% 100%, 40% 0, 60% 100%, 80% 0, 100% 100%, 0 100%)'}}>
      </div>
      
      {/* Triangle shapes */}
      <div className="absolute top-1/2 left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-memphis-pink animate-bounce-slow opacity-70"></div>
      <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-memphis-green animate-wiggle opacity-60"></div>
      
      {/* Grid patterns */}
      <div className="absolute top-1/4 left-1/2 w-24 h-24 opacity-30">
        <div className="grid grid-cols-4 gap-1 h-full">
          {Array.from({length: 16}).map((_, i) => (
            <div key={i} className={`${i % 2 === 0 ? 'bg-memphis-coral' : 'bg-memphis-purple'} rounded-sm`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
