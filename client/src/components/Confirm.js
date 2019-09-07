import React, { useState } from "react";
import axios from "axios";

export default function Confirm(props) {
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [total, setTotal] = useState(props.total);
  const [image_url, setImage_url] = useState(props.imageURL || "");
  // console.log(category);
  console.log("imageurl from confirm", image_url);

  const loggingFunction = function(event) {
    console.log(event.target.value, "=============");
    console.log(category);
  };

  const submitReceipt = () => {
    return axios
      .post("/api/users/login", {})
      .then(response => {})
      .catch(err => {
        console.log("axios error", err);
      });
  };

  console.log("total from confirm", total);
  return (
    <div>
      <h1>Confirm Component</h1>
      <form onSubmit={event => event.preventDefault()}>
        total
        <input
          onChange={event => setTotal(event.target.value)}
          type="number"
          name="total"
          value={total}
        />
        user comments
        <input
          onChange={event => setComment(event.target.value)}
          type="text"
          name="comments"
        />
        category
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
      </form>
    </div>
  );
}
