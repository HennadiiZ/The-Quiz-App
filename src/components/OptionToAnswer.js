export default function OptionToAnswer({ option, dispatch, index }) {
  return (
    <button
      className='btn btn-option'
      onClick={() => dispatch({ type: 'newAnswer', payload: index })}
    >
      {option}
    </button>
  );
}
