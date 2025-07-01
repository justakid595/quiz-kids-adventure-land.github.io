
import React from 'react';
import { Button } from '@/components/ui/button';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-2xl w-full animate-bounce-in">
        <div className="text-8xl mb-6 animate-wiggle">🌟</div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          Fun Quiz
          <br />
          <span className="text-kid-blue">Adventure!</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Test your knowledge with awesome questions about{' '}
          <span className="font-semibold text-kid-green">Math</span>,{' '}
          <span className="font-semibold text-kid-pink">Science</span>,{' '}
          <span className="font-semibold text-kid-yellow">English</span>, and{' '}
          <span className="font-semibold text-kid-purple">Fun Facts</span>!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-kid-green/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">🔢</div>
            <div className="font-semibold text-gray-700">Math</div>
          </div>
          <div className="bg-kid-blue/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">🔬</div>
            <div className="font-semibold text-gray-700">Science</div>
          </div>
          <div className="bg-kid-yellow/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">📚</div>
            <div className="font-semibold text-gray-700">English</div>
          </div>
          <div className="bg-kid-pink/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-semibold text-gray-700">Fun Facts</div>
          </div>
        </div>
        
        <Button
          onClick={onStart}
          className="bg-gradient-to-r from-kid-orange to-kid-yellow hover:from-kid-yellow hover:to-kid-orange text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 animate-pulse"
        >
          🚀 Start Quiz! 🚀
        </Button>
        
        <p className="text-sm text-gray-500 mt-6">
          💡 You'll answer 20 questions from different subjects!
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
