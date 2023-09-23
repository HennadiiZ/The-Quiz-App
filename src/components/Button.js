import React from 'react';

export default function Button({ dispatch, answer, index, amountOfQuestions }) {
  if (answer === null) {
    return null;
  }

  if (index < amountOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        next
      </button>
    );
  }

  if (index === amountOfQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'endQuiz' })}
      >
        finish
      </button>
    );
  }
}
