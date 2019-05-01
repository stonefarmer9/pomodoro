import React, { Component }from 'react';
import './App.css';
import  Clock from './Timer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      workTime: 25,
      breakTime: 5,
      start: false
    }
  }

  startTimer = () => {
    this.setState({
      start: true
    })
  }

  addWorkTime = () => {
    this.setState({
      workTime: this.state.workTime + 1
    })

  }

  subWorkTime = () => {
    this.setState({
      workTime: this.state.workTime - 1
    })
  }

  addBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime + 1
    })
  }

  subBreakTime = () => {
    this.setState({
      breakTime: this.state.breakTime - 1
    })
  }


  render() {
    const { start, workTime, breakTime } = this.state
    let showTimer;
    if (start === true) {
      showTimer = <Clock
                    workTime={workTime}
                    breakTime={breakTime}/>
    }
  return (
    <div className="App">
      <center>
      <button onClick={this.addWorkTime} className="addWorkTime"> + </button>
        <span> {workTime}</span>
      <button  onClick={this.subWorkTime}className="subWorkTime"> - </button>
        <button onClick={this.addBreakTime}className="addBreakTime"> + </button>
          <span> {breakTime} </span>
        <button onClick={this.subBreakTime}className="subBreakTime"> - </button>
        <div className="start">
      <button onClick={this.startTimer} className="startButton">Let's Pomodoro!</button>
      </div>
       {showTimer}
      </center>
    </div>
  );
}
}

export default App;
