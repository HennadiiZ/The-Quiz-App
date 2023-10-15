import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className='timer'>
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;

// import React, { useContext, useEffect } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function Timer() {
//   const {
//     questions,
//     status,
//     curIndex,
//     answer,
//     points,
//     highscore,
//     secondsRemaining,
//     dispatch,
//     //
//     startQuiz,
//     newAnswer,
//     nextQuestion,
//     endQuiz,
//     restart,
//     ticktack,
//   } = useContext(QuizContext);

//   const mins = Math.floor(secondsRemaining / 60);
//   const seconds = secondsRemaining % 60;

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       dispatch({ type: 'ticktack' });
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [dispatch, secondsRemaining]);

//   return (
//     <div className='timer'>
//       {mins < 10 && '0'}
//       {mins}:{seconds < 10 && '0'}
//       {seconds}
//     </div>
//   );
// }
