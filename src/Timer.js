import React, { Component }from 'react';
import './Timer.css';

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeLeft: 0,
      minutes: 0,
      seconds: 0
    }
    this.updateTimes = this.updateTimes.bind(this)
  }

  componentDidMount(){
    this.setState({
      timeLeft: this.props.workTime
    })
    this.tick()
  }

  updateTimes(minutes, seconds){
    this.setState({
      minutes: minutes,
      seconds: seconds
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
      this.updateTimes(minutes,seconds)
      if (distance <= 0){
        clearInterval(this.timer)
      }
    }, 1000)
  }
  render(){
    const { minutes, seconds } = this.state
    return(
      <div className="Timer">
      <h2>{minutes}:{seconds}</h2>
      <h3>{this.props.breakTime}:00</h3>
      </div>
    )
  }
  }
