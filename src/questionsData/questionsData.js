// const questionsData = [
//   {
//     question: 'Which is the most popular JavaScript framework?',
//     options: ['Angular', 'React', 'Svelte', 'Vue'],
//     correctOption: 1,
//     points: 10,
//   },
//   {
//     question: 'Which company invented React?',
//     options: ['Google', 'Apple', 'Netflix', 'Facebook'],
//     correctOption: 3,
//     points: 10,
//   },
//   {
//     question: "What's the fundamental building block of React apps?",
//     options: ['Components', 'Blocks', 'Elements', 'Effects'],
//     correctOption: 0,
//     points: 10,
//   },
//   {
//     question:
//       "What's the name of the syntax we use to describe the UI in React components?",
//     options: ['FBJ', 'Babel', 'JSX', 'ES2015'],
//     correctOption: 2,
//     points: 10,
//   },
//   {
//     question: 'How does data flow naturally in React apps?',
//     options: [
//       'From parents to children',
//       'From children to parents',
//       'Both ways',
//       'The developers decides',
//     ],
//     correctOption: 0,
//     points: 10,
//   },
//   {
//     question: 'How to pass data into a child component?',
//     options: ['State', 'Props', 'PropTypes', 'Parameters'],
//     correctOption: 1,
//     points: 10,
//   },
//   {
//     question: 'When to use derived state?',
//     options: [
//       'Whenever the state should not trigger a re-render',
//       'Whenever the state can be synchronized with an effect',
//       'Whenever the state should be accessible to all components',
//       'Whenever the state can be computed from another state variable',
//     ],
//     correctOption: 3,
//     points: 30,
//   },
//   {
//     question: 'What triggers a UI re-render in React?',
//     options: [
//       'Running an effect',
//       'Passing props',
//       'Updating state',
//       'Adding event listeners to DOM elements',
//     ],
//     correctOption: 2,
//     points: 20,
//   },
//   {
//     question: 'When do we directly "touch" the DOM in React?',
//     options: [
//       'When we need to listen to an event',
//       'When we need to change the UI',
//       'When we need to add styles',
//       'Almost never',
//     ],
//     correctOption: 3,
//     points: 20,
//   },
//   {
//     question: 'In what situation do we use a callback to update state?',
//     options: [
//       'When updating the state will be slow',
//       'When the updated state is very data-intensive',
//       'When the state update should happen faster',
//       'When the new state depends on the previous state',
//     ],
//     correctOption: 3,
//     points: 30,
//   },
//   {
//     question:
//       'If we pass a function to useState, when will that function be called?',
//     options: [
//       'On each re-render',
//       'Each time we update the state',
//       'Only on the initial render',
//       'The first time we update the state',
//     ],
//     correctOption: 2,
//     points: 30,
//   },
//   {
//     question:
//       "Which hook to use for an API request on the component's initial render?",
//     options: ['useState', 'useEffect', 'useRef', 'useReducer'],
//     correctOption: 1,
//     points: 10,
//   },
//   {
//     question: 'Which variables should go into the useEffect dependency array?',
//     options: [
//       'Usually none',
//       'All our state variables',
//       'All state and props referenced in the effect',
//       'All variables needed for clean up',
//     ],
//     correctOption: 2,
//     points: 30,
//   },
//   {
//     question: 'An effect will always run on the initial render.',
//     options: [
//       'True',
//       'It depends on the dependency array',
//       'False',
//       'In depends on the code in the effect',
//     ],
//     correctOption: 0,
//     points: 30,
//   },
//   {
//     question: "When will an effect run if it doesn't have a dependency array?",
//     options: [
//       'Only when the component mounts',
//       'Only when the component unmounts',
//       'The first time the component re-renders',
//       'Each time the component is re-rendered',
//     ],
//     correctOption: 3,
//     points: 20,
//   },
// ];

const questionsData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Rome'],
    correctOption: 1,
    points: 10,
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: [
      'Leonardo da Vinci',
      'Pablo Picasso',
      'Vincent van Gogh',
      'Michelangelo',
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Saturn', 'Venus'],
    correctOption: 0,
    points: 10,
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Kilimanjaro', 'Mount Everest', 'K2', 'Kangchenjunga'],
    correctOption: 1,
    points: 10,
  },
  {
    question: 'Which is the largest ocean in the world?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    correctOption: 3,
    points: 10,
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      'William Shakespeare',
      'Jane Austen',
      'Mark Twain',
      'Charles Dickens',
    ],
    correctOption: 0,
    points: 10,
  },
  {
    question:
      'Which programming language is known for its use in artificial intelligence and machine learning?',
    options: ['Python', 'JavaScript', 'Java', 'C++'],
    correctOption: 0,
    points: 30,
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Brain', 'Heart', 'Skin', 'Liver'],
    correctOption: 2,
    points: 20,
  },
  {
    question:
      'Which famous scientist developed the theory of general relativity?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Nikola Tesla',
    ],
    correctOption: 1,
    points: 20,
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1912', '1921', '1905', '1934'],
    correctOption: 0,
    points: 30,
  },
  {
    question: 'What is the tallest tree species on Earth?',
    options: ['Sequoia', 'Pine', 'Oak', 'Bamboo'],
    correctOption: 0,
    points: 30,
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Vietnam'],
    correctOption: 1,
    points: 10,
  },
  {
    question: 'Who was the first person to step on the moon?',
    options: [
      'Neil Armstrong',
      'Buzz Aldrin',
      'Michael Collins',
      'Alan Shepard',
    ],
    correctOption: 0,
    points: 30,
  },
  {
    question: 'What is the capital of Japan?',
    options: ['Tokyo', 'Beijing', 'Seoul', 'Shanghai'],
    correctOption: 0,
    points: 30,
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Vietnam'],
    correctOption: 1,
    points: 20,
  },
];

console.log(questionsData);

export default questionsData;
