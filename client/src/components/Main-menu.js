import React from "react";
// import { useVisualMode } from "../hooks/useVisualMode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Uploader from "./Uploader";

export default function Menu(props) {
  return (
    <React.Fragment>
      <main className="menu">
        <section className="menu-button">
          <Link to="/create_budget/">CREATE A NEW BUDGET</Link>
        </section>
        <section className="menu-button">
          <Link to="/create_expense/">CREATE EXPENSE</Link>
        </section>
        <section className="menu-button">
          <Link to="/add_receipt/">ADD RECEIPT</Link>
        </section>
        <section className="menu-button">
          <Link to="/receipt_history/">RECEIPT HISTORY</Link>
        </section>
        <section className="menu-button">
          <Link to="/overview/">OVERVIEW</Link>
        </section>
        <section className="menu-button">
          <Link to="/login/">LOGIN/REGISTER</Link>
        </section>
        <section className="menu-button">
          <Link to="/index/">Index </Link>
        </section>
        <section className="menu-button">
          <Link to="/budget/">SELECT BUDGET</Link>
        </section>
      </main>
    </React.Fragment>
  );
}
