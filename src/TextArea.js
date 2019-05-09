import React, { Component } from 'react';
import {Input, Form} from 'reactstrap';

export default class TextArea extends Component {
  render() {
    return (
      <Form className='textArea'>
        <i class="fas fa-minus" className="iconsFont"></i>
        <i class="fas fa-redo" className="iconsFont"></i>
        <i class="fas fa-plus" className="iconsFont"></i>
        <Input type="textarea" name="text" rows= "8" id="exampleText"/>

      </Form>
    )
  }
}