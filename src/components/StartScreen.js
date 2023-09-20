export default function StartScreen({ amountOfQuestions }) {
  return (
    <div className='start'>
      <h2>Welcome to this quiz!</h2>
      <h4>There are {amountOfQuestions} questions for you.</h4>
      <button className='btn btn-ui'>Let's start</button>
    </div>
  );
}
