import React from 'react';
import Button from './Button/Button';
import classes from './Buttons.css';
import Operations from './Operations/Operations';

const Buttons = (props) => {
    
    let Buttons = [];

    for(let i = 1; i < 10; i++) {
        if(i === 4 || i === 7) {
            Buttons.push(<br key={i * 100}/>)
        }
            Buttons.push(<Button key={i} BtnClicked = {(event) => props.BtnClicked(i)}>{i}</Button>);
        }
    
    return(
        
        <div className={classes.Buttons}>
         {Buttons}
            <div className={classes.Zero}>
                <button className={classes.BtnZero} onClick={(event) => props.BtnClicked(0)}>0</button>
            </div>
         <Operations OperationClicked={props.OperationClicked} ResultClicked={props.ResultClicked} CancelClicked={props.CancelClicked}/>
        </div>
    );
}

export default Buttons;