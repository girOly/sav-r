import React from "react";
import "./Main-menu.css";
// import { useVisualMode } from "../hooks/useVisualMode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Uploader from "./Uploader";

export default function Menu(props) {
  return (
    <React.Fragment>
      <main className="menuBigBox">
        <div className="menuColumnBox">
          <section className="menu-button">
            <Link className="menuLinkButton" to="/create_budget/">
              CREATE A NEW BUDGET
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/create_expense/">
              CREATE EXPENSE
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/add_receipt/">
              ADD RECEIPT
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/receipt_history/">
              RECEIPT HISTORY
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/overview/">
              OVERVIEW
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/login/">
              LOGIN/REGISTER
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/index/">
              Index{" "}
            </Link>
          </section>
          <section className="menu-button">
            <Link className="menuLinkButton" to="/budget/">
              SELECT BUDGET
            </Link>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
}
