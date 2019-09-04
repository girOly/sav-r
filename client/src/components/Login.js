import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  console.log(email);

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={event => event.preventDefault()}>
        email
        <input
          onChange={event => setEmail(event.target.value)}
          type="text"
          name="email"
        />
        password
        <input type="text" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button onClick={props.toRegister}>Take me to register</button>
    </div>
  );
}
