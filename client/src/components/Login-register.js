import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useVisualMode } from "../hooks/useVisualMode";
import Login from "./Login";
import Register from "./Register";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";

export default function LoginRegister(props) {
  const { mode, transition, back } = useVisualMode(LOGIN);
  return (
    <div>
      <h1>
        <Link to="/">MENU</Link>
      </h1>
      <h1>Login/Register</h1>
      {mode === LOGIN && <Login toRegister={() => transition(REGISTER)} />}
      {mode === REGISTER && <Register toLogin={() => transition(LOGIN)} />}
    </div>
  );
}
