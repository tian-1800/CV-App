import React, { useState } from "react";
import "../styles/EditableContent.css";

const EditableContent = (props) => {
  const [tempValue, setTempValue] = useState(props.obj[props.name]);
  const [textDisplay, setTextDisplay] = useState("inline");
  const [inputDisplay, setInputDisplay] = useState("none");

  const handleEdit = () => {
    setTextDisplay("none");
    setInputDisplay("inline");
  };
  const handleChange = (e) => {
    setTempValue(e.target.value);
  };
  const handleBlur = () => {
    setTextDisplay("inline");
    setInputDisplay("none");
  };
  const handleDone = () => {
    handleBlur();
    const [oldVal, newVal] = [
      props.obj[props.name],
      tempValue,
    ];
    props.edit(props.obj, props.name, oldVal, newVal);
  };

  let value = props.obj[props.name],
    type = "text",
    iDisplay = inputDisplay,
    tDisplay = textDisplay;
  return (
    <span className="editable-content">
      <span
        style={{ display: tDisplay }}
        onClick={handleEdit}
        onBlur={handleBlur}
      >
        {value}
      </span>
      <div className="hiding-input" style={{ display: iDisplay }}>
        <input
          defaultValue={value}
          type={type}
          onChange={handleChange}
          required
        ></input>
        <i className="material-icons" onClick={handleDone}>
          done
        </i>
      </div>
    </span>
  );
};

export default EditableContent;
