import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Uploader from "./components/Uploader";
import Application from "./components/Application";
import CreateBudget from "./components/Create-budget";
import CreateExpense from "./components/Create-expense";
import ReceiptHistory from "./components/Receipt-history";
import Overview from "./components/Overview";
import Index from "./components/Index";
import AddReceipt from "./components/Add-receipt";
import LoginRegister from "./components/Login-register";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const [expenses, setExpenses] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/categories/jao").then(result => {
      setExpenses(result.data);
      setLoading(false);
    });
  }, []);

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
        path="/overview/"
        component={() => <Overview expenses={expenses} />}
      />
      <Route path="/login/" component={LoginRegister} />
      <Route path="/index/" component={Index} />
    </Router>
  );
}

export default App;
