import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Edit(props) {
  const [total, setTotal] = useState(0);
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  // console.log(total);

  // console.log(category);

  return (
    <div>
      <h1>Edit Component</h1>
      <form onSubmit={event => event.preventDefault()}>
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
        <label>total</label>
        <input
          type="number"
          name="total_cents"
          onChange={event => setTotal(event.target.value)}
        />
        user comments
        <input
          type="text"
          name="comments"
          onChange={event => setComment(event.target.value)}
        />
        <button type="submit">to the DB boys</button>
      </form>
    </div>
  );
}
