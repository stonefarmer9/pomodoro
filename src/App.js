import React, { Component }from 'react';
import './App.css';
import  Clock from './Timer'
import Sound from './sound'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      workTime: 25,
      breakTime: 5,
      start: false,
      sound: "on",
      sessions: 1
    }
  }


  startTimer = () => {
    this.setState({
      start: true
    })
  }

  addSession = () => {
    this.setState({
      sessions: this.state.sessions + 1
    })
  }

  subSession = () => {
    this.setState({
      sessions: this.state.sessions - 1
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

  toggleSound = sound => {
    this.setState({
      sound: sound
    })
  }

  render() {
    const { start, workTime, breakTime, sound, sessions } = this.state
    let showTimer;
    if (start === true) {
      showTimer = <Clock
                    workTime={workTime}
                    breakTime={breakTime}
                    updateTime={this.updateTime}/>
    }
  return (
    <div className="App">
      <center>
        <div className="buttons">
        <div className="sessionsButton">
          <h1 className="sessionTitle"> How many sessions ? </h1>
          <button onClick={this.addSession} className="addSession"> + </button>
          <span className="sessions">{sessions}</span>
          <button  onClick={this.subSession}className="subSession"> - </button>
        </div>
          <button  onClick={this.subWorkTime}className="subWorkTime"> - </button>
            <span className="span"> {workTime}</span>
          <button onClick={this.addWorkTime} className="addWorkTime"> + </button>
          <span className="buttonInstructions">{' <- Work Time  Break Time -> '}</span>
          <button onClick={this.subBreakTime}className="subBreakTime"> - </button>
            <span className="span"> {breakTime} </span>
          <button onClick={this.addBreakTime}className="addBreakTime"> + </button>
        </div>
        {showTimer}
        <div className="sound">
        <Sound
        sound={sound}
        toggleSound={this.toggleSound}/>
        </div>
        <div className="start">
      <button onClick={this.startTimer} className="startButton">Let's Pomodoro!</button>
      </div>
      </center>
    </div>
  );
}
}

export default App;
