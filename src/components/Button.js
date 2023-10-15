import { useQuiz } from '../context/QuizContext';

function Button() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
}

export default Button;

// import React, { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function Button() {
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

//   if (answer === null) {
//     return null;
//   }

//   if (curIndex < questions.length - 1) {
//     return (
//       <button
//         className='btn btn-ui'
//         onClick={() => dispatch({ type: 'nextQuestion' })}
//       >
//         next
//       </button>
//     );
//   }

//   if (curIndex === questions.length - 1) {
//     return (
//       <button
//         className='btn btn-ui'
//         onClick={() => dispatch({ type: 'endQuiz' })}
//       >
//         finish
//       </button>
//     );
//   }
// }
