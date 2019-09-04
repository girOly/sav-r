import React from "react";
import { useVisualMode } from "../hooks/useVisualMode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Uploader from "./Uploader";

export default function Menu(props) {
  return (
    <React.Fragment>
      <main className="menu">
        <section className="menu-button">
          <Link to="/create_budget/">CREATE BUDGET</Link>
        </section>
        <section className="menu-button">
          <Link to="/create_expense/">CREATE EXPENSE</Link>
        </section>
        <section className="menu-button">
          <Link to="/upload/">UPLOAD RECEIPT</Link>
        </section>
        <section className="menu-button">
          <Link to="/receipt_history/">RECEIPT HISTORY</Link>
        </section>
        <section className="menu-button">
          <h1>OVERVIEW</h1>
        </section>
      </main>
    </React.Fragment>
  );
}
