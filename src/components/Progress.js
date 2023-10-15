import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function Progress({ maxPossiblePoints }) {
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

  return (
    <div>
      <progress
        max={questions.length}
        value={curIndex + Number(answer !== null)}
      />
      <p>
        Question <strong>{curIndex + 1}</strong>/{questions.length}
      </p>
      <header className='progress'>
        <p>
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

// import React from 'react';
// import { useState, useEffect } from 'react';

// export default function Progress({ curIndex, amountOfQuestions, dispatch }) {
//   const [progress, setProgress] = useState(0);
//   const progressWidth = 99;

//   useEffect(() => {
//     if (progress >= progressWidth) {
//       dispatch({ type: 'endQuiz' });
//       return;
//     }

//     const calculatedProgress = (curIndex / 15) * progressWidth;
//     setProgress(calculatedProgress);
//   }, [curIndex, progressWidth]);

//   return (
//     <div>
//       <p>
//         Question <strong>{curIndex + 1}</strong>/{amountOfQuestions}
//       </p>
//       <div className='progress-bar'>
//         <div className='progress' style={{ width: `${progress}%` }}></div>
//       </div>
//     </div>
//   );
// }
