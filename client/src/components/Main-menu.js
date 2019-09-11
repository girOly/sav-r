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
          <div className="menuThree">
            <section className="menu-button">
              <Link className="menuLinkButton" to="/index/">
                INDEX
              </Link>
            </section>
          </div>
          <div className="menuOne">
            <section className="menu-button">
              <Link className="menuLinkButton" to="/create_budget/">
                CREATE A NEW EXPENSE TRACKER
              </Link>
            </section>
          </div>
          <div className="menuTwo">
            <section className="menu-button">
              <Link className="menuLinkButton" to="/budget/">
                SELECT AN EXPENSE TRACKER
              </Link>
            </section>{" "}
          </div>
          <div className="menuThree">
            <section className="menu-button">
              <Link className="menuLinkButton" to="/add_receipt/">
                ADD AN EXPENSE
              </Link>
            </section>
          </div>
          <div className="menuOne">
            <section className="menu-button">
              <Link className="menuLinkButton" to="/overview/">
                GRAPHICAL OVERVIEW
              </Link>
            </section>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
