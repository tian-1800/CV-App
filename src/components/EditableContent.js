import React, { Component } from "react";
import InputContent from "./InputContent";

class EditableContent extends Component {
  constructor(props) {
    super(props);
    this.state= {
      value: this.props.text,
      textDisplay: "block",
      inputDisplay: "none"
    }
  }
  render() {
    return (
      <div className="editable-content">
        <p style={{display: this.state.textDisplay}}>{this.props.text}</p>
        <InputContent value={this.state.value} type={this.props.type} display={this.state.inputDisplay} />
        <i className="material-icons appearing-icons" onClick={this.handleEdit}>edit</i>
      </div>
    );
  }
}

export default EditableContent;
