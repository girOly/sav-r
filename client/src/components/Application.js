import React from "react";
import { Router, Route, Switch } from "react-router";
import { useVisualMode } from "../hooks/useVisualMode";
import Uploader from "./Uploader";
import Menu from "./Menu";

const MENU = "MENU";
const UPLOAD = "UPLOAD";

export default function Application(props) {
  const { mode, transition, back } = useVisualMode(MENU);
  return <Menu />;
}
