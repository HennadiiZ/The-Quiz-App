import { useState } from 'react';
import OptionToAnswer from './OptionToAnswer';

export default function Question({ amountOfQuestions, questionData }) {
  const [showResult, setShowResult] = useState('');
  const { question, options, correctOption, points } = questionData;
  console.log(questionData); // {question, options, correctOption, points}
  console.log(question); // Which is the most popular JavaScript framework?
  console.log(options); // ['Angular', 'React', 'Svelte', 'Vue']
  console.log(correctOption); // 1
  console.log(points); // 10

  function chooseOptionHandler(index) {
    if (index === correctOption) {
      console.log(true);
      setShowResult('Correct');
    } else {
      setShowResult('Wrong');
      console.log(false);
    }
    console.log(index);
  }

  return (
    <div>
      <p>Question 1/{amountOfQuestions}</p>
      <p>
        {question}
        {showResult && (showResult === 'Correct' ? 'Correct' : 'Wrong')}
      </p>
      {options.map((option, index) => (
        <OptionToAnswer
          showResult={showResult}
          option={option}
          index={index}
          onChooseOption={chooseOptionHandler}
          key={index}
        />
      ))}
    </div>
  );
}
