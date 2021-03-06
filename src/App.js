import React, { Component } from 'react';
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
      text: "",
      language: "en-us",
      speed: "0"
    }
  }

  onTextChange = (e) => {
    console.log('onBlur -> App.onTextChange()', e.target.value);
    this.setState({ 
      text: e.target.value
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
  clear = () => {
    console.log('App.clear()');
    this.setState({
      text: ''
    })
  }

  render() {
    const encodedText =encodeURIComponent(this.state.text);
    const url = `http://api.voicerss.org/?key=${this.state.key}&src=${encodedText}&hl=${this.state.language}&r=${this.state.speed}`
    console.log('url updated', url)
    return (
      <div className="App">
        <img className="logo" src={LogoWriteOutLoud} alt="Logo Write Out Loud Text to Speech" />
        <div className="AppAreaButtons">
          <TopButton 
            onLanguageChange={this.onLanguageChange} 
            onSpeedChange={this.onSpeedChange}/> 
          <audio id="audio">
            <source src={url} id="mp3Source" type="audio/mp3"/>
          </audio>
          <TextAreaWithIcons 
            text={this.state.text} 
            onTextChange={this.onTextChange} 
            onClear={this.clear}
            onClick={this.play}/>
        </div>
      </div>
    );
  }
}


export default App;
