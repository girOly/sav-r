import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Index.css";

export default function Index(props) {
  const userID = localStorage.id;
  console.log("index userID", userID);
  console.log("index props", props);
  const budget = props.budget[0];
  console.log("index budget", budget);
  const [expenses, setExpenses] = useState(props.expenses);
  console.log("index expenses", expenses);

  /// props of expenses, budget

  const centsToDollars = cents => {
    const makeDollars = cents / 100;
    return makeDollars.toLocaleString("en-US", {
      style: "currency",
      currency: "CAD"
    });
  };

  const totalSpending = expenseArray => {
    let total = 0;
    for (let expense in expenseArray) {
      total += expenseArray[expense];
    }
    return total;
  };

  const categorySpending = Object.keys(expenses).map(key => (
    <li>
      {key}: {centsToDollars(expenses[key])}
    </li>
  ));
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css?family=Montserrat:400,900i|Teko&display=swap');
      </style>

      <Link to="/">MENU</Link>
      <h1 className="savrLogo">Sav-r</h1>
      <div className="spending">
        <h2> {budget.id} Budget</h2>
        <h3> Income </h3>
        <h4> {centsToDollars(budget.income)}</h4>
        <h3> Expenses </h3>
        <h4> {centsToDollars(totalSpending(expenses))} </h4>
      </div>
      <Link to="/overview">Overview</Link>

      <h4> Spending by Category </h4>
      <ul>{categorySpending}</ul>
    </div>
  );
}
