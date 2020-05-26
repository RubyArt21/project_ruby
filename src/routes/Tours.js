import React, { Component } from "react";

class Tours extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img className="tour" src="./1.jpg" alt="tour1" />
                </div>
                <div className="card-action color lime lighten-5">
                  <a href="/">Tour</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img className="tour" src="./1.jpg" alt="tour2" />
                </div>
                <div className="card-action color lime lighten-5">
                  <a href="/">Tour</a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="row">
            <div className="col s4 m4">
              <div className="card">
                <div className="card-image">
                  <img className="tour" src="./1.jpg" alt="tour3" />
                </div>
                <div className="card-action color lime lighten-5">
                  <a href="/">Tour</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Tours;
