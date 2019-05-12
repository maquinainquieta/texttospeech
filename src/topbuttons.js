import React from "react";
import { Dropdown } from "semantic-ui-react";

//For the Dropdown we used Open on Focus from semantic-ui-react.
//All the language/accent options 
const languageOptions = [
  {text: "Catalan", value: "ca-es", flag: 'es'},
  {text: "Chinese (China)", value: "zh-cn", flag: 'cn'},
  {text: "Chinese (Hong Kong)", value: "zh-hk", flag: 'hk'},
  {text: "Chinese (Taiwan)", value: "zh-tw", flag: 'tw'},
  {text: "Danish", value: "da-dk", flag: 'dk'},
  {text: "Dutch", value: "nl-nl", flag: 'nl'},
  {text: "English (Australia)", value: "en-au", flag: 'au'},
  {text: "English (Canada)", value: "en-ca", flag: 'ca'},
  {text: "English (Great Britain)", value: "en-gb", flag: 'gb'},
  {text: "English (India)", value: "en-in", flag: 'in'},
  {text: "English (United States)", value: "en-us", flag: 'us'},
  {text: "Finnish", value: "fi-fi", flag: 'fi'},
  {text: "French (Canada)", value: "fr-ca", flag: 'ca'},
  {text: "French (France)", value: "fr-fr", flag: 'fr'},
  {text: "German", value: "de-de", flag: 'de'},
  {text: "Italian", value: "it-it", flag: 'it'},
  {text: "Japanese", value: "ja-jp", flag: 'jp'},
  {text: "Korean", value: "ko-kr", flag: 'kr'},
  {text: "Norwegian", value: "nb-no", flag: 'no'},
  {text: "Polish", value: "pl-pl", flag: 'pl'},
  {text: "Portuguese (Brazil)", value: "pt-br", flag: 'br'},
  {text: "Portuguese (Portugal)", value: "pt-pt", flag: 'pt'},
  {text: "Russian", value: "ru-ru", flag: 'ru'},
  {text: "Spanish (Mexico)", value: "es-mx", flag: 'mx'},
  {text: "Spanish (Spain)", value: "es-es", flag: 'es'},
  {text: "Swedish (Sweden)", value: "sv-se", flag: 'se'},
];

//Speed Options to select can be any number from -10 to 10
const speedOptions = [
  {text: "Fastest", value: "9",},
  {text: "Faster", value: "6",},
  {text: "Fast", value: "3",},
  {text: "Normal", value: "0",},
  {text: "Slow", value: "-3",},
  {text: "Slower", value: "-6",},
  {text: "Slowest", value: "-9",},
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
              floating
              search
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


