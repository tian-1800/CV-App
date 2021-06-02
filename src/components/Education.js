import React, { Component } from "react";

class Education extends Component {
  render() {
    const data = this.props.data;
    return data.map((el) => {
      return (
        <div className="edu-container">
          <p className="edu-duration">
            {el["Starting Year"]} - {el["End Year"]}
          </p>
          <p className="edu-university">
            {el["University"]}, {el["City"]}
          </p>
          <p className="edu-major">{el["Major"]}</p>
        </div>
      );
    });
  }
}

export default Education;
