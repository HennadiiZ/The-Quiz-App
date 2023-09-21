import OptionToAnswer from './OptionToAnswer';

export default function Question({
  amountOfQuestions,
  questionData,
  dispatch,
  answer,
  earnedPoints,
}) {
  const { question, options, correctOption, points } = questionData;

  //   if (answer === correctOption) {
  //     // console.log('answer:', answer, '-', 'correctOption:', correctOption);
  //     // console.log(' points:', points);
  //     dispatch({ type: 'newAnswer', payload: points });
  //   }
  //   else {
  //     console.log('answer:', answer, '-', 'correctOption:', correctOption);
  //   }

  return (
    <div>
      <p>Question 1/{amountOfQuestions}</p>
      <h4>
        {question}
        {/* {showResult && (showResult === 'Correct' ? 'Correct' : 'Wrong')} */}
      </h4>
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
