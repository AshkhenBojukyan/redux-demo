import React from 'react';
import {connect} from 'react-redux';
import {onReset} from './store/actions';

function ResetCounter(props){
    return(
        <button onClick={props.onReset}>reset counter</button>
    );
}

const mapDispatchToProps={
    onReset:onReset
}

export default connect(null,mapDispatchToProps)(ResetCounter);