import React, { Component } from "react";
import './MenuButton.css';

class MenuButton extends Component {
  render() {
    return (
      <button id="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
 
export default MenuButton;

/* we associate the onMouseDown event with a prop we are referencing as handleMouseDown */

