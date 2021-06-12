import React from "react";
import EditableContent from "./EditableContent";

import "../styles/Edu-Exp.css";

const WorkExp = (props) => {
  
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
      <div className="exp-container">
        <div className="exp-duration">
          <EditableContent
            name="Starting Year"
            obj={el.obj}
            edit={handleEdit}
          />
          <span> - </span>
          <EditableContent name="End Year" obj={el.obj} edit={handleEdit} />
        </div>
        <div className="exp-sub-container">
          <div className="exp-company">
            <EditableContent
              name="Company Name"
              obj={el.obj}
              edit={handleEdit}
            />
            <span>, </span>
            <EditableContent name="City" obj={el.obj} edit={handleEdit} />
          </div>
          <span class="exp-role">
            <EditableContent name="Role" obj={el.obj} edit={handleEdit} />
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

export default WorkExp;
