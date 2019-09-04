import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister(props) {
  return (
    <div>
      <h1>
        <Link to="/">MENU</Link>
      </h1>
      <h1>Login/Register</h1>
      <Login />
    </div>
  );
}
