import OptionToAnswer from './OptionToAnswer';

export default function Question({
  amountOfQuestions,
  questionData, // state.questions
  dispatch,
  answer,
  curIndex,
}) {
  const { question, options, correctOption, points } = questionData;

  //   //   console.log(curIndex);
  //   if (options[curIndex] === correctOption) {
  //     console.log('++');
  //   }

  return (
    <div>
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
