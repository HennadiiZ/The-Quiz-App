import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function StartScreen({ amountOfQuestions }) {
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
    <div className='start'>
      <h2>Welcome to this quiz!</h2>
      <h4>There are {amountOfQuestions} questions for you.</h4>
      <button className='btn btn-ui' onClick={() => startQuiz()}>
        Let's start
      </button>
    </div>
  );
}
//+
