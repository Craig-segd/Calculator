import React, { Component } from 'react';
import classes from './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Calculator/>
      </div>
    );
  }
}

export default App;
