import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email);

  const userLogin = () => {
    // console.log("name: ", name);
    console.log("email: ", email);
    console.log("password: ", password);
    // console.log("password: ", password);

    return axios
      .post("/api/users/login", {
        email,
        password
      })
      .then(response => {
        console.log("response", response);
        localStorage.setItem("id", response.data);
        console.log("localStorage", localStorage.id);
        // console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
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
        <input
          onChange={event => setPassword(event.target.value)}
          type="text"
          name="password"
        />
        <button onClick={userLogin}>Log In</button>
      </form>
      <button onClick={props.toRegister}>Take me to register</button>
    </div>
  );
}
