import React, { Component } from 'react';
import Counter from './Counter'
import Timer from './Timer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Timer />
      </div>
    )
  }
}


export default App;
