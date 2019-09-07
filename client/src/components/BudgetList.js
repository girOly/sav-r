import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BudgetListItem from "./BudgetListItem";

export default function BudgetList(props) {
  const { budgets } = props;

  const budgetsMap = budgets.map(budget => (
    <BudgetListItem
      key={budget.id}
      budget={budget}
      chooseBudget={props.chooseBudget}
    />
  ));

  return <ul>{budgetsMap}</ul>;
}