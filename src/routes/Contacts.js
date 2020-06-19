import React, { Component } from "react";

class Contacts extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <h5>Minsk, Belarus</h5>
          <iframe
            className="map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A7019db59f8f42336cb3496b9b4b2a460de73707a9001344115554c23cf667217&amp;source=constructor"
            width="1032"
            height="592"
            frameBorder="0"
          />
        </div>
      </main>
    );
  }
}

export default Contacts;
