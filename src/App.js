import React, { Component } from 'react';
//import logo from './logo.svg';
import LogoWriteOutLoud from './LogoWriteOutLoud.png';
import './App.css';
import TopButton from './topbuttons.js';
import TextAreaWithIcons from './TextArea';


class App extends Component {
  constructor(props) {
    super(props)
    const key = 'c72b3784423941dc9c71739cbbc51d41';
    this.state = {
      key: key,
      text: '',
      language: '',
      speed: ''
    }
  }

  onTextChange = (e, { value }) => {
    this.setState({ 
      text: encodeURIComponent(value) 
    });
  }

  onLanguageChange = (e, {value}) => {
    this.setState({
      language: value
    })
  }

  onSpeedChange = (e, {value}) => {
    this.setState({
      speed: value
    })
  }

  play = () => {
    var audio = document.getElementById('audio')
    audio.load();
    audio.play();
  }

  render() {

    const url = `http://api.voicerss.org/?key=${this.state.key}&src=${this.state.text}&hl=${this.state.language}&r=${this.state.speed}`
    return (
      <div className="App">
      <img src={LogoWriteOutLoud} alt="Logo Write Out Loud Text to Speech" />
      <TopButton 
        onLanguageChange={this.onLanguageChange} 
        onSpeedChange={this.onSpeedChange}
      /> 
      <audio id="audio">
        <source src={url} id="mp3Source" type="audio/mp3"></source>
      </audio>
      <TextAreaWithIcons onTextChange={this.onTextChange} onClick={this.play}/>
      </div>
    );
  }
}


export default App;
