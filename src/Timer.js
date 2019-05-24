import React, { Component }from 'react';
import './Timer.css';

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeLeft: 0,
      minutes: 0,
      seconds: 0,
      breakMinutes: 0,
      breakSeconds: 0
    }
    this.updateTimes = this.updateTimes.bind(this);
    this.breakTick = this.breakTick.bind(this)
  }

  componentDidMount(){
    this.setState({
      timeLeft: this.props.workTime
    })
    this.tick()
  }

  updateTimes(minutes, seconds){
    var secs = seconds
    if (seconds < 10) { secs = `0${seconds}`}
    this.setState({
      minutes: minutes,
      seconds: seconds
    })
  }

  updateBreakTimes(minutes, seconds){
    var secs = seconds
    this.setState({
      breakMinutes: minutes,
      breakSeconds: seconds
    })
  }

  tick(){
    var timeLeft = this.props.workTime
    var target = new Date();
    target = target.setTime(target.getTime() + (timeLeft * 60 * 1000));
     this.timer = setInterval(() => {
      var now = new Date().getTime();

      var distance = target - now;

      var minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
      minutes = Math.trunc(minutes)
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (seconds < 10){ seconds = `0${seconds}`}
      console.log(seconds)
      this.updateTimes(minutes,seconds)
      if (distance <= 0){
        clearInterval(this.timer)
        this.breakTick()
      }
    }, 1000)
  }

  breakTick(){
    var timeLeft = this.props.breakTime
    var target = new Date();
    target = target.setTime(target.getTime() + (timeLeft * 60 * 1000));
     this.breakTimer = setInterval(() => {
      var now = new Date().getTime();

      var distance = target - now;

      var minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
      minutes = Math.trunc(minutes)
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (seconds < 10){ seconds = `0${seconds}`};
      this.updateBreakTimes(minutes,seconds);
      if (distance <= 0){
        clearInterval(this.breakTimer)
      }
    }, 1000)
  }

  render(){
    const { minutes, seconds, breakMinutes, breakSeconds } = this.state
    return(
      <div className="Timer">
      <h2>{minutes}:{seconds}</h2>
      <h3>{breakMinutes}:{breakSeconds}</h3>
      </div>
    )
  }
  }
