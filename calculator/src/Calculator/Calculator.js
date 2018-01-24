import React, { Component } from 'react';
import Buttons from './Buttons/Buttons';
import classes from './Calculator.css';
import Screen from './Screen/Screen';

class Calculator extends Component {
    state = {
        input: "",
        input2: "",
        Operation: null,
        Result: "",
        Display: 0
    }

    ButtonClickedHandler = (i) => {
        if (this.state.Operation === null) {
            let result = this.state.input + i;


            this.setState({
                input: result,
                Display: this.state.input + i
            });
        } else {
            let result = this.state.input2 + i;

            this.setState({
                input2: result,
                Display: this.state.input2 + i
            });
        }

    }

    OperationClickedHandler = (props) => {
        if (this.state.input !== "") {
            this.setState({
                Operation: props,
                Display: props
            });
        }

        if (this.state.input !== "" && this.state.input2 !== "") {
            this.ResultClickedHandler();
            this.setState({
                Operation: props,
            });

        }
    }

    ResultClickedHandler = () => {
        let result = null;

        if (this.state.input !== "" && this.state.input2 !== "") {
            if (this.state.Operation === "+") {
                result = parseInt(this.state.input, 10) + parseInt(this.state.input2, 10);
            }
            else if (this.state.Operation === "/") {
                result = this.state.input / this.state.input2;
            }
            else if (this.state.Operation === "x") {
                result = this.state.input * this.state.input2;
            }
            else if (this.state.Operation === "-") {
                result = this.state.input - this.state.input2;
            } else {
                result = 0;
            }

            this.setState({
                input: result,
                input2: "",
                Operation: null,
                Display: result
            });
        }
    }

    CancelClickedHandler = () => {
        this.setState({
            input: "",
            input2: "",
            Operation: null,
            Result: "",
            Display: 0
        })
    }

    render() {
        return (<div>
            <h1 style={{fontFamily: "Calibri", fontWeight: "normal", fontSize: "30px"}}>Simple React Calculator</h1>
            <div className={classes.Calculator}>

                <div className={classes.Screen}>
                    <Screen>{this.state.Display}</Screen>
                </div>
                <Buttons BtnClicked={this.ButtonClickedHandler}
                    OperationClicked={this.OperationClickedHandler}
                    ResultClicked={this.ResultClickedHandler}
                    CancelClicked={this.CancelClickedHandler} />
            </div>
        </div>
        );
    }
}

export default Calculator;