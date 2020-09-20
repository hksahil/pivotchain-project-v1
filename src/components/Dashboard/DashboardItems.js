import React, { Component } from "react";
import "./DashboardItems.css";
function DashboardItems(props) {
  return (
    <>
      <div className="parent-1">
        <div className="container-1">
          <div className="item" >
            <img
              className="img-c"
              style={{ width: "75px" }}
              src={props.src}
              alt=""
            />
          </div>
          <div className="text-wrap" >
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardItems;
