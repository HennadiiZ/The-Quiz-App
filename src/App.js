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
  // switch (action.type) {
  // }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

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
