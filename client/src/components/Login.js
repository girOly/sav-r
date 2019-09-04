import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Login(props) {
  [email, setEmail] = useState("");

  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        email
        <input type="text" name="email" />
        password
        <input type="text" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button onClick={props.toRegister}>Take me to register</button>
    </div>
  );
}
