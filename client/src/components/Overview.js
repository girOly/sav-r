import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "./Overview.css";
export default function Overview(props) {
  console.log("localStorage", localStorage.id);
  const expenses = props.expenses;
  console.log("overview expenses", expenses);

  const expenseObjSeprator = expenseObj => {
    let expenseCategories = [];
    let expenseTotals = [];

    for (let category in expenseObj) {
      expenseCategories.push(category);
      expenseTotals.push(expenseObj[category]);
    }
    return { expenseCategories, expenseTotals };
  };

  const dataForGraph = expenseObjSeprator(expenses);

  const data = {
    labels: dataForGraph.expenseCategories,
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: dataForGraph.expenseTotals
      }
    ]
  };
  return (
    <div className="overviewMainBox">
      <Link to="/">MENU</Link>
      <h1>Overview</h1>
      <Bar data={data} />
    </div>
  );
}
