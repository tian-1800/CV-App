import React, { Component } from "react";

import "../styles/Header.css";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: "Preview",
    };
  }
  handleClick = () => {
    this.props.toggle();
    this.state.button === "Preview"
      ? this.setState({ button: "Form Input" })
      : this.setState({ button: "Preview" });
  };
  render() {
    return (
      <header>
        <p id="header-text">CV Builder App</p>
        <p id="header-description">
          (To edit just click on the specific entry that you would like to edit. To delete click the cross sign)
        </p>
        <button onClick={this.handleClick}>{this.state.button}</button>
      </header>
    );
  }
}

export default Header;
