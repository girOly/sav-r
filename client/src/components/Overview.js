import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
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
        label: "Total",
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#ff0000",
          "#00ff4c",
          "#aa00ff",
          "#ffa200",
          "#00fbff"
        ],
        borderColor: "5E728C",
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

  const dataPie = {
    labels: [
      "Groceries",
      "Housing",
      "Restaurants",
      "Medical",
      "Transportation",
      "Clothing",
      "Gifts",
      "Entertainment"
    ],
    datasets: [
      {
        data: dataForGraph.expenseTotals,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#ff0000",
          "#00ff4c",
          "#aa00ff",
          "#ffa200",
          "#00fbff"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#ff0000",
          "#00ff4c",
          "#aa00ff",
          "#ffa200",
          "#00fbff"
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: false,
    legend: {
      position: "left"
    }
  };

  return (
    <div className="overviewMainBox">
      <div className="overviewLogoMenu">
        <div className="overviewMenuBox">
          <Link className="overviewMenuButton" to="/">
            =
          </Link>
        </div>
        <h3 className="overviewSavrLogo">sav-r</h3>
      </div>

      <div className="overviewChart">
        <div className="overviewPie">
          <Pie data={dataPie} height={150} width={200} />
        </div>
        <div className="overviewBar">
          <Bar data={data} height={150} width={200} />
        </div>
      </div>
      <div />
    </div>
  );
}
