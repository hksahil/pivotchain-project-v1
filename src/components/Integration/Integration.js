import React, { Component } from "react";
import "./Integration.css";

export default class Integration extends Component {
  render() {
    return (
      <>
        <div className="Integration__container">
          <div className="Integration__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk1tlOfe9rFYLAFrlTUsNcHPVGjGQ08R_kCQ&usqp=CAU"></img>
          </div>
          <div className="Integration__text">
            <div className="text__container">
              <h4>Integration</h4>
              <p>Integrates with your notification system mail buzzer etc</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
