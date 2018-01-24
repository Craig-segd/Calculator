import React from 'react';
import classes from './Operation.css';

const Operation = (props) => {
    return(
        <div className={classes.Operation}>
        <button onClick={(event) => props.OperationClicked(props.children)} className={classes.Btn}>{props.children}</button>
        </div>
    );
}

export default Operation;