import React, { Component } from 'react';
import { Icon, Menu, Popup, Form } from 'semantic-ui-react';
import TextareaAutosize from "react-textarea-autosize";

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
      fontSize: this.state.fontSize + 0.5
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
      fontSize: this.state.fontSize - 0.5
    })
  }


  render(props) {
    //console.log({props, "this.props": this.props})
    return (
        <React.Fragment>
          <Menu attached="top" size={"mini"}>
          <Menu.Menu position='right' >
            <Menu.Item>
              <Popup
                trigger={<Icon onClick={this.decreaseFont} name='minus' />}
                content='Decrese font size.'
                position='top center'
                size='mini'
                inverted
              />
            </Menu.Item>
            <Menu.Item>
              <Popup
                trigger={<Icon onClick={this.clear} name='redo'/>}
                content='Clear all content.'
                position= 'bottom center'
                size='mini'
                inverted
              />
            </Menu.Item>
            <Menu.Item>
              <Popup
                trigger={<Icon onClick={this.increaseFont} name='plus'/>}
                content='Increase font size'
                position='top center'
                size='mini'
                inverted
              />
            </Menu.Item>
          </Menu.Menu>
          </Menu>
  
          <Form attached>
            <TextareaAutosize
              minRows={8}
              maxRows={12} 
              placeholder="Write it and I'll say it out loud..." 
              onChange={this.onChange}
              onBlur={this.props.onTextChange}
              style={{
                fontWeight: "bold",
                fontSize: this.state.fontSize + "px"
              }}
              value={this.state.text}
            />
          </Form>

          <Menu attached="bottom">
            <Icon.Group 
              size='huge'
              onClick={this.props.onClick}>
              <Icon name='user' />
              <Icon corner name='play' />
            </Icon.Group>
          </Menu>
        </React.Fragment>
    )
  }
}