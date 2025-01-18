import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 18, name: "JavaScript" },
  { id: 19, name: "Python" },
  { id: 20, name: "Java" },
  { id: 21, name: "C++" },
];

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="category-selection">
      <h1>Quizzy</h1>
      <h2>Choose a Programming Language</h2>
      <div className="categories">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategorySelect(category.id)}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;