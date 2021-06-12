import React, { Component, createRef } from "react";

import "../styles/PhotoHolder.css";
import photo from "../img/avatar.png";

export default class PhotoHolder extends Component {
  constructor(props) {
    super(props);
    this.fileUpload = createRef();
    this.state = { uploadedPhoto: [photo] };
  }
  showFileUpload = () => {
    this.fileUpload.current.click();
  };
  uploadPhoto = (e) => {
    if(e.target.files.length === 0) return;
      e.preventDefault();
      const file = e.target.files[0];
      this.setState({uploadedPhoto: URL.createObjectURL(file)});
  }
  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={this.fileUpload}
          style={{ display: "none" }}
          onChange={this.uploadPhoto}
        />
        <input
          type="image"
          id="photo-input"
          src={this.state.uploadedPhoto}
          alt="photo image"
          onClick={this.showFileUpload}
        />
      </div>
    );
  }
}
