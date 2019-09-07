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
    <div className="indexBigBox">
      <div className="indexMain">
        <div className="indexLogoMenu">
          <div className="indexMenuBox">
            <Link to="/">MENU</Link>
          </div>
          <h3 className="savrLogo">Sav-r</h3>
        </div>
        <div className="indexBudgetName">
          <h2> {budget.id} Budget</h2>
        </div>
        <div>
          <div className="indexIncomeExpenses">
            <div className="indexIncome">
              <h3> Income </h3>
              <h4> {centsToDollars(budget.income)}</h4>
            </div>
            <div className="invisiDiv"></div>
            <div className="indexExpensesOverview">
              <div className="indexExpenses">
                <h3> Expenses </h3>
                <h4> {centsToDollars(totalSpending(expenses))} </h4>
              </div>
              <Link to="/overview">Overview</Link>
            </div>
          </div>
        </div>
        <div className="indexCategoryHolder">
          <div className="indexCategory">
            <h4> Spending by Category </h4>
            <ul>{categorySpending}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
