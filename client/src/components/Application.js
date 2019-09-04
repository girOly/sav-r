import React from "react";
import { Router, Route, Switch } from "react-router";
import { useVisualMode } from "../hooks/useVisualMode";
import Uploader from "./Uploader";
import Menu from "./Main-menu";

const MENU = "MENU";
const UPLOAD = "UPLOAD";

export default function Application(props) {
  return <Menu />;
}
