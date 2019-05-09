import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';


export default class TextArea extends Component {
  render() {
    return (
        <React.Fragment>
          <Icon name='minus'/>
          <Icon name='redo'/>
          <Icon name='plus'/>
          
          <Icon.Group>
          <Icon name='user' />
          <Icon corner='bottom' name='play' />
          </Icon.Group>
        </React.Fragment>
        
    )
  }
}