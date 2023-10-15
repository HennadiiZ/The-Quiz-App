import { createContext, useContext, useEffect, useReducer } from 'react';
import { secsPerQuestion } from '../constants/constants';
import questionsData from '../questionsData/questionsData';
// import { useNavigate } from 'react-router-dom';

const QuizContext = createContext();

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

function QuizProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [
    {
      questions,
      status,
      curIndex,
      answer,
      points,
      highscore,
      secondsRemaining,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);

  function dataReceived() {
    console.log('check');
  }

  function dataFailed() {
    console.log('check');
  }

  function startQuiz() {
    console.log('check');
  }

  function newAnswer() {
    console.log('check');
  }

  function nextQuestion() {
    console.log('check');
  }

  function endQuiz() {
    console.log('check');
  }

  function restart() {
    console.log('check');
  }

  function ticktack() {
    console.log('check');
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        curIndex,
        answer,
        points,
        highscore,
        secondsRemaining,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

// function useQuiz() {
//   const context = useContext(QuizContext);
//   if (context === undefined) {
//     throw new Error('QuizContext was used outside of the QuizProvider');
//   }
//   return context;
// }

export { QuizProvider, QuizContext };
// export { AuthProvider, useAuth };
// exemple - export { CitiesProvider, CitiesContext };
