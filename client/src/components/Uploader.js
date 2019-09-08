import React, { useState } from "react";
import axios from "axios";
import "./Uploader.css";
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
        console.log("axios response", response.data);
        props.userConfirm(response.data.image_url, response.data.total);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="uploadInput-group">
      <div className="uploadTitle">
        <h1>Upload your receipt!</h1>
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
          <input
            className="uploadSubmit"
            onClick={uploadFile}
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}
