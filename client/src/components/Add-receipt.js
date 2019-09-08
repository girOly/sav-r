import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Add-receipt.css";
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
  const { mode, transition, back } = useVisualMode(CONFIRM);

  const userConfirm = (imageURLFromAmazon, totalFromUser) => {
    setTotal(totalFromUser);
    setImageURL(imageURLFromAmazon);
    transition(CONFIRM);
  };
  console.log("total from addReceipt", total);
  console.log("imageURL from addReceipt", imageURL);

  return (
    <container className="receiptBigBox">
      <div className="receiptMain">
        <div className="receiptLogoMenu">
          <div className="receiptMenuBox">
            <Link to="/">MENU</Link>
          </div>
          <h3 className="receiptSavrLogo">Sav-r</h3>
        </div>
        <div className="receiptUploaderBox">
          <div>
            <Uploader userConfirm={userConfirm} />
          </div>
        </div>
        <div className="receiptConfirm">
          {mode === CONFIRM && (
            <Confirm total={total} imageURL={imageURL} budget={props.budget} />
          )}
        </div>
      </div>
    </container>
  );
}
