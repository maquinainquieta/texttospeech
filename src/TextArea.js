import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';


export default class TextArea extends Component {
  render() {
    return (
        <React.Fragment>
          <Icon name='minus'/>
          <Icon name='redo'/>
          <Icon name='plus'/>
          <Icon.Group size='huge'>
          <Icon name='user' />
          <Icon corner='bottom' name='plus' />
          </Icon.Group>
        </React.Fragment>
        
    )
  }
}