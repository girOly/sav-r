import React from "react";
import { Router, Route, Switch } from "react-router";
import { useVisualMode } from "../hooks/useVisualMode";
import Uploader from "./Uploader";
import Menu from "./menu";

const MENU = "MENU";
const UPLOAD = "UPLOAD";

export default function Application(props) {
  const { mode, transition, back } = useVisualMode(MENU);
  return (
    <React.Fragment>
      {mode === MENU && <Menu onUpload={() => transition(UPLOAD)} />}
      {mode === UPLOAD && <Uploader onMenu={() => transition(MENU)} />}
    </React.Fragment>
  );
}
