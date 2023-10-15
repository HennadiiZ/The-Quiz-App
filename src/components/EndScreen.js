import { useQuiz } from '../context/QuizContext';

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;

//=========
// import React, { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function EndScreen() {
//   const {
//     questions,
//     status,
//     curIndex,
//     answer,
//     points,
//     highscore,
//     secondsRemaining,
//     maxPossiblePoints,
//     dispatch,
//     //
//     startQuiz,
//     newAnswer,
//     nextQuestion,
//     endQuiz,
//     restart,
//     ticktack,
//   } = useContext(QuizContext);

//   const percentage = (points / maxPossiblePoints) * 100;
//   return (
//     <>
//       <div className='result'>
//         You scored <strong>{points}</strong> ouf of {maxPossiblePoints}(
//         {Math.ceil(percentage)}%)
//       </div>
//       <div className='highscore'>(Highscore: {highscore} points)</div>

//       <div className='start'>
//         <button
//           className='btn btn-ui'
//           onClick={() => dispatch({ type: 'restart' })}
//         >
//           Restart
//         </button>
//       </div>
//     </>
//   );
// }
