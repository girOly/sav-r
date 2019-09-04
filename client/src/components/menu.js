import React from "react";
import { useVisualMode } from "../hooks/useVisualMode";
import Uploader from "./Uploader";

export default function Menu(props) {
  return (
    <React.Fragment>
      <main className="menu">
        <section className="menu-button">
          <h1>CREATE BUDGET</h1>
        </section>
        <section className="menu-button">
          <h1>CREATE EXPENSE</h1>
        </section>
        <section className="menu-button" onClick={props.onUpload}>
          <h1 onClick={props.onUpload}>UPLOAD RECEIPT</h1>
        </section>
        <section className="menu-button">
          <h1>RECEIPT HISTORY</h1>
        </section>
        <section className="menu-button">
          <h1>OVERVIEW</h1>
        </section>
      </main>
    </React.Fragment>
  );
}
