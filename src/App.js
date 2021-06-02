import React, { Component } from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main id="main">
          <FormSection title="Personal Information" />
          <FormSection title="Work Experiences" />
          <FormSection title="Education" />
        </main>
      </div>
    );
  }
}

export default App;
