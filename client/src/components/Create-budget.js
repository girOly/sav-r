import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function CreateBudget(props) {
  const [income, setIncome] = useState(0);
  console.log(income);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
