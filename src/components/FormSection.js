import React, { useState } from "react";
import uniqid from "uniqid";

import "../styles/FormSection.css";

const FormSection = (props) => {
  const [obj, setObj] = useState({});
  const [id, setId] = useState(uniqid());
  const [displayed, setDisplayed] = useState(true);

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setObj({ ...obj, ...{ [nam]: val } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.onSubmit({ obj, id });
    if (props.section.title === "PERSONAL INFORMATION") {
      setDisplayed(false);
    }
    setId(uniqid());
  };

  if (props.mode !== "form" || !displayed) {
    return null;
  }

  const section = props.section;
  console.log("mode is " + props.mode);
  return (
    <form onSubmit={handleSubmit}>
      {section.data.map((data) => {
        return (
          <div className="input-line-container">
            <label>{data.label}</label>
            <span>: </span>
            <input
              type={data.type}
              name={data.label}
              onBlur={handleChange}
              placeholder={data.placeholder}
              required
            ></input>
          </div>
        );
      })}
      <button type="submit">Add</button>
    </form>
  );
};

export default FormSection;
