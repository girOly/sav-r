import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Uploader from "./components/Uploader";
import Application from "./components/Application";
import CreateBudget from "./components/Create-budget";
import CreateExpense from "./components/Create-expense";
import SelectBudget from "./components/Select-Budget";
import ReceiptHistory from "./components/Receipt-history";
import Overview from "./components/Overview";
import Index from "./components/Index";
import AddReceipt from "./components/Add-receipt";
import LoginRegister from "./components/Login-register";

import useApplicationData from "./hooks/useApplicationData";

function App() {
  const [expenses, setExpenses] = useState({});
  const [loading, setLoading] = useState(true);
  const [budget, setBudget] = useState();
  const [availableBudgets, setAvailableBudgets] = useState([]);
  const userID = localStorage.id;

  // console.log("app userID", userID);
  // console.log("app available budgets", availableBudgets);
  // console.log("app budget", budget);
  // console.log("app expenses", expenses);

  // console.log("from app", userID);
  useEffect(() => {
    Promise.all([axios.get(`/api/users/${userID}/budgets`)]).then(result => {
      setAvailableBudgets(result[0].data);
    });
  }, []);

  const chooseBudget = budgetID => {
    // console.log(budgetID);
    Promise.all([
      axios.get(`/api/users/${userID}/budgets/${budgetID}`),
      axios.get(`/api/budgets/${budgetID}/categories`)
    ]).then(result => {
      setBudget(result[0].data), setExpenses(result[1].data);
    });
  };
  console.log("expenses before db", expenses);
  const updateExpenses = budgetID => {
    console.log("budgetID in updateExpenses", budgetID);
    axios.get(`/api/budgets/${budgetID}/categories`).then(result => {
      setExpenses(result.data);
      // console.log("result from updateExpenses", result.data);
    });
  };
  console.log("app expenses after db", expenses);
  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => <Application expenses={expenses} />}
      />
      <Route
        path="/add_receipt/"
        component={() => (
          <AddReceipt budget={budget} updateExpenses={updateExpenses} />
        )}
      />
      <Route path="/create_budget/" component={CreateBudget} />
      <Route
        path="/create_expense/"
        component={() => (
          <CreateExpense budget={budget} updateExpenses={updateExpenses} />
        )}
      />
      <Route path="/receipt_history/" component={ReceiptHistory} />
      <Route
        path="/budget/"
        component={() => (
          <SelectBudget
            availableBudgets={availableBudgets}
            chooseBudget={chooseBudget}
          />
        )}
      />
      <Route
        path="/overview/"
        component={() => <Overview expenses={expenses} />}
      />
      <Route path="/login/" component={LoginRegister} />
      <Route
        path="/index/"
        component={() => <Index budget={budget} expenses={expenses} />}
      />
    </Router>
  );
}

export default App;
