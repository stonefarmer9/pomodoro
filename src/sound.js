import React, { Component }from 'react';
import './sound.css';
export default class Sound extends Component {

  toggle = (e) => {
    this.props.sound === 'on' ?
    this.changeSoundAttributes("off", process.env.PUBLIC_URL
  + "/assets/off.png", e)
  :
  this.changeSoundAttributes("on", process.env.PUBLIC_URL
  + "/assets/on.png", e)
  }

changeSoundAttributes = (toggle, src, e) => {
  this.props.toggleSound(toggle)
  e.target.src = src
}
  render(){
    return(
      <button className="soundButton" onClick={(e) =>{
        this.toggle(e)}}>
        <img src={process.env.PUBLIC_URL
        + "/assets/on.png"}/>
        </button>
    )
  }
}
