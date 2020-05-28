import React, { Component } from "react";

class Tours extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./1.jpg" alt="concert1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-success moren">
                Tours
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./1.jpg" alt="concert1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-success moren">
                Tours
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./1.jpg" alt="concert1" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="btn btn-success moren">
                Tours
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Tours;
