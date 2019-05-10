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
      text: ''
    }
  }

  onTextChange = (e, { value }) => {
    this.setState({ 
      text: encodeURIComponent(value) 
    });
  }

  play = () => {
    var audio = document.getElementById('audio')
    audio.load();
    audio.play();
  }

  render() {

    const url = `http://api.voicerss.org/?key=${this.state.key}&hl=ca-es&src=${this.state.text}`
    return (
      <div className="App">
      <img src={LogoWriteOutLoud} alt="Logo Write Out Loud Text to Speech" />
      <TopButton/>
      <audio id="audio">
        <source src={url} id="mp3Source" type="audio/mp3"></source>
      </audio>
      <TextAreaWithIcons onTextChange={this.onTextChange} onClick={this.play}/>
      </div>
    );
  }
}


export default App;
