import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { programmingQuestions } from "../questions";

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Map categoryId to the correct language
    const languageMap = {
      1: "JavaScript",
      2: "Python",
      3: "Java",
      4: "C++",
    };

    const language = languageMap[categoryId];
    if (language && programmingQuestions[language]) {
      setQuestions(programmingQuestions[language]);
    } else {
      setQuestions([]); // Fallback if no questions are found
    }
    setLoading(false);
  }, [categoryId]);

  const handleAnswerClick = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/results/${score}`);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (questions.length === 0) {
    return <div className="error">No questions found for this category.</div>;
  }

  return (
    <div className="quiz">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <div className="answers">
        {[
          ...questions[currentQuestion].incorrect_answers,
          questions[currentQuestion].correct_answer,
        ]
          .sort(() => Math.random() - 0.5)
          .map((answer, index) => (
            <button key={index} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Quiz;