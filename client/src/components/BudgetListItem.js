import React from "react";
import "./BudgetListItem.css";

export default function BudgetListItem(props) {
  const thisBudget = props;
  // console.log(thisBudget);
  return (
    <div>
      <form className="selectForm" onSubmit={event => event.preventDefault()}>
        {thisBudget.budget.name}
        <button
          className="selectBudgetButton"
          onClick={() => props.chooseBudget(thisBudget.budget.id)}
        >
          select
        </button>
      </form>
    </div>
  );
}
