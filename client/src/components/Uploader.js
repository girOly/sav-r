import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormData from "form-data";

export default function Uploader(props) {
  const [file, setFile] = useState("");
  console.log(file);

  const uploadFile = () => {
    let formData = new FormData();
    formData.append("image", file);
    axios
      .post("/api/image-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data;"
        }
      })
      .then(response => {
        console.log(file);
        console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="input-group">
      <h1>Uploader Component</h1>
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
        </span>
      </div>
      <div className="custom-file">
        <form
          onSubmit={event => event.preventDefault()}
          enctype="multipart/form-data"
        >
          Image:{" "}
          <input
            onChange={event => setFile(event.target.files[0])}
            type="file"
            name="image"
            multiple
          />
          <br />
          <input onClick={uploadFile} type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
