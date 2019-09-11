import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BudgetListItem from "./BudgetListItem";
import "./BudgetList.css";

export default function BudgetList(props) {
  const { budgets } = props;

  const budgetsMap = budgets.map(budget => (
    <div className="budgetListBox">
      <BudgetListItem
        key={budget.id}
        budget={budget}
        chooseBudget={props.chooseBudget}
      />
    </div>
  ));

  return <div>{budgetsMap}</div>;
}
