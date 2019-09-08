import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CreateBudget(props) {
  const [income, setIncome] = useState(0);
  const [budgetName, setBudgetName] = useState("");

  console.log(budgetName);

  console.log(income);

  const budgetCreate = () => {
    return axios
      .post("/api/budgets", {
        income,
        user_id: localStorage.id
      })
      .then(response => {
        console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div>
      <Link to="/">MENU</Link>
      <h1>CREATE BUDGET</h1>
      <form onSubmit={event => event.preventDefault()}>
        Budget name
        <input
          onChange={event => setBudgetName(event.target.value)}
          type="text"
          name="budget_name"
        />
        Income
        <input
          onChange={event => setIncome(event.target.value)}
          type="number"
          name="income"
        />
        <button onClick={budgetCreate} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
