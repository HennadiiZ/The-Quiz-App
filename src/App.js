import { useQuiz } from './context/QuizContext';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import Progress from './components/Progress';
import FinishScreen from './components/EndScreen';
import Timer from './components/Timer';
import Button from './components/Button';

export default function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && (
          <>
            <Progress />
            <Question />
            {/* <Footer>
              <Timer />
              <NextButton />
            </Footer> */}
            <div className='footer-box'>
              <Timer />
              <Button />
            </div>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

// import './App.css';
// import { useContext } from 'react';
// import { QuizContext, QuizProvider } from './context/QuizContext';
// import questionsData from './questionsData/questionsData';
// import Header from './components/Header';
// import Main from './components/Main';
// import Loader from './components/Loader';
// import Error from './components/Error';
// import StartScreen from './components/StartScreen';
// import Question from './components/Question';
// import Button from './components/Button';
// import Progress from './components/Progress';
// import EndScreen from './components/EndScreen';
// import Timer from './components/Timer';

// function App() {
//   const { status } = useContext(QuizContext);

//   return (
//     <div className='app'>
//       <Header />
//       <Main>
//         {status === 'loading' && <Loader />}
//         {status === 'error' && <Error />}
//         {status === 'ready' && <StartScreen />}
//         {status === 'active' && (
//           <>
//             <Progress />
//             <Question />

//             <div className='footer-box'>
//               <Timer />
//               <Button />
//             </div>
//           </>
//         )}
//         {status === 'finished' && <EndScreen />}
//       </Main>
//     </div>
//   );
// }

// export default App;

// npm start
// npm run server
// http://localhost:8000/questions
