import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

import "./App.css";

const App = () => {
  const [mode, setMode] = useState("form");

  const toggleMode = () => {
    mode === "form" ? setMode("preview") : setMode("form");
  };

  return (
    <div className="App">
      <Header toggle={toggleMode} />
      <main id="user-form-tab">
        <Section section="Personal Information" mode={mode} />
        <Section section="Work Experience" mode={mode} />
        <Section section="Education" mode={mode} />
      </main>
    </div>
  );
};

export default App;
