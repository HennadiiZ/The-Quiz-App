import './App.css';
import { useEffect, useReducer } from 'react';
// import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Button from './components/Button';
import Progress from './components/Progress';
import EndScreen from './components/EndScreen';

const initialState = {
  questions: [],
  // isLoading state
  status: 'loading', //state // states: 'loading', 'error', 'ready', 'active', 'finished' - it has nothing to do with useReducer
  curIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
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
      const question = state.questions.at(state.curIndex); // state.questions[state.curIndex]
      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        curIndex: state.curIndex + 1,
        answer: null,
      };
    case 'endQuiz':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      // return {
      //   ...initialState,
      //   questions: state.questions,
      //   status: 'ready',
      // };
      return {
        ...state,
        status: 'ready',
        curIndex: 0,
        answer: null,
        points: 0,
        highscore: 0,
      };
    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'dataReceived', payload: res }))
      .catch((err) => dispatch({ type: 'dataFailed', payload: err }));
  }, []);

  const maxPossiblePoints =
    state.questions.length &&
    state.questions.reduce((a, b) => a + +b.points, 0);
  // console.log(state.questions, maxPossiblePoints);

  return (
    <div className='App'>
      <Header />
      <Main>
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          <StartScreen
            amountOfQuestions={state.questions.length}
            dispatch={dispatch}
          />
        )}
        {state.status === 'active' && (
          <>
            <Progress
              dispatch={dispatch}
              curIndex={state.curIndex}
              amountOfQuestions={state.questions.length}
              points={state.points}
              maxPossiblePoints={maxPossiblePoints}
              answer={state.answer}
            />
            <Question
              amountOfQuestions={state.questions.length}
              questionData={state.questions[state.curIndex]}
              dispatch={dispatch}
              answer={state.answer}
              curIndex={state.curIndex}
            />

            <Button
              dispatch={dispatch}
              answer={state.answer}
              index={state.curIndex}
              amountOfQuestions={state.questions.length}
            />
          </>
        )}
        {state.status === 'finished' && (
          <EndScreen
            points={state.points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={state.highscore}
            dispatch={dispatch}
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
