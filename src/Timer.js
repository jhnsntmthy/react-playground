import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  init_state = { running: false, elapsed: 0 }
  state = this.init_state

  handleReset = () => {
    this.setState(state => this.init_state)
    this.stopTimer()
  }
  handleToggle = () => {
    this.state.running
      ? this.stopTimer()
      : this.startTimer()
  }

  startTimer = () => {
    this.timer = setInterval(this.increment, 100);
    this.run( true )
  }
  stopTimer = () => {
    clearInterval(this.timer)
    this.run( false )
  }

  run = (bool) => {
    this.setState(state => ({...state, running: bool}))
  }
  increment = () => {
    this.setState(state => ({...state, elapsed: state.elapsed + 1}))
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  render() {
    return (
      <div>
        <h2>Timer: { this.state.elapsed / 10 }</h2>
        <button onClick={ this.handleToggle }>
          { this.state.running
          ? "Stop"
          : "Start" }
        </button>
        <button onClick={ this.handleReset }>reset</button>
      </div>
    )
  }
}

export default Timer;