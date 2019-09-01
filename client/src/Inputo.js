import React, { Component } from "react";

class Inputo extends Component {
  render() {
    return (
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
        </div>
        <div class="custom-file">
          <form method="post" action="http://localhost:3005/image-upload">
            <input
              type="file"
              class="custom-file-input"
              id="image"
              name="image"
              value="image"
              aria-describedby="inputGroupFileAddon01"
            />
            <label class="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
            <button
              name="image"
              value="image"
              type="submit"
              class="btn btn-primary"
            >
              Primary
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Inputo;
