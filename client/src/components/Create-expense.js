import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Create-expense.css";
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
      .then(props.updateExpenses(budget.id))
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="createBigBox">
      <div className="createCenter">
        <div className="createTitle">
          <h1>Create an Expense</h1>
        </div>
        <div className="createTotal" />
        <form onSubmit={event => event.preventDefault()}>
          <div className="createTotalInput">
            <div className="createTotal">
              Total
              <input
                onChange={event => setTotal(event.target.value)}
                type="number"
                name="total"
                value={total}
              />
            </div>
          </div>
          <div className="createCommentsInput">
            <div className="createComments">
              Comment
              <input
                onChange={event => setComment(event.target.value)}
                type="text"
                name="comments"
              />
            </div>
          </div>
          <div className="createCategoriesInput">
            <div className="createCategories">
              <div className="createCategoryTitle">Category</div>
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
              <button onClick={expenseCreate}>SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
