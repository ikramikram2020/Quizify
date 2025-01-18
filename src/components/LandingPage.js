import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import rbImage from "./rb_2148277397.png";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="app-name">Quizify</div>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/categories")}>Categories</li>
        </ul>
      </nav>

      <div className="text-container">
        <h1 className="title">
          Welcome to <span>Quizify</span>!
        </h1>
        <p className="subtitle">
          Test your knowledge with fun and engaging programming language quizzes.
        </p>
        <button className="start-btn" onClick={() => navigate("/categories")}>
          Get Started
        </button>
      </div>

      <div className="image-container">
        <img
          src={rbImage}
          alt="Quizify Illustration"
          className="landing-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;