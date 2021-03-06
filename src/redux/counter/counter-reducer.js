import { combineReducers } from 'redux';
import actionsTypes from './counter-types';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsTypes.INCREMENT:
      return state + payload;

    case actionsTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
