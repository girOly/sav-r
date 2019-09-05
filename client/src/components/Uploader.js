import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormData from "form-data";

export default function Uploader(props) {
  const [file, setFile] = useState("");
  console.log(file);

  const uploadFile = () => {
    let formdata = new FormData();
    console.log("file: ", file);
    // console.log("email: ", email);
    // console.log("password: ", password);
    formdata.append("image", file);
    axios
      .post(
        "/api/image-upload",
        { test: "123" },
        {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": "multipart/form-data;"
          }
        }
      )
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
