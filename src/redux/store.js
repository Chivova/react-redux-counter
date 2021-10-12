import { createStore } from 'redux';

const initialState = {
  counter: {
    value: 0,
    step: 1,
  },
};

// const reducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case 'counter/increment':
//
//       return {
//         state: state.counterValue + action.payload,
//       };
//     case 'counter/decrement':
//       return {
//         state: state.counterValue - action.payload,
//       };
//     default:
//       return state;
//   }
// };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };
    case 'counter/Decrement':
      return {
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
