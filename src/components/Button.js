import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function Button() {
  const {
    questions,
    status,
    curIndex,
    answer,
    points,
    highscore,
    secondsRemaining,
    //
    startQuiz,
    newAnswer,
    nextQuestion,
    endQuiz,
    restart,
    ticktack,
  } = useContext(QuizContext);

  if (answer === null) {
    return null;
  }

  if (curIndex < questions.length - 1) {
    return (
      <button className='btn btn-ui' onClick={() => nextQuestion()}>
        next
      </button>
    );
  }

  if (curIndex === questions.length - 1) {
    return (
      <button className='btn btn-ui' onClick={() => endQuiz()}>
        finish
      </button>
    );
  }
}
