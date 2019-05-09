import React, { Component } from 'react';
//import logo from './logo.svg';
import LogoWriteOutLoud from './LogoWriteOutLoud.png';
import './App.css';
import TopButton from './topbuttons.js';
import TextAreaWithIcons from './TextArea';


class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={LogoWriteOutLoud} alt="Logo Write Out Loud Text to Speech" />
      <TopButton/>
      <TextAreaWithIcons/>
      </div>
    );
  }
}


export default App;
