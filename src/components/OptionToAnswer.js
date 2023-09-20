export default function OptionToAnswer({
  option,
  index,
  onChooseOption,
  showResult,
}) {
  return <p onClick={() => onChooseOption(index)}>{option}</p>;
  //   return (
  //     <p onClick={() => onChooseOption(index)}>
  //       {option}
  //       {showResult && (showResult === 'Correct' ? 'Correct' : 'Wrong')}
  //     </p>
  //   );
}
