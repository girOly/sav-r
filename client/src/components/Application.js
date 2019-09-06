import React from "react";
import { Router, Route, Switch } from "react-router";
import { useVisualMode } from "../hooks/useVisualMode";
import Uploader from "./Uploader";
import Menu from "./Main-menu";
// import Overview from "./Overview";
import "./Application.scss";

export default function Application(props) {
  return (
    <React.Fragment>
      <main className="main">
        <Menu />
      </main>
    </React.Fragment>
  );
}
