
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 mx-auto animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-github-highlight/20 to-github-accent/20 rounded-full blur-xl"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-full bg-github-darker border-4 border-github-highlight/50 flex items-center justify-center shadow-xl">
          <div className="text-center">
            <div className="font-bold text-xl sm:text-2xl md:text-3xl text-white">
              <span className="text-github-highlight animate-text-glow">Input</span>
              <span>TextX</span>
            </div>
            <div className="text-xs sm:text-sm text-github-muted mt-1">for Rainmeter</div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 border-4 border-github-highlight/30 rounded-full"></div>
    </div>
  );
};

export default AnimatedLogo;
