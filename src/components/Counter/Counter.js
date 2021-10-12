import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';

import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
