import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">      
        <Header />
        <main id="user-form-tab">
          <Section
            section="Personal Information"
            />
          <Section
            section="Work Experience"
            />
          <Section section="Education" />
        </main>
      </div>
    );
  }
}

export default App;
