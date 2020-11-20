import React from 'react';
import { connect } from 'react-redux';
import { onIncrement } from './store/actions';

function Increment(props) {
    return (
        <button onClick={props.onIncrement}>Inc+</button>
    );
}

const mapDispatchToProps = {
    onIncrement: onIncrement
}

export default connect(null, mapDispatchToProps)(Increment);