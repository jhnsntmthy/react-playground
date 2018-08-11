import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  state = { count: 0 }
  handleClick = () => {
    this.setState(  state => ({ count: state.count + 1 }) )
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.count }
      </button>
    )
  }
}


export default Counter;
