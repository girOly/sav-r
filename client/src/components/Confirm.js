import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Confirm(props) {
  return (
    <div>
      <h1>Confirm Component</h1>
      <form>
        user comments
        <input type="text" name="comments" />
        <button type="submit">Submit</button>
      </form>
      <button>TAKE ME TO EDIT</button>
    </div>
  );
}
