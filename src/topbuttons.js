import React, { Component } from 'react';
import { ButtonGroup, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';


export default class TopButtons extends Component {

    constructor(props) {
        super(props)
        this.state = {};
    }

    render = () => {
        return <div>
            <ButtonGroup>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                Language
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
            Voice
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Dropdown Link</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                Speed
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            </ButtonGroup>
        </div>
    }
}