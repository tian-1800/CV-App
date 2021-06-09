import React, { Component } from "react";
import EditableContent from "./EditableContent";

import "../styles/PersonalInfo.css";

class PersonalInfo extends Component {
  handleDel = (e) => {
    const id = e.target.id;
    this.props.del(id);
  };
  handleEdit = (obj, nam, oldval, newVal) => {
    this.props.edit(obj, nam, oldval, newVal);
  };

  render() {
    const data = this.props.data;
    return data.map((el) => {
      return (
        <div id="personal-section">
          <div id="displayed-full-name">
            <EditableContent
              name="First Name"
              obj={el.obj}
              edit={this.handleEdit}
            />
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
  }
}

export default PersonalInfo;
