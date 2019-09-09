import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Add-receipt.css";
import Uploader from "./Uploader";
import Confirm from "./Confirm";
import CreateExpense from "./Create-expense";
import Edit from "./Edit";
import { useVisualMode } from "../hooks/useVisualMode";

const CONFIRM = "CONFIRM";
const UPLOAD = "UPLOAD";
const CREATE = "CREATE";

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
  const noReceipt = () => {
    transition(CREATE);
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
          <button className="receiptNoReceiptButton" onClick={noReceipt}>
            I don't have a receipt
          </button>
        </div>
        <div className="receiptConfirm">
          {mode === CONFIRM && (
            <Confirm
              total={total}
              imageURL={imageURL}
              budget={props.budget}
              updateExpenses={props.updateExpenses}
            />
          )}
          {mode === CREATE && (
            <CreateExpense
              budget={props.budget}
              updateExpenses={props.updateExpenses}
            />
          )}
        </div>
      </div>
    </container>
  );
}
