import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Uploader(props) {
  const [file, setFile] = useState({});
  console.log(file);

  const uploadFile = () => {
    console.log("file: ", file);
    // console.log("email: ", email);
    // console.log("password: ", password);

    return axios
      .post("http://localhost:3005/api/image-upload", {
        file
      })
      .then(response => {
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
          // action="http://localhost:3005/api/image-upload"
          // method="POST"
          enctype="multipart/form-data"
        >
          Image:{" "}
          <input
            onChange={event => setFile(event.target.value)}
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
