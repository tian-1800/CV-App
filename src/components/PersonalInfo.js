import React from "react";
import PhotoHolder from "./PhotoHolder";
import EditableContent from "./EditableContent";

import "../styles/PersonalInfo.css";

const PersonalInfo = (props) => {
  const handleEdit = (obj, nam, oldval, newVal) => {
    props.edit(obj, nam, oldval, newVal);
  };

  return (
    <div id="personal-container">
      {props.data.map((el) => {
        return (
          <div id="personal-section">
            <div id="displayed-full-name">
              <EditableContent
                name="First Name"
                obj={el.obj}
                edit={handleEdit}
              />
              <span> </span>
              <EditableContent
                name="Last Name"
                obj={el.obj}
                edit={handleEdit}
              />
            </div>
            <div id="displayed-address">
              <p>Address</p>
              <EditableContent name="Address" obj={el.obj} edit={handleEdit} />
            </div>
            <div id="displayed-phone">
              {" "}
              <p>Phone</p>
              <EditableContent
                name="Phone Number"
                obj={el.obj}
                edit={handleEdit}
              />
            </div>
            <div id="displayed-email">
              <p>Email</p>
              <EditableContent name="Email" obj={el.obj} edit={handleEdit} />
            </div>
          </div>
        );
      })}
      <PhotoHolder displayed={props.data.length === 1} />
    </div>
  );
};

export default PersonalInfo;
