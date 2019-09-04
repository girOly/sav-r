import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Menu from "./components/Menu";
import Uploader from "./components/Uploader";
import Application from "./components/Application";
import CreateBudget from "./components/Create-budget";
import CreateExpense from "./components/Create-expense";
import ReceiptHistory from "./components/Receipt-history";
import Overview from "./components/Overview";
import AddReceipt from "./components/Add-receipt";
import LoginRegister from "./components/Login-register";
import useApplicationData from "./hooks/useApplicationData";

function App() {
  // state
  return (
    <Router>
      <Route path="/" exact component={Application} />
      <Route path="/add_receipt/" component={AddReceipt} />
      <Route path="/create_budget/" component={CreateBudget} />
      <Route path="/create_expense/" component={CreateExpense} />
      <Route path="/receipt_history/" component={ReceiptHistory} />
      <Route path="/overview/" component={Overview} />
      <Route path="/login/" component={LoginRegister} />
    </Router>
  );
}

export default App;
