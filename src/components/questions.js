import React, { useState } from 'react';

const Questions = () => {

  const questions = [
    {
      id: 123,
      prompt: "What two things can you never eat for breakfast?",
      answer: "Lunch and dinner"
    },
    {
      id: 124,
      prompt: "What word is spelled incorrectly in every single dictionary?",
      answer: "Incorrectly"
    },
    {
      id: 125,
      prompt:
        "What do you answer every day, even though it never asks you a question?",
      answer: "Your phone"
    },
    {
      id: 126,
      prompt:
        "What starts with “e” and ends with “e” but only has one letter in it?",
      answer: "An envelope."
    },
    {
      id: 127,
      prompt: "What has a face and two hands, but no arms or legs?",
      answer: "A clock"
    }
  ];

  const [questionIndex, setQuestionIndex] = useState(0);


  const goBack = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1)
  }

  const goToNext = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1)
  }


  const onFirstQuestion = questionIndex === 0

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
        <div>{questions[questionIndex].prompt}</div>
      </div>
    </nav>
  );
}

export default Questions
