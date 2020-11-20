import React, { Component } from 'react';
import styles from './counterStyle.module.css';
import { connect } from 'react-redux';
import Increment from './Increment';
import Decrement from './Decrement';
import ResetCounter from './ResetCounter';
import { onSubValue10, onSubValue5, onAddValue10, onAddValue5 } from './store/actions';

class Counter extends Component {

    render() {
        return (
            <>
                <Increment />
                <button onClick={() => { this.props.onAddValue10(10) }}>+10</button>
                <button onClick={() => { this.props.onAddValue5(5) }}>+5</button>
                <span className={styles.count}>{this.props.countValue}</span>
                <button onClick={() => { this.props.onSubValue5(5) }}>-5</button>
                <button onClick={() => { this.props.onSubValue10(10) }}>-10</button>
                <Decrement />
                <div>
                    <ResetCounter />
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countValue: state.count
    };
};

const mapDispatchToProps = {
    onSubValue10: onSubValue10,
    onAddValue10: onAddValue10,
    onAddValue5: onAddValue5,
    onSubValue5: onSubValue5

};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);