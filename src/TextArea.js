import React, { Component } from 'react';
import { Icon, Form, TextArea } from 'semantic-ui-react';
//import TextareaAutosize from "react-textarea-autosize";

export default class TextAreaWithIcons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text:  '',
      fontSize: 12
    }
  }

  onChange = (e) => {
    //console.log('TextArea.onChange()');
    this.setState({ text: e.target.value })
  }

  increaseFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    })
  }
  
  clear=() => {
    console.log('TextArea.clear()');
    this.setState({
      text: ''
    })
    this.props.onClear();
  } 

  decreaseFont = () => {
    this.setState({
      fontSize: this.state.fontSize - 1
    })
  }


  render(props) {
    //console.log({props, "this.props": this.props})
    return (
        <React.Fragment>
          <div attached='top'>
            <Icon onClick={this.decreaseFont} name='minus'/>
            <Icon onClick={this.clear} name='redo'/>
            <Icon onClick={this.increaseFont} name='plus'/>
          </div>
          <Form attached>
            <TextArea
              rows={15} 
              placeholder="Write it and I'll say it out loud..." 
              onChange={this.onChange}
              onBlur={this.props.onTextChange}
              style={{
                fontWeight: "bold",
                fontSize: this.state.fontSize + "px"
              }}
              value={this.state.text}
            />
      <Icon.Group size='huge'
        onClick={this.props.onClick}>
        <Icon name='user' />
        <Icon corner name='play' />
      </Icon.Group>
          </Form>
        </React.Fragment>
    )
  }
}