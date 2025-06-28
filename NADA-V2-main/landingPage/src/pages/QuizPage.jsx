// src/pages/QuizPage.jsx
import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function QuizPage() {
  const questions = [
    {
      question: 'What is the main purpose of anti-doping rules?',
      options: ['To penalize athletes', 'To ensure fair competition', 'To promote sports'],
      correct: 1
    },
    {
      question: 'Which of the following is considered a doping violation?',
      options: ['Refusing a drug test', 'Wearing non-regulation attire', 'Starting late in a race'],
      correct: 0
    },
    {
      question: 'What is WADA?',
      options: ['World Athletics Drug Agency', 'World Anti-Doping Agency', 'World Association of Doping'],
      correct: 1
    },
    {
      question: 'Which of these substances is prohibited in sports?',
      options: ['Caffeine', 'Testosterone', 'Vitamin C'],
      correct: 1
    },
    {
      question: 'Why is blood doping illegal?',
      options: [
        'It increases oxygen levels in the blood, providing an unfair advantage.',
        'It decreases fatigue.',
        'It reduces injuries during competition.'
      ],
      correct: 0
    },
    {
      question: 'What is the punishment for athletes caught doping?',
      options: ['A warning', 'A lifetime ban from sports', 'Suspensions and sanctions depending on the violation'],
      correct: 2
    },
    {
      question: 'What is the primary role of the National Anti-Doping Agency (NADA)?',
      options: ['To support athletes', 'To enforce anti-doping rules', 'To fund sporting events'],
      correct: 1
    },
    {
      question: 'Which of these is a method of testing for doping?',
      options: ['Blood and urine tests', 'DNA tests', 'Performance analysis'],
      correct: 0
    },
    {
      question: 'Which of the following is considered a prohibited method?',
      options: ['Taking supplements', 'Genetic manipulation', 'Eating high-protein diets'],
      correct: 1
    },
    {
      question: 'Which of these can help athletes avoid unintentional doping?',
      options: [
        'Not consulting with doctors',
        'Carefully checking the list of banned substances',
        'Taking more supplements'
      ],
      correct: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedOption(index);
    const correctAnswer = questions[currentQuestion].correct;

    if (index === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setIsCorrect(null);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1000); // Delay to show feedback before moving to the next question
  };

  const handleRetry = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="p-4 sm:p-8">
      {showScore ? (
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Quiz Complete!</h1>
          <p className="text-lg sm:text-xl mb-4">
            You scored {score} out of {questions.length}.
          </p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg hover:bg-blue-700 mr-4"
          >
            Retry
          </button>
          <button className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-lg hover:bg-gray-700">
            <a href="/">Back to Home</a>
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full bg-gray-300 h-2 sm:h-4 rounded-full mb-4 sm:mb-6">
            <div
              className="bg-blue-600 h-2 sm:h-4 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question */}
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg sm:text-xl font-medium mb-6 sm:mb-8">{questions[currentQuestion].question}</p>

          {/* Options */}
          <div className="grid grid-cols-1 gap-2 sm:gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedOption !== null}
                className={`py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-left text-lg font-medium transition-all duration-200 ${
                  selectedOption === index
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {selectedOption === index && (
                  <span className="inline-block mr-2">
                    {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />}
                  </span>
                )}
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizPage;
