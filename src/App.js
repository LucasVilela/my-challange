import React from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./data/mainstream/menu-mainstream";

function App() {
  return <div>{data["data"].map(i => console.log(i))}</div>;
}

export default App;
