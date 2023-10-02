import './App.css';
import { useEffect, useReducer } from 'react';
import questionsData from './questionsData/questionsData';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Button from './components/Button';
import Progress from './components/Progress';
import EndScreen from './components/EndScreen';
import Timer from './components/Timer';

const initialState = {
  questions: [],
  // isLoading state
  status: 'loading', //state // states: 'loading', 'error', 'ready', 'active', 'finished' - it has nothing to do with useReducer
  curIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const secsPerQuestion = 30;

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
        secondsRemaining: state.questions.length * secsPerQuestion,
      };
    case 'newAnswer':
      const question = state.questions.at(state.curIndex);
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
    case 'ticktack':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   fetch('http://localhost:8000/questions')
  //     .then((res) => res.json())
  //     .then((res) => dispatch({ type: 'dataReceived', payload: res }))
  //     .catch((err) => dispatch({ type: 'dataFailed', payload: err }));
  // }, []);

  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);

  // dispatch({ type: 'dataReceived', payload: questionsData });

  const maxPossiblePoints =
    state.questions.length &&
    state.questions.reduce((a, b) => a + +b.points, 0);

  return (
    <div className='app'>
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

            <div className='footer-box'>
              <Timer
                dispatch={dispatch}
                secondsRemaining={state.secondsRemaining}
              />
              <Button
                dispatch={dispatch}
                answer={state.answer}
                index={state.curIndex}
                amountOfQuestions={state.questions.length}
              />
            </div>
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
