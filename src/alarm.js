import React, { Component } from 'react';
import Sound from 'react-sound';
import soundfile from './sounds/alarm.mp3'

export default class Alarm extends Component {

  componentDidMount(){
    this.props.playSound()
  }

  render(){
    return (
       <Sound
       url={soundfile}
       playStatus={Sound.status.PLAYING}
       loop={false}
       onLoading={this.handleSongLoading}
       onPlaying={this.handleSongPlaying}
       onFinishedPlaying={this.handleSongFinishedPlaying}
       />
  );
  }
}
