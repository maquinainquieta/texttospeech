import React, { Component } from 'react';
import { ButtonGroup, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';


export default class TopButtons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
            showDropdown1: false
        };
    }


    render = () => {
        return <div>
            <ButtonGroup>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ showDropdown1: !this.state.showDropdown1 })}>
                <DropdownToggle caret>
                Language
                </DropdownToggle>
                <DropdownMenu className={this.state.showDropdown1 ? "show" : ""}>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ showDropdown2: !this.state.showDropdown2 })}>
            <DropdownToggle caret>
            Voice
            </DropdownToggle>
            <DropdownMenu className={this.state.showDropdown2 ? "show" : ""}>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Dropdown Link</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>

            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ showDropdown3: !this.state.showDropdown3 })}>
                <DropdownToggle caret>
                Speed
                </DropdownToggle>
                <DropdownMenu className={this.state.showDropdown3 ? "show" : ""}>
                <DropdownItem>Dropdown Link</DropdownItem>
                <DropdownItem>Dropdown Link</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            </ButtonGroup>
        </div>
    }
}