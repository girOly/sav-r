import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const makeUser = () => {
    return axios
      .post("/api/users/register", {
        name,
        password,
        email
      })
      .then(response => {
        // console.log("frontend", response.data[0].id);
        localStorage.setItem("id", response.data[0].id);
        // console.log("localStorage", localStorage.id);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="registerBigBox">
      <div className="indexLogoMenu">
        <div className="indexMenuBox">
          <Link to="/">MENU</Link>
        </div>
        <h3 className="savrLogo">Sav-r</h3>
      </div>
      <div className="registerMain">
        <div className="registerTitle">
          <h1>REGISTER</h1>
        </div>
        <div className="registerForm">
          <div className="registerCentered">
            <form
              className="registerFormContent"
              onSubmit={event => event.preventDefault()}
            >
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
        </div>
      </div>
    </div>
  );
}
