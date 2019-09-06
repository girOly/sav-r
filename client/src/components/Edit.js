import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Edit(props) {
  const [total, setTotal] = useState(0);
  const [comment, setComment] = useState("");
  // console.log(total);

  return (
    <div>
      <h1>Edit Component</h1>
      <form onSubmit={event => event.preventDefault()}>
        category
        <input type="text" name="category" />
        total
        <input
          type="number"
          name="total_cents"
          onChange={event => setTotal(event.target.value)}
        />
        user comments
        <input
          type="text"
          name="comments"
          onChange={event => setComment(event.target.value)}
        />
        <button type="submit">to the DB boys</button>
      </form>
    </div>
  );
}
