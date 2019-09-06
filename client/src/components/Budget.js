import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function SelectBudget(props) {
  const [budget, setBudget] = useState(0);
  return (
    <div>
      <Link to="/">MENU</Link>
      <h1>SELECT BUDGET</h1>
      <Link to="/budget">BUDGET 1 </Link>
    </div>
  );
}
