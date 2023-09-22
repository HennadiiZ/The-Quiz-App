import OptionToAnswer from './OptionToAnswer';

export default function Question({
  amountOfQuestions,
  questionData, // state.questions
  dispatch,
  answer,
  curIndex,
}) {
  const { question, options, correctOption, points } = questionData;

  //   console.log(curIndex);
  //   if (curIndex === amountOfQuestions) {
  //     return;
  //   }

  return (
    <div>
      <p>
        Question {curIndex}/{amountOfQuestions}
      </p>
      <h4>{question}</h4>
      <div className='options'>
        {options.map((option, index) => (
          <OptionToAnswer
            dispatch={dispatch}
            answer={answer}
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
