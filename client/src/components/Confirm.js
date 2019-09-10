import React, { useState } from "react";
import axios from "axios";
import "./Confirm.css";

export default function Confirm(props) {
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(props.total);
  const [image_url, setImage_url] = useState(props.imageURL || "");
  const budget = props.budget[0];
  // console.log(category);
  // console.log("imageurl from confirm", image_url);
  console.log("confirm props.budget.id", budget.id);
  console.log("props in confirm", props);

  const loggingFunction = function(event) {
    console.log(event.target.value, "=============");
    console.log(category);
  };

  const submitReceipt = () => {
    return axios
      .post("/api/receipts", {
        image_url: image_url,
        total: total,
        comments: comment,
        category_id: category,
        budget_id: budget.id
      })
      .then(response => {
        console.log("axios response", response);
      })
      .then(props.updateExpenses(budget.id))
      .catch(err => {
        console.log("axios error", err);
      });
  };

  console.log("total from confirm", total);
  return (
    <div className="confirmBigBox">
      <div className="confirmCenter">
        <div className="confirmTitle">
          <h1>Confirmation</h1>
        </div>
        <div className="confirmTotal" />
        <form onSubmit={event => event.preventDefault()}>
          <div className="confirmTotalInput">
            <div className="confirmTotal">
              Total
              <input
                onChange={event => setTotal(event.target.value)}
                type="number"
                name="total"
                value={total}
              />
            </div>
          </div>
          <div className="confirmCommentsInput">
            <div className="confirmComments">
              Comments
              <input
                onChange={event => setComment(event.target.value)}
                type="text"
                name="comments"
              />
            </div>
          </div>
          <div className="confirmCategoriesInput">
            <div className="confirmCategories">
              <div className="confirmCategoryTitle">Categories:</div>
              <ul>
                <li>
                  Groceries
                  <label className="radio-inline">
                    <input
                      value="1"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  Housing
                  <label className="radio-inline">
                    <input
                      value="2"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  Restaurants
                  <label className="radio-inline">
                    <input
                      value="3"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label className="radio-inline">
                    Medical
                    <input
                      value="4"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label className="radio-inline">
                    Transportation
                    <input
                      value="5"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label className="radio-inline">
                    Clothing
                    <input
                      value="6"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label className="radio-inline">
                    Gifts
                    <input
                      value="7"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
                <li>
                  <label className="radio-inline">
                    Entertainment
                    <input
                      value="8"
                      type="radio"
                      name="optradio"
                      onChange={event => setCategory(event.target.value)}
                    />
                  </label>
                </li>
              </ul>
            </div>
            <button className="confirmSubmitButton" onClick={submitReceipt}>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
