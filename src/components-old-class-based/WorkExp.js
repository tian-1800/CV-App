import React, { Component } from "react";
import EditableContent from "./EditableContent";

import "../styles/Edu-Exp.css";

class WorkExp extends Component {
  
  handleDel = (e) => {
    const id = e.target.id;
    this.props.del(id);
  };
  handleEdit = (obj, nam, oldval, newVal) => {
    this.props.edit(obj, nam, oldval, newVal);
  };

  render() {
    const data = this.props.data;
    console.log("work");
    return data.map((el) => {
      return (
        <div className="exp-container">
          <div className="exp-duration">
            <EditableContent
              name="Starting Year"
              obj={el.obj}
              edit={this.handleEdit}
            />
            <span> - </span>
            <EditableContent
              name="End Year"
              obj={el.obj}
              edit={this.handleEdit}
            />
          </div>
          <div className="exp-sub-container">
            <div className="exp-company">
              <EditableContent
                name="Company Name"
                obj={el.obj}
                edit={this.handleEdit}
              />
              <span>, </span>
              <EditableContent
                name="City"
                obj={el.obj}
                edit={this.handleEdit}
              />
            </div>
            <span class="exp-role"><EditableContent name="Role" obj={el.obj} edit={this.handleEdit} /></span>
          </div>
          <div className="delete-buttons">
            <i
              id={el.id}
              className="material-icons delete-icons"
              onClick={this.handleDel}
            >
              close
            </i>
          </div>
        </div>
      );
    });
  }
}

export default WorkExp;
