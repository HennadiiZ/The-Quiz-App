import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function OptionToAnswer({ option, index, correctOption }) {
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

  const hasAnswered = answer !== null;
  return (
    <button
      className={`btn btn-option 
        ${index === answer ? 'answer' : ''} 
        ${hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''}`}
      onClick={() => newAnswer(index)}
      disabled={hasAnswered}
    >
      {option}
    </button>
  );
}
