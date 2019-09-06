import React from "react";

export default function BudgetListItem(props) {
  const thisBudget = props;
  console.log(thisBudget);
  return (
    <li>
      <form onSubmit={event => event.preventDefault()}>
        {thisBudget.budget.id}
        <button onClick={() => props.chooseBudget(thisBudget.budget.id)}>
          Choose this budget
        </button>
      </form>
    </li>
  );
}
