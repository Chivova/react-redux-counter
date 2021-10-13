import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//   counter: {
//     value: 0,
//     step: 1,
//   },
// };

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

// const reducer = (state = initialState, { type, payload }) => {
//   console.log(state.counter);
//   switch (type) {
//     case 'counter/Increment':
//       return {
//         counter: {
//           ...state,
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/Decrement':
//       return {
//         counter: {
//           ...state,
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, composeWithDevTools());
