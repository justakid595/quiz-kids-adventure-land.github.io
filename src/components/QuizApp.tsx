
import React, { useState, useEffect } from 'react';
import { quizQuestions, Question } from '../data/quizQuestions';
import StartScreen from './StartScreen';
import QuizScreen from './QuizScreen';
import ResultScreen from './ResultScreen';

export type GameState = 'start' | 'quiz' | 'result';

export interface QuizStats {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
}

const QuizApp = () => {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [stats, setStats] = useState<QuizStats>({ totalQuestions: 0, correctAnswers: 0, score: 0 });

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startQuiz = () => {
    const shuffledQuestions = shuffleArray(quizQuestions);
    setSelectedQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setGameState('quiz');
    setShowFeedback(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newUserAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newUserAnswers);
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex + 1 < selectedQuestions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowFeedback(false);
      } else {
        // Quiz finished - calculate results
        const correctAnswers = newUserAnswers.reduce((count, answer, index) => {
          return answer === selectedQuestions[index].correctAnswer ? count + 1 : count;
        }, 0);
        
        const totalQuestions = selectedQuestions.length;
        const score = Math.round((correctAnswers / totalQuestions) * 100);
        
        setStats({ totalQuestions, correctAnswers, score });
        setGameState('result');
        setShowFeedback(false);
      }
    }, 2500);
  };

  const resetQuiz = () => {
    setGameState('start');
    setCurrentQuestionIndex(0);
    setSelectedQuestions([]);
    setUserAnswers([]);
    setShowFeedback(false);
    setStats({ totalQuestions: 0, correctAnswers: 0, score: 0 });
  };

  const currentQuestion = selectedQuestions[currentQuestionIndex];
  const isCorrect = showFeedback && userAnswers[currentQuestionIndex] === currentQuestion?.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-kid-blue via-kid-purple to-kid-pink font-fredoka">
      {gameState === 'start' && <StartScreen onStart={startQuiz} />}
      
      {gameState === 'quiz' && currentQuestion && (
        <QuizScreen
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={selectedQuestions.length}
          onAnswer={handleAnswer}
          showFeedback={showFeedback}
          isCorrect={isCorrect}
          selectedAnswer={userAnswers[currentQuestionIndex]}
        />
      )}
      
      {gameState === 'result' && (
        <ResultScreen
          stats={stats}
          onPlayAgain={resetQuiz}
        />
      )}
    </div>
  );
};

export default QuizApp;
