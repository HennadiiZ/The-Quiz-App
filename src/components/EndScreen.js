import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

export default function EndScreen({ maxPossiblePoints }) {
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

  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <div className='result'>
        You scored <strong>{points}</strong> ouf of {maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </div>
      <div className='highscore'>(Highscore: {highscore} points)</div>

      <div className='start'>
        <button className='btn btn-ui' onClick={() => restart()}>
          Restart
        </button>
      </div>
    </>
  );
}
