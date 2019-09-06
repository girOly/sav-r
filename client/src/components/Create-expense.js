import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Create-expense.scss";
export default function CreateExpense(props) {
  const [total, setTotal] = useState(0);
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState(0);
  const budget = props.budget[0];
  const userID = localStorage.id;
  // console.log("budgetID in create expense", budget.id);
  // console.log("userID in create expense", userID);
  console.log("create-expense category", category);

  const expenseCreate = () => {
    return axios
      .post(`/api/users/${userID}/budgets/${budget.id}/budget_expenses`, {
        total_cents: total,
        comments: comment,
        category_id: category,
        budget_id: budget.id
      })
      .then(response => {
        console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div class="main">
      <Link to="/">MENU</Link>
      <h1>CREATE EXPENSE</h1>
      <div class="form">
        <form onSubmit={event => event.preventDefault()}>
          Comment:
          <div className="comment">
            <input
              onChange={event => setComment(event.target.value)}
              type="text"
              name="comments"
            />
          </div>
          <label>Total:</label>
          <div className="total">
            <input
              type="number"
              name="total_cents"
              onChange={event => setTotal(event.target.value)}
            />
          </div>
          Categories:
          <div class="categories">
            <label className="radio-inline">
              <input
                value="1"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Groceries
            </label>
            <label className="radio-inline">
              <input
                value="2"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Housing
            </label>
            <label className="radio-inline">
              <input
                value="3"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Restaurants
            </label>
            <label className="radio-inline">
              <input
                value="4"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Medical
            </label>
            <label className="radio-inline">
              <input
                value="5"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Transportation
            </label>
            <label className="radio-inline">
              <input
                value="6"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Clothing
            </label>
            <label className="radio-inline">
              <input
                value="7"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Gifts
            </label>
            <label className="radio-inline">
              <input
                value="8"
                type="radio"
                name="optradio"
                onChange={event => setCategory(event.target.value)}
              />
              Entertainment
            </label>
          </div>
          <button onClick={expenseCreate}>Create Expense</button>
        </form>
      </div>
    </div>
  );
}
