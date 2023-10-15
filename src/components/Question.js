import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import OptionToAnswer from './OptionToAnswer';

export default function Question({}) {
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

  const { question, options, correctOption } = questions;

  return (
    <div>
      <h4>{question}</h4>
      <div className='options'>
        {options.map((option, index) => (
          <OptionToAnswer
            index={index}
            option={option}
            correctOption={correctOption}
            key={option}
          />
        ))}
      </div>
    </div>
  );
}
