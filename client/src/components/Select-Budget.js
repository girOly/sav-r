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
            <Link to="/">MENU</Link>
          </div>
          <h3 className="selectSavrLogo">Sav-r</h3>
        </div>
        <div className="selectBody">
          <div className="selectBodyColumn">
            <div>
              <h1>SELECT BUDGET</h1>
            </div>
            <Link className="selectLinkToCreate" to="/create_budget/">
              Make a new budget
            </Link>
            <div>
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
