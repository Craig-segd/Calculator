import React from 'react';
import classes from './Operations.css';
import Operation from './Operation/Operation';

const Operations = (props) => {
    return (
        <div className={classes.Operations}>
        <Operation OperationClicked={props.OperationClicked}>+</Operation>
        <Operation OperationClicked={props.OperationClicked}>-</Operation>
        <Operation OperationClicked={props.OperationClicked}>x</Operation>
        <Operation OperationClicked={props.OperationClicked}>/</Operation>
        <button className={classes.Cancel} onClick={props.CancelClicked}>C</button>
        <button className={classes.Equals} onClick={props.ResultClicked}>=</button>
        
        </div>
    );
}

export default Operations;