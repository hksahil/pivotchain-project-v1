import React, { Component } from "react";
import HoverCard from "../HoverCard/HoverCard";
import SwitchCard from "../SwitchCard/SwitchCard";
import Dashboard from "../Dashboard/Dashboard";
import Integration from "../Integration/Integration";


export default class CombinedView extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <SwitchCard />
        <HoverCard />
        <Dashboard />
        <Integration />
      </div>
    );
  }
}
