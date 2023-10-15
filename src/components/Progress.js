import { useQuiz } from '../context/QuizContext';

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;

// import React, { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function Progress() {
//   const { questions, curIndex, answer, points, maxPossiblePoints } =
//     useContext(QuizContext);

//   return (
//     <div>
//       <progress
//         max={questions.length}
//         value={curIndex + Number(answer !== null)}
//       />
//       <p>
//         Question <strong>{curIndex + 1}</strong>/{questions.length}
//       </p>
//       <header className='progress'>
//         <p>
//           <strong>{points}</strong> / {maxPossiblePoints}
//         </p>
//       </header>
//     </div>
//   );
// }
