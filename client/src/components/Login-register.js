import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useVisualMode } from "../hooks/useVisualMode";
import Login from "./Login";
import Register from "./Register";
import "./Login-register.css";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

export default function LoginRegister(props) {
  const { mode, transition, back } = useVisualMode(REGISTER);
  return (
    <div>
      {mode === LOGIN && <Login toRegister={() => transition(REGISTER)} />}
      {mode === REGISTER && <Register toLogin={() => transition(LOGIN)} />}
    </div>
  );
}
