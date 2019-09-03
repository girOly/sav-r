import React from "react";

export default function Uploader(props) {
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
          action="http://localhost:3005/image-upload"
          method="POST"
          enctype="multipart/form-data"
        >
          Image: <input type="file" name="image" multiple />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
