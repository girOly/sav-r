import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(email);

  const userLogin = () => {
    return axios
      .post("/api/users/login", {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("id", response.data);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };

  return (
    <div className="loginBigBox">
      <div className="indexLogoMenu">
        <div className="indexMenuBox">
          <Link to="/">MENU</Link>
        </div>
        <h3 className="savrLogo">Sav-r</h3>
      </div>
      <div className="loginMain">
        <div className="loginTitle">
          <h1>LOGIN</h1>
        </div>
        <div className="loginForm">
          <div className="loginCentered">
            <form
              className="loginFormContent"
              onSubmit={event => event.preventDefault()}
            >
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
        </div>
      </div>
    </div>
  );
}
