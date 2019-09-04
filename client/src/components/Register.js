import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div>
      <h1>REGISTER</h1>
      <form>
        name
        <input type="text" name="name" />
        email
        <input type="text" name="email" />
        password
        <input type="text" name="password" />
        <button type="submit">Register</button>
      </form>
      <button onClick={props.toLogin}>Take me to login</button>
    </div>
  );
}
