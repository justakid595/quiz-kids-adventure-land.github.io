
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuizStats } from './QuizApp';

interface ResultScreenProps {
  stats: QuizStats;
  onPlayAgain: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ stats, onPlayAgain }) => {
  const getPerformanceMessage = (score: number) => {
    if (score >= 90) return {
      title: "🌟 AMAZING! 🌟",
      message: "You're a quiz superstar! Incredible job!",
      emoji: "🏆",
      color: "text-yellow-600"
    };
    if (score >= 80) return {
      title: "🎉 EXCELLENT! 🎉",
      message: "Fantastic work! You really know your stuff!",
      emoji: "🥇",
      color: "text-green-600"
    };
    if (score >= 70) return {
      title: "👏 GREAT JOB! 👏",
      message: "Well done! You're doing awesome!",
      emoji: "🎯",
      color: "text-blue-600"
    };
    if (score >= 60) return {
      title: "👍 GOOD WORK! 👍",
      message: "Nice effort! Keep practicing!",
      emoji: "⭐",
      color: "text-purple-600"
    };
    return {
      title: "💪 KEEP TRYING! 💪",
      message: "Great attempt! Practice makes perfect!",
      emoji: "🌱",
      color: "text-pink-600"
    };
  };

  const performance = getPerformanceMessage(stats.score);

  const getStarRating = (score: number) => {
    if (score >= 90) return "⭐⭐⭐⭐⭐";
    if (score >= 80) return "⭐⭐⭐⭐";
    if (score >= 70) return "⭐⭐⭐";
    if (score >= 60) return "⭐⭐";
    return "⭐";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-2xl w-full text-center animate-bounce-in">
        {/* Trophy Animation */}
        <div className="text-8xl mb-6 animate-celebration">
          {performance.emoji}
        </div>

        {/* Title */}
        <h1 className={`text-4xl md:text-5xl font-bold ${performance.color} mb-4`}>
          {performance.title}
        </h1>

        {/* Star Rating */}
        <div className="text-4xl mb-6">
          {getStarRating(stats.score)}
        </div>

        {/* Performance Message */}
        <p className="text-2xl text-gray-700 mb-8 font-medium">
          {performance.message}
        </p>

        {/* Score Card */}
        <div className="bg-gradient-to-r from-kid-blue to-kid-purple rounded-2xl p-6 mb-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{stats.score}%</div>
              <div className="text-sm opacity-90">Your Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.correctAnswers}</div>
              <div className="text-sm opacity-90">Correct Answers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.totalQuestions}</div>
              <div className="text-sm opacity-90">Total Questions</div>
            </div>
          </div>
        </div>

        {/* Encouraging Messages */}
        <div className="bg-kid-yellow/20 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🎓 Learning is Fun!</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <span className="mr-2">🧠</span>
              <span>You're getting smarter!</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚀</span>
              <span>Keep exploring!</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">💡</span>
              <span>Every question teaches you!</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">⭐</span>
              <span>You're awesome!</span>
            </div>
          </div>
        </div>

        {/* Play Again Button */}
        <Button
          onClick={onPlayAgain}
          className="bg-gradient-to-r from-kid-green to-kid-blue hover:from-kid-blue hover:to-kid-green text-white font-bold text-2xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          🎮 Play Again! 🎮
        </Button>

        <p className="text-sm text-gray-500 mt-6">
          💫 Challenge yourself with new questions!
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;
