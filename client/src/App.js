import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Uploader from "./components/Uploader";
import useApplicationData from "./hooks/useApplicationData";
function App() {
  return (
    <div>
      <Menu />
      <Uploader />
    </div>
  );
}

export default App;
