import React, { Component } from 'react';
import { Icon, Form, TextArea } from 'semantic-ui-react';


export default class TextAreaWithIcons extends Component {
  render(props) {
    return (
        <React.Fragment>
          <Icon name='minus'/>
          <Icon name='redo'/>
          <Icon name='plus'/>
          <Icon.Group size='huge'>
            <Icon name='user' />
            <Icon corner name='play' />
          </Icon.Group>
          <Form>
            <TextArea rows={15} placeholder="Write it and I'll say it out loud..." onChange={props.onChange}/>
          </Form>
        </React.Fragment>
    )
  }
}