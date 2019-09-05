import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Edit(props) {
  return (
    <div>
      <h1>Edit Component</h1>
      <form>
        category
        <input type="text" name="category" />
        total
        <input type="text" name="total_cents" />
        user comments
        <input type="text" name="comments" />
        <button type="submit">to the DB boys</button>
      </form>
    </div>
  );
}
