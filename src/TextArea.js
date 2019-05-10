import React, { Component } from 'react';
import { Icon, Form, TextArea } from 'semantic-ui-react';


export default class TextAreaWithIcons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text:  '',
      fontSize: 12
    }
  }
  onChange = (e) => {
    console.log('TextArea.onChange()');
    this.setState({ text: e.target.value })
  }
  clear=() => {
    console.log('TextArea.clear()');
    this.setState({
      text: ''
    })
    this.props.onClear();
  } 

  increaseFont = () => {
    this.setState({
      fontSize: this.state.fontSize + 1
    })
  }
  render(props) {
    //console.log({props, "this.props": this.props})

    return (
        <React.Fragment>
          <Icon name='minus'/>
          <Icon onClick={this.clear} name='redo'/>
          <Icon onClick={this.increaseFont} name='plus'/>
          <Icon.Group size='huge'
            onClick={this.props.onClick}>
            <Icon name='user' />
            <Icon corner name='play' />
          </Icon.Group>
          <Form>
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
          </Form>
        </React.Fragment>
    )
  }
}