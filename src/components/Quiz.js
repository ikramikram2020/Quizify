import React, { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { programmingQuestions } from "../questions";
import correctSound from "../sounds/correct.mp3";
import wrongSound from "../sounds/wrong.mp3";

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [loading, setLoading] = useState(true);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const timerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const languageMap = {
      18: "JavaScript",
      19: "Python",
      20: "Java",
      21: "C++",
    };

    const language = languageMap[categoryId];
    if (language && programmingQuestions[language]) {
      setQuestions(programmingQuestions[language].slice(0, 5));
    } else {
      setQuestions([]);
    }
    setLoading(false);
  }, [categoryId]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestion < questions.length) {
      const answers = [
        ...questions[currentQuestion].incorrect_answers,
        questions[currentQuestion].correct_answer,
      ];
      const shuffled = answers.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffled);
    }
  }, [currentQuestion, questions]);

  const playSound = useCallback((soundFile) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const audio = new Audio(soundFile);
    audioRef.current = audio;
    audio.play();
  }, []);

  const handleAnswerClick = useCallback(
    (answer) => {
      setIsAnswerSelected(true);

      if (answer === questions[currentQuestion]?.correct_answer) {
        setScore(score + 1);
        playSound(correctSound);
      } else {
        playSound(wrongSound);
      }

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }

        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setTimeLeft(10);
          setIsAnswerSelected(false);
        } else {
          navigate(`/results/${score + (answer === questions[currentQuestion]?.correct_answer ? 1 : 0)}`);
        }
      }, 2000);
    },
    [currentQuestion, questions, score, playSound, navigate]
  );

  useEffect(() => {
    if (questions.length > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 0) {
            clearInterval(timerRef.current);
            handleAnswerClick(null);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentQuestion, questions, handleAnswerClick]);

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
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        ></div>
      </div>
      <p>Time left: {timeLeft} seconds</p>
      <div className="answers">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={index}
            onClick={() => !isAnswerSelected && handleAnswerClick(answer)}
            disabled={isAnswerSelected}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;