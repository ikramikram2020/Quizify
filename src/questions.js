export const programmingQuestions = {
    JavaScript: [
      {
        question: "What does 'DOM' stand for in JavaScript?",
        correct_answer: "Document Object Model",
        incorrect_answers: [
          "Data Object Model",
          "Document Orientation Model",
          "Dynamic Object Management",
        ],
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        correct_answer: "let",
        incorrect_answers: ["var", "const", "def"],
      },
      {
        question: "What is the output of `typeof null` in JavaScript?",
        correct_answer: "object",
        incorrect_answers: ["null", "undefined", "string"],
      },
      {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        correct_answer: "push()",
        incorrect_answers: ["pop()", "shift()", "unshift()"],
      },
      {
        question: "What is the purpose of `use strict` in JavaScript?",
        correct_answer: "Enforces stricter parsing and error handling",
        incorrect_answers: [
          "Allows global variables",
          "Disables all errors",
          "Enables asynchronous code",
        ],
      },
    ],
    Python: [
      {
        question: "What is the correct way to create a virtual environment in Python?",
        correct_answer: "python -m venv myenv",
        incorrect_answers: [
          "python create venv myenv",
          "python virtualenv myenv",
          "python -m virtualenv myenv",
        ],
      },
      {
        question: "Which of the following is NOT a Python data type?",
        correct_answer: "double",
        incorrect_answers: ["int", "str", "list"],
      },
      {
        question: "What does the `__init__` method do in Python?",
        correct_answer: "Initializes an object's attributes",
        incorrect_answers: [
          "Terminates an object",
          "Imports a module",
          "Defines a class",
        ],
      },
      {
        question: "Which library is used for data manipulation in Python?",
        correct_answer: "pandas",
        incorrect_answers: ["numpy", "matplotlib", "scipy"],
      },
      {
        question: "What is the output of `2 ** 3` in Python?",
        correct_answer: "8",
        incorrect_answers: ["6", "9", "23"],
      },
    ],
    Java: [
      {
        question: "Which keyword is used to define a class in Java?",
        correct_answer: "class",
        incorrect_answers: ["interface", "extends", "implements"],
      },
      {
        question: "What is the default value of an uninitialized integer in Java?",
        correct_answer: "0",
        incorrect_answers: ["null", "1", "undefined"],
      },
      {
        question: "Which method is the entry point of a Java program?",
        correct_answer: "main()",
        incorrect_answers: ["start()", "run()", "init()"],
      },
      {
        question: "What is the purpose of the `final` keyword in Java?",
        correct_answer: "Prevents modification of a variable, method, or class",
        incorrect_answers: [
          "Indicates a static method",
          "Defines a constant",
          "Terminates a program",
        ],
      },
      {
        question: "Which collection class allows duplicate elements in Java?",
        correct_answer: "ArrayList",
        incorrect_answers: ["HashSet", "TreeSet", "HashMap"],
      },
    ],
    "C++": [
      {
        question: "What is the correct syntax to declare a pointer in C++?",
        correct_answer: "int* ptr;",
        incorrect_answers: ["int ptr*;", "pointer int ptr;", "int ptr;"],
      },
      {
        question: "Which operator is used for dynamic memory allocation in C++?",
        correct_answer: "new",
        incorrect_answers: ["malloc", "alloc", "create"],
      },
      {
        question: "What is the purpose of the `virtual` keyword in C++?",
        correct_answer: "Enables polymorphism",
        incorrect_answers: [
          "Defines a constant",
          "Creates a static method",
          "Terminates a program",
        ],
      },
      {
        question: "Which header file is used for input/output in C++?",
        correct_answer: "<iostream>",
        incorrect_answers: ["<stdio.h>", "<input.h>", "<output.h>"],
      },
      {
        question: "What is the output of `sizeof(int)` in C++?",
        correct_answer: "4",
        incorrect_answers: ["2", "8", "16"],
      },
    ],
  };