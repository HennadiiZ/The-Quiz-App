import OptionToAnswer from './OptionToAnswer';

export default function Question({
  amountOfQuestions,
  questionData, // state.questions
  dispatch,
  answer,
}) {
  const { question, options, correctOption, points } = questionData;

  return (
    <div>
      <p>Question 1/{amountOfQuestions}</p>
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

// //
// import './App.css';
// import { useEffect, useReducer } from 'react';
// // import DateCounter from './components/DateCounter';
// import Header from './components/Header';
// import Main from './components/Main';
// import Loader from './components/Loader';
// import Error from './components/Error';
// import StartScreen from './components/StartScreen';
// import Question from './components/Question';
// import Button from './components/Button';

// const initialState = {
//   questions: [],
//   // isLoading state
//   status: 'loading', //state // states: 'loading', 'error', 'ready', 'active', 'finished' - it has nothing to do with useReducer
//   curIndex: 0,
//   answer: null,
//   points: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'dataReceived':
//       return {
//         ...state,
//         questions: action.payload,
//         status: 'ready',
//       };
//     case 'dataFailed':
//       return {
//         ...state,
//         status: 'error',
//       };
//     case 'startQuiz':
//       return {
//         ...state,
//         status: 'active',
//       };
//     case 'newAnswer':
//       const question = state.questions.at(state.curIndex); // state.questions[state.curIndex]
//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           question.correctOption === action.payload
//             ? state.points + question.points
//             : state.points,
//       };
//     case 'nextQuestion':
//       return {
//         ...state,
//         // curIndex: state.curIndexs++,
//         curIndex: state.curIndexs + 1,
//         answer: null,
//       };
//     default:
//       throw new Error('unknown action');
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     fetch('http://localhost:8000/questions')
//       .then((res) => res.json())
//       .then((res) => dispatch({ type: 'dataReceived', payload: res }))
//       .catch((err) => dispatch({ type: 'dataFailed', payload: err }));
//   }, []);

//   console.log(state.points);

//   return (
//     <div className='App'>
//       <Header />
//       <Main>
//         {state.status === 'loading' && <Loader />}
//         {state.status === 'error' && <Error />}
//         {state.status === 'ready' && (
//           <StartScreen
//             amountOfQuestions={state.questions.length}
//             dispatch={dispatch}
//           />
//         )}
//         {state.status === 'active' && (
//           <>
//             <Question
//               amountOfQuestions={state.questions.length}
//               questionData={state.questions[state.curIndex]}
//               dispatch={dispatch}
//               answer={state.answer}
//               earnedPoints={state.points}
//             />
//             <Button dispatch={dispatch} answer={state.answer} />
//           </>
//         )}
//         {/* {state.status === 'active' && <Button dispatch={dispatch} />} */}
//       </Main>
//     </div>
//   );
// }

// export default App;

// import OptionToAnswer from './OptionToAnswer';

// export default function Question({
//   amountOfQuestions,
//   questionData, // state.questions
//   dispatch,
//   answer,
//   earnedPoints,
// }) {
//   const { question, options, correctOption, points } = questionData;
//   // questionData={state.questions[state.curIndex]}
//   //   questionData;

//   return (
//     <div>
//       <p>Question 1/{amountOfQuestions}</p>
//       <h4>{question}</h4>
//       <div className='options'>
//         {options.map((option, index) => (
//           <OptionToAnswer
//             dispatch={dispatch}
//             answer={answer}
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
