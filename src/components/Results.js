import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Results = () => {
  const { score } = useParams();
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <div className="results">
      <h1>Quiz Results</h1>
      <p>Your score: {score} out of 5</p>
      <button onClick={handleRetry}>Retry Quiz</button>
    </div>
  );
};

export default Results;