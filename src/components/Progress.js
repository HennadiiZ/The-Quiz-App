import React from 'react';
import { useState, useEffect } from 'react';

export default function Progress({ curIndex, dispatch }) {
  const [progress, setProgress] = useState(0);
  const progressWidth = 99;

  useEffect(() => {
    if (progress >= progressWidth) {
      dispatch({ type: 'endQuiz' });
      return;
    }

    const calculatedProgress = (curIndex / 15) * progressWidth;
    setProgress(calculatedProgress);
  }, [curIndex, progressWidth]);

  return (
    <div>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}
