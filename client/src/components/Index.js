import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Index(props) {
  return (
    <div>
      <Link to="/">MENU</Link>
      <h1>Savr</h1>

      <h2> User's Budget</h2>
      <h3> Income </h3>
      <h4> Budget- Income </h4>
      <h3> Expenses </h3>
      <h4> Budget - Expenses Sum </h4>
      <Link to="/overview">Overview</Link>

      <h4> Category </h4>
      <ul>
        <li> Expense 1</li>
        <li> Expense 2</li>
        <li> Expense 3</li>
        <li> Expense 4</li>
        <li> Expense 5</li>
        <li> Expense 6</li>
      </ul>
    </div>
  );
}
