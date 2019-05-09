import React from "react";
import { Dropdown } from "semantic-ui-react";
const languageOptions = [
  {
    key: "English",
    text: "English",
    value: "English",
  },
  {
    key: "Spanish",
    text: "Spanish",
    value: "Spanish",
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
const voiceOptions = [
  {
    key: "Jessica",
    text: "Jessica",
    value: "Jessica",
  },
  {
    key: "Spanish",
    text: "Spanish",
    value: "Spanish",
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
const DropdownExampleOpenOnFocus = () => (
  <React.Fragment>
    <div class="dropdown-container">
      <Dropdown
        placeholder="Languages"
        openOnFocus
        selection
        options={languageOptions}
      />{" "}
      <Dropdown
        placeholder="Voice"
        openOnFocus={false}
        selection
        options={voiceOptions}
      />
    </div>
  </React.Fragment>
);
export default DropdownExampleOpenOnFocus;


