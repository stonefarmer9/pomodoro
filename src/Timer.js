import React, { Component }from 'react';
import './Timer.css';

export default class Timer extends Component {
  render(){
    return(
      <div className="Timer">
      <h2>{this.props.workTime}:00</h2>
      <h3>{this.props.breakTime}:00</h3>
      </div>
    )
  }
  }
