import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CreateBudget(props) {
  const [income, setIncome] = useState(0);

  console.log(income);

  const budgetCreate = () => {
    return axios
      .post("/api/budget", {
        income
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
