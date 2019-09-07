import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Uploader from "./Uploader";
import Confirm from "./Confirm";
import Edit from "./Edit";
import { useVisualMode } from "../hooks/useVisualMode";

const CONFIRM = "CONFIRM";
const UPLOAD = "UPLOAD";

export default function AddReceipt(props) {
  const [total, setTotal] = useState(0);
  const [imageURL, setImageURL] = useState("");
  // const [budget, setBudget] = useState(props.budget || null);
  const { mode, transition, back } = useVisualMode(UPLOAD);

  const userConfirm = (imageURLFromAmazon, totalFromUser) => {
    setTotal(totalFromUser);
    setImageURL(imageURLFromAmazon);
    transition(CONFIRM);
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
        {mode === CONFIRM && (
          <Confirm total={total} imageURL={imageURL} budget={props.budget} />
        )}
      </div>
      {/* <div>
        <Edit />
      </div> */}
    </container>
  );
}
