import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Uploader from "./Uploader";
import Confirm from "./Confirm";
import Edit from "./Edit";

export default function AddReceipt(props) {
  const [total, setTotal] = useState(0);
  const [imageURL, setImageURL] = useState("");

  const userConfirm = (imageURLFromAmazon, totalFromUser) => {
    setTotal(totalFromUser);
    setImageURL(imageURLFromAmazon);
  };
  console.log("total from addReceipt", total);
  console.log("imageURL from addReceipt", imageURL);

  return (
    <container>
      <Link to="/">MENU</Link>
      <h1>ADD RECEIPT</h1>
      <div>
        <Uploader userConfirm={userConfirm} />
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
