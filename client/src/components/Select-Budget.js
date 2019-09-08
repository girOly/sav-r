import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BudgetList from "./BudgetList";

export default function SelectBudget(props) {
  const [budget, setBudget] = useState(0);

  return (
    <div>
      <Link to="/">MENU</Link>
      <Link to="/create_budget/">Make a new budget</Link>
      <div>
        <h1>SELECT BUDGET</h1>
      </div>
      <div>
        <BudgetList
          budgets={props.availableBudgets}
          chooseBudget={props.chooseBudget}
        />
      </div>
    </div>
  );
}
