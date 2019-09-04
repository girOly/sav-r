import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  console.log(email);

  const register = email => {
    return;
    axios
      .post("/api/users/register", {
        email: email
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

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
        <button type="submit" onClick={event => register(email)}>
          Log In
        </button>
      </form>
      <button onClick={props.toRegister}>Take me to register</button>
    </div>
  );
}
