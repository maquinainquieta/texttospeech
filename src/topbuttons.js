import React from "react";
import { Dropdown } from "semantic-ui-react";

//All the language/accent options 
const languageOptions = [
  {key: "ca-es", text: "Catalan", value: "ca-es",},
  {
    key: "zh-cn",
    text: "Chinese (China)",
    value: "zh-cn",
  },
  {
    key: "French",
    text: "French",
    value: "French",
  },
  {
    key: "Russian",
    text: "Russian",
    value: "Russian",
  }
];

//Speed Options to select
const speedOptions = [
  {key: "9", text: "Fastest", value: "9",},
  {
    key: "6",
    text: "Faster",
    value: "6",
  },
  {
    key: "3",
    text: "Fast",
    value: "3",
  },
  {
    key: "0",
    text: "Normal",
    value: "0",
  },
  {
    key: "-3",
    text: "Slow",
    value: "-3",
  },
  {
    key: "-6",
    text: "Slower",
    value: "-6",
  },
  {
    key: "-9",
    text: "Slowest",
    value: "-9",
  },
];

class DropdownExampleOpenOnFocus extends React.Component {
  render () { 
      return (
        <React.Fragment>
          <div class="dropdown-container">
            <Dropdown
              placeholder="Languages"
              openOnFocus
              selection
              options={languageOptions}
              onChange={this.props.onLanguageChange}
            />{" "}
            <Dropdown
              placeholder="Speed"
              openOnFocus={false}
              selection
              options={speedOptions}
              onChange={this.props.onSpeedChange}
            />{" "}
          </div>
        </React.Fragment>
      );
    }
};
export default DropdownExampleOpenOnFocus;


