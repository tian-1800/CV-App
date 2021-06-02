import React, { Component } from "react";
import formLabel from "./form-label";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";

class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: {},
      inputObj: {},
      inputArray: [],
      display: "block",
    };
  }

  handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    this.setState({
        inputField: { [nam]: val },
        inputObj: {...this.state.inputObj,...{[nam]: val}}
    });
    console.log(this.state.inputField);
    console.log(this.state.inputObj);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      inputArray: this.state.inputArray.concat(this.state.inputObj),
    });
    if (this.props.title === "Personal Information") {
        this.setState({
            display: "none",
        })
    }
  };

  render() {
    const section = formLabel[this.props.title];
    const compToDisplay = (title) => {
      const comp = {
        "Personal Information": <PersonalInfo data={this.state.inputArray}/>,
        "Work Experiences": <WorkExp data={this.state.inputArray}/>,
        Education: <Education data={this.state.inputArray}/>,
      };
      return comp[title];
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{section.title}</p>
        {compToDisplay(this.props.title)}
        <div style={{display: this.state.display}}>{section.data.map((data) => {
          return (
            <div>
              <label>{data.label}: </label>
              <input
                type={data.type}
                name={data.label}
                onChange={this.handleChange}
                placeholder={data.placeholder}
                required
              ></input>
            </div>
          );
        })}
        <button type="submit">Add</button></div>
      </form>
    );
  }
}

export default FormSection;
