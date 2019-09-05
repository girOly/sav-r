import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(name);
  console.log(email);
  console.log(password);

  const makeUser = () => {
    // console.log("name: ", name);
    // console.log("email: ", email);
    // console.log("password: ", password);

    return axios
      .post("/api/users/register", {
        name,
        password,
        email
      })
      .then(response => {
        console.log("axios-response", response);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div>
      <h1>REGISTER</h1>
      <form onSubmit={event => event.preventDefault()}>
        name
        <input
          onChange={event => setName(event.target.value)}
          type="text"
          name="name"
        />
        email
        <input
          onChange={event => setEmail(event.target.value)}
          type="text"
          name="name"
        />
        password
        <input
          onChange={event => setPassword(event.target.value)}
          type="text"
          name="name"
        />
        <button onClick={makeUser}>Register</button>
      </form>
      <button onClick={props.toLogin}>Take me to login</button>
    </div>
  );
}

{
  /* <input
  onChange={event => setEmail(event.target.value)}
  type="text"
  name="email"
/>; */
}
