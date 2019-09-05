import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Confirm(props) {
  const [comment, setComment] = useState("");

  return (
    <div>
      <h1>Confirm Component</h1>
      <form onSubmit={event => event.preventDefault()}>
        user comments
        <input
          onChange={event => setComment(event.target.value)}
          type="text"
          name="comments"
        />
        category
        <input type="text" name="category" />
        <button type="submit">Submit</button>
      </form>
      <button>TAKE ME TO EDIT</button>
    </div>
  );
}
