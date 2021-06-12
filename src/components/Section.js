import React, { useState } from "react";
import formLabel from "./form-label";
import FormSection from "./FormSection";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";

import "../styles/Section.css";

const Section = (props) => {
  const [dataArray, setDataArray] = useState([]);

  const handleSubmit = (formSubmission) => {
    setDataArray(dataArray.concat(formSubmission));
  };

  const deleteElement = (id) => {
    const index = dataArray.findIndex((el) => el.id === id);
    let tempArr = [...dataArray];
    tempArr.splice(index, 1);
    setDataArray(tempArr);
  };

  const editElement = (obj, nam, oldVal, newVal) => {
    let tempArr = [...dataArray];
    const index = tempArr.findIndex((el) => el.obj === obj);
    tempArr[index].obj[nam] = newVal;
    console.log("oldVal,", oldVal, "newVal,", newVal, tempArr);
    setDataArray(tempArr);
  };

  const section = formLabel[props.section];
  const sectionToRender = (str) => {
    const choice = {
      "Personal Information": (
        <PersonalInfo data={dataArray} del={deleteElement} edit={editElement} />
      ),
      "Work Experience": (
        <WorkExp data={dataArray} del={deleteElement} edit={editElement} />
      ),
      Education: (
        <Education data={dataArray} del={deleteElement} edit={editElement} />
      ),
    };
    return choice[str];
  };

  return (
    <section>
      <p className="section-title">{section.title}</p>
      {sectionToRender(props.section)}
      <FormSection
        section={section}
        onSubmit={handleSubmit}
        mode={props.mode}
      />
    </section>
  );
};

export default Section;
