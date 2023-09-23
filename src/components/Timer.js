import React, { useEffect } from 'react';

export default function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: 'ticktack' });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch, secondsRemaining]);

  //   return <div className='timer'>{secondsRemaining}</div>;
  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

// import React, { useState, useEffect } from 'react';

// export default function Timer({ dispatch }) {
//   const [time, setTime] = useState(300); // 5 minutes in seconds

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     if (time === 0) {
//       clearInterval(intervalId);
//       dispatch({ type: 'endQuiz' });
//     }

//     return () => clearInterval(intervalId);
//   }, [dispatch, time]);

//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;

//   return (
//     <div className='timer'>
//       Timer: {minutes < 10 ? `0${minutes}` : minutes}:
//       {seconds < 10 ? `0${seconds}` : seconds}
//     </div>
//   );
// }
