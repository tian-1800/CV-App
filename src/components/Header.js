import React, { useState } from "react";

import "../styles/Header.css";

const Header = (props) => {
  const [button, setButton] = useState("Preview");

  const handleClick = () => {
    props.toggle();
    button === "Preview" ? setButton("Form Input") : setButton("Preview");
  };
  return (
    <header>
      <p id="header-text">CV Builder App</p>
      <p id="header-description">
        (To edit just click on the specific entry that you would like to edit)
      </p>
      <button onClick={handleClick}>{button}</button>
    </header>
  );
};

export default Header;
