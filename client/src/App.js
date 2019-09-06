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
  const [availableBudgets, setAvailableBudgets] = useState("");
  const userID = localStorage.id;

  // console.log("from app", userID);
  useEffect(() => {
    Promise.all([axios.get(`/api/users/${userID}/budgets`)]).then(result => {
      setAvailableBudgets(result[0].data);
    });
  }, []);

  const chooseBudget = budgetID => {
    axios.get(``).then(result => {
      setBudget(result);
    });
  };
  /*
Promise.all([
      axios.get("http://localhost:3001/api/days"),
      axios.get("http://localhost:3001/api/appointments"),
      axios.get("http://localhost:3001/api/interviewers")
    ]).then(result => {
      dispatch({
        type: SET_APPLICATION_DATA,
        days: result[0].data,
        appointments: result[1].data,
        interviewers: result[2].data
      });
    });
  */

  return (
    <Router>
      <Route
        path="/"
        exact
        component={() => <Application expenses={expenses} />}
      />
      <Route path="/add_receipt/" component={AddReceipt} />
      <Route path="/create_budget/" component={CreateBudget} />
      <Route path="/create_expense/" component={CreateExpense} />
      <Route path="/receipt_history/" component={ReceiptHistory} />
      <Route
        path="/budget/"
        component={() => <SelectBudget availableBudgets={availableBudgets} />}
      />
      <Route
        path="/overview/"
        component={() => <Overview expenses={expenses} />}
      />
      <Route path="/login/" component={LoginRegister} />
      <Route path="/index/" component={Index} />
    </Router>
  );
}

export default App;
