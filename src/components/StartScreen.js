import { useQuiz } from '../context/QuizContext';

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className='start'>
      <h2>Welcome to The Quiz App!</h2>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;

// import { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function StartScreen() {
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

//   return (
//     <div className='start'>
//       <h2>Welcome to this quiz!</h2>
//       <h4>There are {questions.length} questions for you.</h4>
//       <button
//         className='btn btn-ui'
//         onClick={() => dispatch({ type: 'startQuiz' })}
//       >
//         Let's start
//       </button>
//     </div>
//   );
// }
