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
