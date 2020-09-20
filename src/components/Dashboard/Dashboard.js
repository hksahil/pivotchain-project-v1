import React, { Component } from "react";
import "./Dashboard.css";
import DashboardItems from "./DashboardItems";
function Dashboard() {
  return (
    <div>
      <>
        <div className="Dashboard__text">
          <h4>Situation Dashboard</h4>
          <hr />
        </div>
        <div className="parent">
          <DashboardItems
            title="Spots"
            description="Spot crimes across geography over time."
            src="https://static.vecteezy.com/system/resources/thumbnails/000/582/383/small/icon0-vector-561-01.jpg"
          />
          <DashboardItems
            title="Hotspots"
            description="Detect risk patterns and hotspots."
            src="https://thumbs.dreamstime.com/b/hotspot-icon-wifi-isolated-white-user-interface-outline-181574317.jpg"
          />
          <DashboardItems
            title="Live alerts"
            description="Live alerts count for public safety events."
            src="https://previews.123rf.com/images/jovanas/jovanas1609/jovanas160900750/64113968-bell-icon-on-white-background.jpg"
          />
          <DashboardItems
            title="Response Time"
            description="Predective response time for public safety events."
            src="https://previews.123rf.com/images/veronawinner/veronawinner1901/veronawinner190100025/126419558-clock-line-icon-in-flat-style-clock-symbol-simple-time-symbol-isolated-on-white-background-vector-cl.jpg"
          />
        </div>
      </>
    </div>
  );
}

export default Dashboard;
