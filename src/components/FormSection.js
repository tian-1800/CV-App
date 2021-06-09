import React, { Component } from "react";
import uniqid from "uniqid";

import "../styles/FormSection.css";

export default class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputObj: {
        obj: {},
        id: uniqid(),
      },
      display: "block",
    };
  }

  handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    this.setState({
      inputObj: {
        obj: { ...this.state.inputObj.obj, ...{ [nam]: val } },
        id: this.state.inputObj.id,
      },
      display: "block",
    });
    //console.log(this.state.inputObj.obj);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.onSubmit(this.state.inputObj);
    console.log(this.props.section);
    if (this.props.section.title === "PERSONAL INFORMATION") {
      this.setState({
        display: "none",
      });
    }
    this.setState({
      inputObj: { id: uniqid() },
    });
  };

  render() {
    const section = this.props.section;
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={{ display: this.state.display }}>
          {section.data.map((data) => {
            return (
              <div className="input-line-container">
                <label>{data.label}</label>
                <span>: </span>
                <input
                  type={data.type}
                  name={data.label}
                  onBlur={this.handleChange}
                  placeholder={data.placeholder}
                  required
                ></input>
              </div>
            );
          })}
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}
