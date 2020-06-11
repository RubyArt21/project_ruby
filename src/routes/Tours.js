import React, { Component } from "react";

class Tours extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./tour1.jpg" alt="tour1" />
            <div className="card-body">
              <h5 className="card-title">RAMMSTEIN EUROPE STADIUM TOUR</h5>
              <p className="card-text">
                17.07.2020 20:00 18+
              </p>
              <a href="/" className="btn btn-success moren">
                Tours
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./tour2.jpg" alt="tour2" />
            <div className="card-body">
              <h5 className="card-title">IRON MAIDEN: LEGACY OF THE BEAST TOUR</h5>
              <p className="card-text">
                В рамках мирового тура 2020 IRON MAIDEN (Айрон Мэйден) выступят в Варшаве 5 июля на стадионе PGW Narodowy.
              </p>
              <a href="/" className="btn btn-success moren">
                Tours
              </a>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="./tour3.jpg" alt="tour3" />
            <div className="card-body">
              <h5 className="card-title">Lady Gaga</h5>
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
