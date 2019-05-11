import React, { Component } from 'react';
//import logo from './logo.svg';
import LogoWriteOutLoud from './LogoWriteOutLoud.png';
import './App.css';
import TopButton from './topbuttons.js';
import TextAreaWithIcons from './TextArea';
//import { Icon } from 'semantic-ui-react';


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
      <img src={LogoWriteOutLoud} alt="Logo Write Out Loud Text to Speech" />
      <TopButton 
        onLanguageChange={this.onLanguageChange} 
        onSpeedChange={this.onSpeedChange}
      /> 
      <audio id="audio">
        <source src={url} id="mp3Source" type="audio/mp3"></source>
      </audio>
      <TextAreaWithIcons 
        text={this.state.text} 
        onTextChange={this.onTextChange} 
        onClear={this.clear}
        onClick={this.play}/>
      </div>
    );
  }
}


export default App;
