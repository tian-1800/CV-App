import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "form",
    };
  }
  toggleMode = () => {
    this.state.mode === "form"
      ? this.setState({ mode: "preview" })
      : this.setState({ mode: "form" });
  };
  render() {
    return (
      <div className="App">
        <Header toggle={this.toggleMode} />
        <main id="user-form-tab">
          <Section section="Personal Information" mode={this.state.mode}/>
          <Section section="Work Experience" mode={this.state.mode} />
          <Section section="Education" mode={this.state.mode} />
        </main>
      </div>
    );
  }
}

export default App;
