import { useQuiz } from '../context/QuizContext';

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

// import { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';

// export default function OptionToAnswer({ option, index, correctOption }) {
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

//   const hasAnswered = answer !== null;
//   return (
//     <button
//       className={`btn btn-option
//         ${index === answer ? 'answer' : ''}
//         ${hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''}`}
//       onClick={() => dispatch({ type: 'newAnswer', payload: index })}
//       disabled={hasAnswered}
//     >
//       {option}
//     </button>
//   );
// }
