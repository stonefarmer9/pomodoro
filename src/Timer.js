import React, { Component }from 'react';
import './Timer.css';

export default class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeLeft: 0,
      minutes: 25,
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
    var timer = setInterval(function(){
      var now = new Date().getTime();

      var distance = target - now;
      console.log(distance);
      var minutes = Math.floor(distance % (1000 * 60 * 60)) / (1000 * 60);
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      console.log(minutes, seconds);
      
      if (distance <= 0){
        clearInterval(timer)
      }


    }, 1000)
  }
  render(){
    const { minutes, seconds } = this.state
    return(
      <div className="Timer">
      <h2>00:{minutes}:{seconds}</h2>
      <h3>00:0{this.props.breakTime}:00</h3>
      </div>
    )
  }
  }
