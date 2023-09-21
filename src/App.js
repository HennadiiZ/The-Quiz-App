import './App.css';
import { useEffect, useReducer } from 'react';
// import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';

const initialState = {
  questions: [],
  // isLoading state
  status: 'loading', //state // states: 'loading', 'error', 'ready', 'active', 'finished' - it has nothing to do with useReducer
  curIndex: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'startQuiz':
      return {
        ...state,
        status: 'active',
      };
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
      };
    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [{questions, status, curIndex}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      // .then((res) => console.log(res))
      // .then((res) => {
      //   dispatch({ type: 'dataReceived', payload: res });
      //   console.log('1', state);
      // })
      .then((res) => dispatch({ type: 'dataReceived', payload: res }))
      .catch((err) => dispatch({ type: 'dataFailed', payload: err }));
  }, []);

  // console.log('2', state);

  // function startQuiz() {
  //   dispatch({ type: 'startQuiz' });
  // }

  return (
    <div className='App'>
      {/* <DateCounter /> */}
      <Header />
      <Main>
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          // <StartScreen
          //   amountOfQuestions={state.questions.length}
          //   startQuiz={startQuiz}
          // />
          <StartScreen
            amountOfQuestions={state.questions.length}
            dispatch={dispatch}
          />
        )}
        {state.status === 'active' && (
          <Question
            amountOfQuestions={state.questions.length}
            questionData={state.questions[state.curIndex]}
            dispatch={dispatch}
            status={state.status}
            answer={state.answer}
          />
        )}
      </Main>
    </div>
  );
}

export default App;

// npm start
// npm run server
// http://localhost:8000/questions

//--------------------------------------------------
// Please write a program that generates a list of 10,000 numbers
// in random order each time it is run.
// Each number in the list must be unique and be between 1 and 10,000 (inclusive).
// Fisher-Yates shuffle algorithm
//---------------------------------------------------1
// function generateUniqueRandomNumbers(count, min, max) {
//   if (count > max - min + 1) {
//     throw new Error('Number of unique numbers exceeds the range.');
//   }

//   const uniqueNumbers = [];
//   const allNumbers = Array.from(
//     { length: max - min + 1 },
//     (_, index) => index + min
//   );

//   for (let i = 0; i < count; i++) {
//     const randomIndex = Math.floor(Math.random() * allNumbers.length);
//     uniqueNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
//   }

//   return uniqueNumbers;
// }

// const numNumbers = 10000;
// const minNum = 1;
// const maxNum = 10000;

// const uniqueRandomNumbers = generateUniqueRandomNumbers(
//   numNumbers,
//   minNum,
//   maxNum
// );
// console.log(uniqueRandomNumbers);

//========================================================================= 2
// function uniqueRandomNumsGenerator(count, min, max) {
//   if (count > max - min + 1) {
//     // if (quantityOfNums10000 > toNum10000 - fromNum1 + 1) {
//     console.log(
//       // `The amount of unique numbers must be 10000, now it's ${count}`
//       `The quantity of unique numbers must be not less than 10.000.`
//     );
//     return;
//   }

//   const listOfuniqueNumbers = [];
//   const allNumbers = Array.from(
//     { length: max - min + 1 },
//     (_, index) => index + min
//   );

//   for (let i = 0; i < count; i++) {
//     const randomIndex = Math.floor(Math.random() * allNumbers.length);
//     listOfuniqueNumbers.push(allNumbers.splice(randomIndex, 1)[0]);
//   }

//   console.log(listOfuniqueNumbers);
//   return listOfuniqueNumbers;
// }

// const quantityOfNums = 10000;
// const fromNum = 1;
// const toNum = 10000;

// uniqueRandomNumsGenerator(quantityOfNums, fromNum, toNum);
// Fisher-Yates shuffle algorithm

//-----
// function checkUniqueNumbers(arr) {
//   const set = new Set(arr);
//   return set.size === arr.length;
// }
// console.log(
//   checkUniqueNumbers(uniqueRandomNumsGenerator(quantityOfNums, fromNum, toNum))
// );

//========================================================================= 3 - no args
// function generateRandomNumbers() {
//   const numbers = [];

//   // Populate the array with numbers from 1 to 10000
//   for (let i = 1; i <= 10000; i++) {
//     numbers.push(i);
//   }

//   // Fisher-Yates shuffle algorithm to randomize the array
//   for (let i = numbers.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//   }

//   return numbers;
// }

// // Generate a list of 10,000 unique random numbers
// const randomNumbers = generateRandomNumbers();
// console.log(randomNumbers);

// function checkUniqueNumbers(arr) {
//   const set = new Set(arr);
//   return set.size === arr.length;
// }
// console.log(checkUniqueNumbers(randomNumbers));

//========================================================================= 4

// function generateUniqueRandomNumbers(count, min, max) {
//   if (count > max - min + 1) {
//     throw new Error('Cannot generate unique numbers. Requested quantity exceeds available range.');
//   }

//   const uniqueNumbers = new Set();

//   while (uniqueNumbers.size < count) {
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     uniqueNumbers.add(randomNumber);
//   }

//   const uniqueNumbersArray = Array.from(uniqueNumbers);
//   for (let i = uniqueNumbersArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [uniqueNumbersArray[i], uniqueNumbersArray[j]] = [uniqueNumbersArray[j], uniqueNumbersArray[i]];
//   }

//   return uniqueNumbersArray;
// }

// const uniqueRandomNumbers = generateUniqueRandomNumbers(10000, 1, 10000);
// console.log(uniqueRandomNumbers);

//========================================================================= 5
// function generateUniqueRandomNumbers() {
//   const count = 10000;
//   const min = 1;
//   const max = 10000;

//   if (count > max - min + 1) {
//     throw new Error(
//       'Cannot generate unique numbers. Requested quantity exceeds available range.'
//     );
//   }

//   const uniqueNumbers = new Set();

//   while (uniqueNumbers.size < count) {
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     uniqueNumbers.add(randomNumber);
//   }

//   const uniqueNumbersArray = Array.from(uniqueNumbers);
//   for (let i = uniqueNumbersArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [uniqueNumbersArray[i], uniqueNumbersArray[j]] = [
//       uniqueNumbersArray[j],
//       uniqueNumbersArray[i],
//     ];
//   }

//   return uniqueNumbersArray;
// }

// const uniqueRandomNumbers = generateUniqueRandomNumbers();
// console.log(uniqueRandomNumbers);
