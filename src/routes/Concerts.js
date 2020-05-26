import React, { Component } from "react";
import Carousel from "nuka-carousel";

class Concerts extends Component {
  render() {
    return (
      <main>
        <h5> Some concerts</h5>

        <Carousel>
          <img src="https://lorempixel.com/800/400/food/1" alt="pic1" />
          <img src="https://lorempixel.com/800/400/food/2" alt="pic2" />
          <img src="https://lorempixel.com/800/400/food/3" alt="pic3" />
          <img src="https://lorempixel.com/800/400/food/4" alt="pic4" />
        </Carousel>

        <div className="card" style={{ width: "18rem" }}>
          <img className="concerts w-100" src="./1.jpg" alt="concert1" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-success moren">
              Concert
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Concerts;
