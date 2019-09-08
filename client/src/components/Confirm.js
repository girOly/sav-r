import React, { useState } from "react";
import axios from "axios";
import "./Confirm.css";

export default function Confirm(props) {
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(props.total);
  const [image_url, setImage_url] = useState(props.imageURL || "");
  // console.log(category);
  console.log("imageurl from confirm", image_url);
  console.log("confirm props.budget.id", props.budget[0].id);

  const loggingFunction = function(event) {
    console.log(event.target.value, "=============");
    console.log(category);
  };

  const submitReceipt = () => {
    return axios
      .post("", {})
      .then(response => {})
      .then(props.updateExpenses(props.budget[0].id))
      .catch(err => {
        console.log("axios error", err);
      });
  };

  console.log("total from confirm", total);
  return (
    <div className="confirmBigBox">
      <div className="confirmCenter">
        <div className="confirmTitle">
          <h1>Please confirm your spending!</h1>
        </div>
        <div className="confirmTotal"></div>
        <form onSubmit={event => event.preventDefault()}>
          <div className="confirmTotalInput">
            <div className="confirmTotal">
              total
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
              <div className="confirmCategoryTitle">Category</div>
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
              <button onClick={submitReceipt}>SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
