export default function OptionToAnswer({
  option,
  dispatch,
  index,
  answer,
  correctOption,
}) {
  const hasAnswered = answer !== null;
  return (
    <button
      className={`btn btn-option 
        ${index === answer ? 'answer' : ''} 
        ${hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''}`}
      onClick={() => dispatch({ type: 'newAnswer', payload: index })}
      disabled={hasAnswered}
    >
      {option}
    </button>
  );
}
