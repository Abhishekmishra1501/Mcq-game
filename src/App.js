import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './App.css';


// Example questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is the cspital of India",
    options:["Mumbai", "Lucknow","New delhi", "Chandigarh"],
    answer:"New delhi"
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (questions[currentQuestionIndex].answer === selectedOption) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return <Result score={score} total={questions.length} />;
  }

  return (
    <div className="App">
      <Question 
        question={questions[currentQuestionIndex].question} 
        options={questions[currentQuestionIndex].options} 
        onAnswer={handleAnswer} 
      />
    </div>
  );
}

export default App;
