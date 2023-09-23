import React from 'react';

export default function EndScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className='result'>
        You scored <strong>{points}</strong> ouf of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </div>
      <div className='highscore'>{highscore}</div>
    </>
  );
}
