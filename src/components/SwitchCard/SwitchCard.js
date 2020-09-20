import React, { Component } from "react";
import "./SwitchCard.scss";

export default class SwitchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
    };
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div>
        <div className="Card__text">
          <h4>How can we help?</h4>
          <h5>Detect Risks in real time</h5>
        </div>
        <div className="container">
          {/* <h4>How can we help?</h4>
          <h6>Detect Risks in real time</h6> */}

          <div className="cards">
            <div className="actions">
              <button onClick={this.toggle}>
                <img
                  alt="left"
                  src={
                    "https://www.flaticon.com/svg/static/icons/svg/271/271218.svg"
                  }
                ></img>
              </button>
              <button onClick={this.toggle}>
                <img
                  alt="right"
                  src={
                    "https://www.flaticon.com/svg/static/icons/svg/271/271226.svg"
                  }
                ></img>
              </button>
            </div>

            <div className="article__container">
              <article
                className={`card ${this.state.toggle ? "active" : "inactive"}`}
              >
                <div
                  className={`play-btn ${
                    this.state.toggle ? "active" : "inactive"
                  }`}
                >
                  <img alt="play-icon" src={require("./play.svg")}></img>
                </div>
                <header>
                  <h1>01</h1>
                  <h3>Vandalism</h3>
                </header>
                <section>
                  <div className="description">
                    {" "}
                    Raven works seamlessly with your CCTV cameras.
                  </div>
                  <button>Read More</button>
                </section>
              </article>
              <article
                className={`card ${this.state.toggle ? "inactive" : "active"}`}
              >
                <div
                  className={`play-btn ${
                    !this.state.toggle ? "active" : "inactive"
                  }`}
                >
                  <img alt="play-icon" src={require("./play.svg")}></img>
                </div>
                <header>
                  <h1>02</h1>
                  <h3>Accidents</h3>
                </header>
                <section>
                  <div className="description">
                    {" "}
                    Raven works seamlessly with your CCTV cameras.
                  </div>
                  <button>Read More</button>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
