import { useQuiz } from '../context/QuizContext';
import Options from './Options';

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;

// import { useContext } from 'react';
// import { QuizContext } from '../context/QuizContext';
// import OptionToAnswer from './OptionToAnswer';

// export default function Question({}) {
//   const {
//     questions,
//     status,
//     curIndex,
//     answer,
//     points,
//     highscore,
//     secondsRemaining,
//     //
//     startQuiz,
//     newAnswer,
//     nextQuestion,
//     endQuiz,
//     restart,
//     ticktack,
//   } = useContext(QuizContext);

//   const { question, options, correctOption } = questions;

//   return (
//     <div>
//       <h4>{question}</h4>
//       <div className='options'>
//         {options.map((option, index) => (
//           <OptionToAnswer
//             index={index}
//             option={option}
//             correctOption={correctOption}
//             key={option}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
