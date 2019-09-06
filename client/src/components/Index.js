import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Index.scss";

export default function Index(props) {
  const userID = localStorage.id;
  console.log("index userID", userID);
  console.log("index props", props);
  const budget = props.budget[0];
  console.log("index budget", budget);

  const centsToDollars = cents => {
    const makeDollars = cents / 100;
    return makeDollars.toLocaleString("en-US", {
      style: "currency",
      currency: "CAD"
    });
  };

  const categorySpending = expenseObject => {};
  return (
    <div>
      <Link to="/">MENU</Link>
      <h1>Savr</h1>

      <h2> {budget.id} Budget</h2>
      <h3> Income </h3>
      <h4> {centsToDollars(budget.income)}</h4>
      <h3> Expenses </h3>
      <h4> Budget - Expenses Sum </h4>
      <Link to="/overview">Overview</Link>

      <h4> Category </h4>
      <ul></ul>
    </div>
  );
}
