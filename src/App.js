import './App.css';
import { useContext } from 'react';
import { QuizContext, QuizProvider } from './context/QuizContext';
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

function App() {
  const { state } = useContext(QuizContext);

  const maxPossiblePoints =
    state.questions.length &&
    state.questions.reduce((a, b) => a + +b.points, 0);

  return (
    <QuizProvider>
      <div className='app'>
        <Header />
        <Main>
          {state.status === 'loading' && <Loader />}
          {state.status === 'error' && <Error />}
          {state.status === 'ready' && (
            <StartScreen amountOfQuestions={state.questions.length} />
          )}
          {state.status === 'active' && (
            <>
              <Progress maxPossiblePoints={maxPossiblePoints} />
              <Question />

              <div className='footer-box'>
                <Timer />
                <Button />
              </div>
            </>
          )}
          {state.status === 'finished' && (
            <EndScreen maxPossiblePoints={maxPossiblePoints} />
          )}
        </Main>
      </div>
    </QuizProvider>
  );
}

export default App;

// npm start
// npm run server
// http://localhost:8000/questions
