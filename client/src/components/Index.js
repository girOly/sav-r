import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Index.css";
import axios from "axios";

export default function Index(props) {
  const userID = localStorage.id;
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
  const prepareForEmail = expenseObj => {
    let result = {};
    for (let key in expenseObj) {
      result[key] = expenseObj[key] / 100;
    }
    return result;
  };

  const emailMe = () => {
    const toBeEmailed = prepareForEmail(expenses);

    return axios
      .post("/api/emails", {
        budgetName: budget.name,
        budgetEntries: toBeEmailed
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };
  /*
  {
    budgetName: "Joe",
    budgetEntries:
        {
        "Groceries": 918,
        "Housing": 0,
        "Restaurants": 1500,
        "Medical": 1000,
        "Transportation": 0,
        "Clothing": 9000,
        "Gifts": 2000,
        "Entertainment": 0
        }
}
*/
  const categorySpending = Object.keys(expenses).map(key => (
    <div>
      <h4>{key}</h4>
      <li>{centsToDollars(expenses[key])}</li>
    </div>
  ));
  return (
    <div className="indexBigBox">
      <div className="indexMain">
        <div className="indexLogoMenu">
          <div className="indexMenuBox">
            <Link className="indexMenuButton" to="/">
              menu
            </Link>
          </div>
          <h3 className="savrLogo">sav-r</h3>
        </div>
        <div className="indexBudgetName">
          <h2> {budget.name}</h2>
        </div>
        <div>
          <div className="indexIncomeExpenses">
            <div className="indexIncome">
              <h3> Spending Limit </h3>
              <h4> {centsToDollars(budget.income)}</h4>
              <button className="emailButton" onClick={emailMe}>
                {" "}
                Email my expenses!{" "}
              </button>
            </div>
            <div className="invisiDiv">
              {/* <div className="nestedInvisiDiv">
                <button className="emailButton" onClick={emailMe}>
                  {" "}
                  Email my expenses!{" "}
                </button>
              </div> */}
            </div>
            <div className="indexExpensesOverview">
              <div className="indexExpenses">
                <h3> Spent so far </h3>
                <h4> {centsToDollars(totalSpending(expenses))} </h4>
              </div>
              <Link className="indexOverviewLink" to="/overview">
                Overview
              </Link>
            </div>
          </div>
        </div>
        <div className="indexCategoryHolder">
          <div className="indexCategory">
            <h4 className="indexCategoryTitle"> Spending by Category </h4>
            <div>{categorySpending}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
