import React from 'react';

export default function Button({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      next
    </button>
  );
}
