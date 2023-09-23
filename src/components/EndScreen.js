import React from 'react';

export default function EndScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className='result'>
        You scored <strong>{points}</strong> ouf of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </div>
      <div className='highscore'>(Highscore: {highscore} points)</div>
      {/*  */}
      <div className='start'>
        <button
          className='btn btn-ui'
          onClick={() => dispatch({ type: 'restart' })}
        >
          Restart
        </button>
      </div>
    </>
  );
}
