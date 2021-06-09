import React, { Component } from "react";
import EditableContent from "./EditableContent";

import "../styles/Edu-Exp.css";

class Education extends Component {
  handleDel = (e) => {
    const id = e.target.id;
    this.props.del(id);
  };
  handleEdit = (obj, nam, oldval, newVal) => {
    this.props.edit(obj, nam, oldval, newVal);
  };

  render() {
    const data = this.props.data;
    console.log(data);
    return data.map((el) => {
      return (
        <div className="edu-container">
          <div className="edu-duration">
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
          <div className="edu-sub-container">
            <div className="edu-university">
              <EditableContent
                name="University"
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
            <span class="edu-major">
              <EditableContent
                name="Major"
                obj={el.obj}
                edit={this.handleEdit}
              />
            </span>
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

export default Education;
