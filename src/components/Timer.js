import React, { useState, useEffect } from 'react';

export default function Timer({ dispatch }) {
  const [time, setTime] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    if (time === 0) {
      clearInterval(intervalId);
      dispatch({ type: 'endQuiz' });
    }

    return () => clearInterval(intervalId);
  }, [dispatch, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className='timer'>
      Timer: {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
