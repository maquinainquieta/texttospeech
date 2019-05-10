import React from "react";
import { Dropdown } from "semantic-ui-react";


const languageOptions = [
  {
    key: "ca-es",
    text: "Catalan",
    value: "ca-es",
  },
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
          </div>
        </React.Fragment>
      );
    }
};
export default DropdownExampleOpenOnFocus;


