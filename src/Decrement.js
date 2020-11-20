import React from 'react';
import { connect } from 'react-redux';
import { onDecrement } from './store/actions';

function Decrement(props) {
    return (
        <button onClick={props.onDecrement}>Dec-</button>
    );
}

const mapDispatchToProps = {
    onDecrement: onDecrement
}

export default connect(null, mapDispatchToProps)(Decrement);