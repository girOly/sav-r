import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Uploader from "./components/Uploader";
import Application from "./components/Application";
import useApplicationData from "./hooks/useApplicationData";
function App() {
  return (
    <div>
      <Application />
    </div>
  );
}

export default App;
