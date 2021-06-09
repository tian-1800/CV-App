import React, { Component } from "react";
import "../styles/EditableContent.css";

class EditableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: this.props.obj[this.props.name],
      textDisplay: "inline",
      inputDisplay: "none",
    };
  }
  handleEdit = (e) => {
    this.setState({
      textDisplay: "none",
      inputDisplay: "inline",
    });
  };
  handleChange = (e) => {
    this.setState({ tempValue: e.target.value });
  };
  handleDone = () => {
    this.setState({
      textDisplay: "inline",
      inputDisplay: "none",
    });
    const [oldVal, newVal] = [
      this.props.obj[this.props.name],
      this.state.tempValue,
    ];
    this.props.edit(this.props.obj, this.props.name, oldVal, newVal);
  };
  render() {
    let value = this.props.obj[this.props.name],
      type = "text",
      iDisplay = this.state.inputDisplay,
      tDisplay = this.state.textDisplay;
    return (
      <span className="editable-content">
        <span style={{ display: tDisplay }}>
          {value}{" "}
          <i
            className="material-icons appearing-icons"
            onClick={this.handleEdit}
          >
            edit
          </i>
        </span>
        <div className="hiding-input" style={{ display: iDisplay }}>
          <input
            defaultValue={value}
            type={type}
            onChange={this.handleChange}
            required
          ></input>
          <i className="material-icons" onClick={this.handleDone}>
            done
          </i>
        </div>
      </span>
    );
  }
}

export default EditableContent;
