import React, { Component }from 'react';

export default class Sound extends Component {

  toggle = () => {
    this.props.sound === 'on' ?
    this.props.toggleSound('off') :
    this.props.toggleSound('on')
  }

  render(){
    return (
      <button className="soundButton" onClick={this.toggle}>Sound</button>
    )
  }
}
