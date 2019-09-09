import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Redirect } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  // console.log(email);

  const userLogin = () => {
    return axios
      .post("/api/users/login", {
        email,
        password
      })
      .then(response => {
        localStorage.setItem("id", response.data);
        setRedirect(true);
      })
      .catch(err => {
        console.log("axios error", err);
      });
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/budget/" />;
    }
  };
  return (
    <main>
      <div>{renderRedirect()}</div>
      <div className="loginBigBox">
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
    </main>
  );
}
