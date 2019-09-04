import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Overview(props) {
  return (
    <div>
      <Link to="/">MENU</Link>
      <h1>Overview</h1>
    </div>
  );
}
