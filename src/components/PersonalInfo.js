import React, { Component } from "react";

class PersonalInfo extends Component {
  render() {
    const data = this.props.data;
    return data.map((el) => {
      return (
        <div id="personal-section">
          <p id="displayed-full-name">{el["First Name"]} {el["Last Name"]}</p>
          <p id="displayed-address">Address: {el["Address"]}</p>
          <p id="displayed-phone"> Phone: {el["Phone Number"]}</p>
          <p id="displayed-email">Email: {el["Email"]}</p>
        </div>
      );
    });
  }
}

export default PersonalInfo;
