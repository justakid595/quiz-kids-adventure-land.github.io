
import React from 'react';
import { Question } from '../data/quizQuestions';
import { Button } from '@/components/ui/button';

interface QuizScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
  showFeedback: boolean;
  isCorrect: boolean;
  selectedAnswer?: number;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  showFeedback,
  isCorrect,
  selectedAnswer
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Math': return 'from-kid-green to-kid-blue';
      case 'Science': return 'from-kid-blue to-kid-purple';
      case 'English': return 'from-kid-yellow to-kid-orange';
      case 'Fun Facts': return 'from-kid-pink to-kid-purple';
      default: return 'from-kid-blue to-kid-purple';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Math': return '🔢';
      case 'Science': return '🔬';
      case 'English': return '📚';
      case 'Fun Facts': return '🎉';
      default: return '📝';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 max-w-4xl w-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold text-gray-600">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-2xl">{getCategoryIcon(question.category)}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`bg-gradient-to-r ${getCategoryColor(question.category)} h-3 rounded-full transition-all duration-500 ease-out`}
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="text-center mb-6">
          <span className={`inline-block bg-gradient-to-r ${getCategoryColor(question.category)} text-white font-bold px-6 py-2 rounded-full text-lg`}>
            {question.category} {question.emoji}
          </span>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {question.options.map((option, index) => {
            let buttonClass = "bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-gray-300";
            
            if (showFeedback && selectedAnswer === index) {
              if (isCorrect) {
                buttonClass = "bg-green-100 text-green-800 border-green-300 animate-celebration";
              } else {
                buttonClass = "bg-red-100 text-red-800 border-red-300 animate-wiggle";
              }
            } else if (showFeedback && index === question.correctAnswer) {
              buttonClass = "bg-green-100 text-green-800 border-green-300";
            }

            return (
              <Button
                key={index}
                onClick={() => !showFeedback && onAnswer(index)}
                disabled={showFeedback}
                className={`${buttonClass} font-semibold text-lg py-6 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg`}
              >
                <span className="mr-2 text-xl">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className="text-center animate-bounce-in">
            <div className="text-6xl mb-4">
              {isCorrect ? '🎉' : '💪'}
            </div>
            <div className={`text-2xl font-bold mb-4 ${isCorrect ? 'text-green-600' : 'text-blue-600'}`}>
              {isCorrect ? 'Awesome! You got it right!' : 'Good try! Keep learning!'}
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 text-lg text-gray-700">
              <strong>Did you know?</strong> {question.explanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
