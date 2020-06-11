import React, { Component } from "react";
import Carousel from "nuka-carousel";

const CAROUSEL_IMAGES = [ "conc1.png", "tour1.jpg", "tour2.jpg" ]

class Concerts extends Component {
  render() {
    return (
      <main>
        <h5> Some Concerts</h5>

        <Carousel>
          { CAROUSEL_IMAGES.map((image, index) =>
            <img key={index} className='mx-auto carousel_image' src={image} alt=''/>
          )}
        </Carousel>

        <div className="card" style={{ width: "18rem" }}>
          <img className="concerts w-100" src="./1.jpg" alt="concert1" />
          <div className="card-body">
            <h5 className="card-title">Concert</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-success moren">
              Concert
            </a>
          </div>
        </div>

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

      </main>
    );
  }
}

export default Concerts;
