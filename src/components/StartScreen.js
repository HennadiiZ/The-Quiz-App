export default function StartScreen({
  amountOfQuestions,
  startQuiz,
  dispatch,
}) {
  return (
    <div className='start'>
      <h2>Welcome to this quiz!</h2>
      <h4>There are {amountOfQuestions} questions for you.</h4>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'startQuiz' })}
      >
        Let's start
      </button>
    </div>
  );
}
