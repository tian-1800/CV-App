import React, { Component } from "react";
import PhotoHolder from "./PhotoHolder";
import EditableContent from "./EditableContent";

import "../styles/PersonalInfo.css";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { photoDisplay: "none" };
  }
  handleDel = (e) => {
    const id = e.target.id;
    this.props.del(id);
  };
  handleEdit = (obj, nam, oldval, newVal) => {
    this.props.edit(obj, nam, oldval, newVal);
  };

  mainRender = (data) => {
    return data.map((el) => {
      return (
        <div id="personal-section">
          <div id="displayed-full-name">
            <EditableContent
              name="First Name"
              obj={el.obj}
              edit={this.handleEdit}
            /><span> </span>
            <EditableContent
              name="Last Name"
              obj={el.obj}
              edit={this.handleEdit}
            />
          </div>
          <div id="displayed-address">
            <p>Address</p>
            <EditableContent
              name="Address"
              obj={el.obj}
              edit={this.handleEdit}
            />
          </div>
          <div id="displayed-phone">
            {" "}
            <p>Phone</p>
            <EditableContent
              name="Phone Number"
              obj={el.obj}
              edit={this.handleEdit}
            />
          </div>
          <div id="displayed-email">
            <p>Email</p>
            <EditableContent name="Email" obj={el.obj} edit={this.handleEdit} />
          </div>
        </div>
      );
    });
  };
  toggleDisplay = () => {
    let result;
    this.props.data.length === 1 ? result = "block": result = "none";
    console.log(result);
    return result;
  }
  render() {
    return (
      <div id="personal-container">
        {this.mainRender(this.props.data)}
        <div style={{ display: this.toggleDisplay() }}>
          <PhotoHolder />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
