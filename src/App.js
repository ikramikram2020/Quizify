import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import CategorySelection from './components/CategorySelection';
import Quiz from "./components/Quiz";
import Results from './components/Results';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategorySelection />} />
        <Route path="/quiz/:categoryId" element={<Quiz />} />
        <Route path="/results/:score" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;