import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Uploader from "./Uploader";
import Confirm from "./Confirm";
import Edit from "./Edit";

export default function AddReceipt(props) {
  return (
    <container>
      <Link to="/">MENU</Link>
      <h1>ADD RECEIPT</h1>
      <div>
        <Uploader />
      </div>
      <div>
        <Confirm />
      </div>
      <div>
        <Edit />
      </div>
    </container>
  );
}
