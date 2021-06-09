import React, { Component } from "react";
import formLabel from "./form-label";
import FormSection from "./FormSection";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import WorkExp from "./WorkExp";

import "../styles/Section.css";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      display: "block",
    };
  }

  handleSubmit = (formSubmission) => {
    this.setState({
      dataArray: this.state.dataArray.concat(formSubmission),
    });
    if (this.props.section === "Personal Information") {
      this.setState({
        display: "none",
      });
    }
  };

  deleteElement = (id) => {
    const index = this.state.dataArray.findIndex((el) => el.id === id);
    let tempArr = [...this.state.dataArray];
    tempArr.splice(index,1);
    this.setState({
      dataArray: tempArr,
    });
  };

  editElement = (obj, nam, oldVal, newVal) => {
    let tempArr = [...this.state.dataArray];
    const index = tempArr.findIndex(el => el.obj===obj);
    tempArr[index].obj[nam]= newVal;
    console.log("oldVal,",oldVal,"newVal,", newVal, tempArr);
    this.setState({
      dataArray: tempArr,
    })
  }

  render() {
    const section = formLabel[this.props.section];
    const sectionToRender = (str) => {
      const choice = {
        "Personal Information": (
          <PersonalInfo data={this.state.dataArray} del={this.deleteElement} edit={this.editElement} />
        ),
        "Work Experience": (
          <WorkExp data={this.state.dataArray} del={this.deleteElement} edit={this.editElement} />
        ),
        Education: (
          <Education data={this.state.dataArray} del={this.deleteElement} edit={this.editElement} />
        ),
      };
      
      return choice[str];
    };
    return (
      <section>
        <p className="section-title">{section.title}</p>
        {sectionToRender(this.props.section)}
        <FormSection section={section} onSubmit={this.handleSubmit} />
      </section>
    );
  }
}

export default Section;
