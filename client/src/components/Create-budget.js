import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Create-budget.css";

export default function CreateBudget(props) {
  const [income, setIncome] = useState(0);
  const [budgetName, setBudgetName] = useState("");

  const budgetCreate = () => {
    return axios
      .post("/api/budgets", {
        income,
        user_id: localStorage.id,
        name: budgetName
      })
      .then(response => {
        console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="newBudgetBigBox">
      <div className="newBudgetMain">
        <div className="newBudgetLogoMenu">
          <div className="newBudgetMenuBox">
            <Link to="/">MENU</Link>
          </div>
          <h3 className="newBudgetSavrLogo">sav-r</h3>
        </div>
        <div className="newBudgetName">
          <h4> Create a new Expense Tracker</h4>
        </div>
        <div className="newBudgetForm">
          <div className="newBudgetFormCenter">
            <form
              className="newBudgetActualForm"
              onSubmit={event => event.preventDefault()}
            >
              <div className="newBudgetFormName">
                Name
                <div className="newBudgetFormNameInput">
                  <input
                    onChange={event => setBudgetName(event.target.value)}
                    type="text"
                    name="budget_name"
                  />
                </div>
                How much can you spend?
                <div className="newBudgetFormNameInput">
                  <input
                    onChange={event => setIncome(event.target.value)}
                    type="number"
                    name="income"
                  />
                </div>
                <button onClick={budgetCreate} type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
