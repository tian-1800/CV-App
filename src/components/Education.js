import React from "react";
import EditableContent from "./EditableContent";

import "../styles/Edu-Exp.css";

const Education = (props) => {
  
  const handleDel = (e) => {
    const id = e.target.id;
    props.del(id);
  };
  const handleEdit = (obj, nam, oldval, newVal) => {
    props.edit(obj, nam, oldval, newVal);
  };

  const data = props.data;

  return data.map((el) => {
    return (
      <div className="edu-container">
        <div className="edu-duration">
          <EditableContent
            name="Starting Year"
            obj={el.obj}
            edit={handleEdit}
          />
          <span> - </span>
          <EditableContent name="End Year" obj={el.obj} edit={handleEdit} />
        </div>
        <div className="edu-sub-container">
          <div className="edu-university">
            <EditableContent name="University" obj={el.obj} edit={handleEdit} />
            <span>, </span>
            <EditableContent name="City" obj={el.obj} edit={handleEdit} />
          </div>
          <span class="edu-major">
            <EditableContent name="Major" obj={el.obj} edit={handleEdit} />
          </span>
        </div>
        <div className="delete-buttons">
          <i
            id={el.id}
            className="material-icons delete-icons"
            onClick={handleDel}
          >
            close
          </i>
        </div>
      </div>
    );
  });
};
export default Education;
