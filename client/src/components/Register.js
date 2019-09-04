import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div>
      <h1>REGISTER</h1>
      <form>
        email
        <input type="text" name="email" />
        password
        <input type="text" name="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
