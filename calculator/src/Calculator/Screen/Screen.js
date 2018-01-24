import React from 'react';
import classes from './Screen.css';

const Screen = (props) => {
    return (
        <div className={classes.Screen}>
            {props.children}
        </div>
    );
}

export default Screen;