import './App.css';
// import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';

function App() {
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
