import React, { useState, createRef } from "react";

import "../styles/PhotoHolder.css";
import photo from "../img/avatar.png";

const PhotoHolder = (props) => {
  const fileUpload = createRef();
  const [uploadedPhoto, setUploadedPhoto] = useState([photo]);

  const showFileUpload = () => {
    fileUpload.current.click();
  };
  const uploadPhoto = (e) => {
    if (e.target.files.length === 0) return;
    e.preventDefault();
    const file = e.target.files[0];
    setUploadedPhoto(URL.createObjectURL(file));
  };

  if (!props.displayed) return null;
  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg"
        ref={fileUpload}
        style={{ display: "none" }}
        onChange={uploadPhoto}
      />
      <input
        type="image"
        id="photo-input"
        src={uploadedPhoto}
        alt="photo image"
        onClick={showFileUpload}
      />
    </div>
  );
};
export default PhotoHolder;
