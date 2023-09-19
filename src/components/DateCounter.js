// ===================================================== vers 7 (les 188)
import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action');
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + initialState.count);

  const dec = function () {
    dispatch({ type: 'dec' });
  };

  const inc = function () {
    dispatch({ type: 'inc' });
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: +e.target.value });
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: +e.target.value });
  };

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className='counter'>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
// // ===================================================== vers 6 (les 188)
// import { useReducer } from 'react';

// const initialState = { count: 0, step: 1 };

// function reducer(state, action) {
//   // console.log('state:', state); // {count: 0, step: 1}
//   // console.log('action:', action); // {type: 'dec'} -action is always something that inside dispatch

//   switch (action.type) {
//     case 'dec':
//       return { ...state, count: state.count - state.step };
//     case 'inc':
//       return { ...state, count: state.count + state.step };
//     case 'setCount':
//       return { ...state, count: action.payload };
//     case 'setStep':
//       return { ...state, step: action.payload };
//     case 'reset':
//       // return { count: 0, step: 1 };
//       return initialState;
//     default:
//       throw new Error('Unknown action');
//   }
// }

// function DateCounter() {
//   // const [step, setStep] = useState(1);
//   // const [count, dispatch] = useReducer(reducer, 0);

//   // const initialState = { count: 0, step: 1 };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + initialState.count);

//   const dec = function () {
//     dispatch({ type: 'dec' });
//   };

//   const inc = function () {
//     // console.log('count:', initialState.count);
//     dispatch({ type: 'inc' });
//   };

//   const defineCount = function (e) {
//     dispatch({ type: 'setCount', payload: +e.target.value });
//   };

//   const defineStep = function (e) {
//     // setStep(Number(e.target.value));
//     dispatch({ type: 'setStep', payload: +e.target.value });
//   };

//   const reset = function () {
//     // setCount(0);
//     // setStep(1);

//     // dispatch({ type: 'setStep', payload: 1 });
//     // dispatch({ type: 'setCount', payload: 0 });

//     dispatch({ type: 'reset' });
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

// // ===================================================== vers 5 (les 188)
// import { useState, useReducer } from 'react';

// function reducer(state, action) {
//   console.log('state:', state); // {count: 0, step: 1}
//   console.log('action:', action); // {type: 'dec'} -action is always something that inside dispatch

//   // if (action.type === 'inc') {
//   //   return state + 1;
//   // }

//   // if (action.type === 'dec') {
//   //   return state - 1;
//   // }

//   // if (action.type === 'setCount') {
//   //   return action.payload;
//   // }
//   switch (action.type) {
//     case 'dec':
//       // return { count: state.count + 1 };
//       // return { ...state, count: state.count - 1 };
//       return { ...state, count: state.count - state.step };
//     case 'inc':
//       return { ...state, count: state.count + state.step };
//     case 'setCount':
//       return { ...state, count: action.payload };
//     case 'setStep':
//       return { ...state, count: action.payload };
//       case 'reset':
//         return { count: 0, step: 1 };
//     default:
//       // return state;
//       throw new Error('Unknown action');
//   }

//   // return { count: 0, step: 1 };
// }

// function DateCounter() {
//   // const [step, setStep] = useState(1);
//   // const [count, dispatch] = useReducer(reducer, 0);

//   const initialState = { count: 0, step: 1 };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + initialState.count);

//   const dec = function () {
//     dispatch({ type: 'dec' });
//   };

//   const inc = function () {
//     console.log('count:', initialState.count);
//     dispatch({ type: 'inc' });
//   };

//   const defineCount = function (e) {
//     dispatch({ type: 'setCount', payload: +e.target.value });
//   };

//   const defineStep = function (e) {
//     // setStep(Number(e.target.value));
//     dispatch({ type: 'setStep', payload: +e.target.value });
//   };

//   const reset = function () {
//     // setCount(0);
//     // setStep(1);

//     // dispatch({ type: 'setStep', payload: 1 });
//     // dispatch({ type: 'setCount', payload: 0 });

//     dispatch({ type: 'reset' });
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
// // ===================================================== vers 4
// import { useState, useReducer } from 'react';

// function reducer(state, action) {
//   // console.log('state:', state); // state: 0
//   // console.log('action:', action); // action: 1 - dispatch sets one

//   console.log('state:', state); // state: 0
//   console.log('action:', action); // action: 1 -action is always something that inside dispatch
//   // return state + action;

//   if (action.type === 'inc') {
//     return state + 1;
//   }

//   if (action.type === 'dec') {
//     return state - 1;
//   }

//   if (action.type === 'setCount') {
//     return action.payload;
//   }
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const [count, dispatch] = useReducer(reducer, 0);

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//     // dispatch(-1); // dispatch sets minus one
//     dispatch({ type: 'dec' }); // this is object called action, when we work with reducer func
//     // it can be anything, but it's a standard to have two properties type, payload
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);

//     console.log('count:', count); // return state + action; so it increases for one (or anything that in dispatch)
//     // dispatch(count);
//     // dispatch(1); // dispatch sets one
//     dispatch({ type: 'dec' });
//   };

//   const defineCount = function (e) {
//     // setCount(Number(e.target.value));
//     dispatch({ type: 'setCount', payload: +e.target.value });
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

// // ===================================================== vers 3
// import { useState, useReducer } from 'react';

// function reducer(state, action) {
//   // console.log('state:', state); // state: 0
//   // console.log('action:', action); // action: 1 - dispatch sets one

//   console.log('state:', state); // state: 0
//   console.log('action:', action); // action: 1 -action is always something that inside dispatch
//   // return state + action;

//   if (action.type === 'inc') {
//     return state + action.payload;
//   }

//   if (action.type === 'dec') {
//     return state + action.payload;
//   }

//   if (action.type === 'setCount') {
//     return action.payload;
//   }
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const [count, dispatch] = useReducer(reducer, 0);

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//     // dispatch(-1); // dispatch sets minus one
//     dispatch({ type: 'dec', payload: -1 }); // this is object called action, when we work with reducer func
//     // it can be anything, but it's a standard to have two properties type, payload
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);

//     console.log('count:', count); // return state + action; so it increases for one (or anything that in dispatch)
//     // dispatch(count);
//     // dispatch(1); // dispatch sets one
//     dispatch({ type: 'dec', payload: 1 });
//   };

//   const defineCount = function (e) {
//     // setCount(Number(e.target.value));
//     dispatch({ type: 'setCount', payload: +e.target.value });
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

// // ===================================================== vers 2
// import { useState, useReducer } from 'react';

// function reducer(state, action) {
//   // console.log('state:', state); // state: 0
//   // console.log('action:', action); // action: 1 - dispatch sets one

//   console.log('state:', state); // state: 0
//   console.log('action:', action); // action: 1 -action is always something that inside dispatch
//   return state + action;
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const [count, dispatch] = useReducer(reducer, 0);

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//     dispatch(-1); // dispatch sets minus one
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);

//     console.log('count:', count); // return state + action; so it increases for one (or anything that in dispatch)
//     // dispatch(count);
//     dispatch(1); // dispatch sets one
//   };

//   const defineCount = function (e) {
//     // setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

// ===================================================== vers 1
// import { useState, useReducer } from 'react';

// function reducer(state, action) {
//   console.log('state:', state); // state: 0
//   console.log('action:', action); // action: 1 - dispatch sets one
//   return state;
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const [count, dispatch] = useReducer(reducer, 0);

//   // This mutates the date object.
//   const date = new Date('june 21 2027');
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);
//     dispatch(1); // dispatch sets one
//   };

//   const defineCount = function (e) {
//     // setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className='counter'>
//       <div>
//         <input
//           type='range'
//           min='0'
//           max='10'
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

//----------

// orig
// import { useState } from "react";

// function DateCounter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     setCount((count) => count - step);
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     setCount((count) => count + step);
//   };

//   const defineCount = function (e) {
//     setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
