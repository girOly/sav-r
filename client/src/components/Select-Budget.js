import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Select-budget.css";
import BudgetList from "./BudgetList";

export default function SelectBudget(props) {
  const [budget, setBudget] = useState(0);

  return (
    <div className="selectRowBox">
      <div className="selectColumnBox">
        <div className="selectLogoMenu">
          <div className="selectMenuBox">
            <Link className="selectMenuButton" to="/">
              =
            </Link>
          </div>
          <h3 className="selectSavrLogo">sav-r</h3>
        </div>
        <div className="selectBody">
          <div className="selectBodyColumn">
            <div>
              <h1 className="selectTitleText">Select expense tracker</h1>
            </div>
            <Link className="selectLinkToCreate" to="/create_budget/">
              Make a new budget
            </Link>
            <div className="SelectBudgetList">
              <BudgetList
                budgets={props.availableBudgets}
                chooseBudget={props.chooseBudget}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
