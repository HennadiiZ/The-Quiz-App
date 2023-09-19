import './App.css';
import { useEffect, useReducer } from 'react';
// import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';

const initialState = {
  questions: [],
  // isLoading state
  status: 'loading', //state
  // states: 'loading', 'error', 'ready', 'active', 'finished' - it has nothing to do with useReducer
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
    default:
      throw new Error('unknown action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  console.log('2', state);

  return (
    <div className='App'>
      {/* <DateCounter /> */}
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions?</p>
      </Main>
    </div>
  );
}

export default App;

// npm start
// npm run server
// http://localhost:8000/questions
