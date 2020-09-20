import React from "react";
import "./App.css";
import SwitchCard from "./components/SwitchCard/SwitchCard";
import HoverCard from "./components/HoverCard/HoverCard";
import Dashboard from "./components/Dashboard/Dashboard";
import Integration from "./components/Integration/Integration";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <SwitchCard />
        <HoverCard />
        <Dashboard />
        <Integration />
      </div>
    </div>
  );
}

export default App;
