import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    return (
        <button onClick={props.BtnClicked} className={classes.Button}>
            {props.children}
        </button>
    );
}

export default Button;