import React, { Component } from "react";
import Carousel from "nuka-carousel";

const FAKE_DATA = [
  {
    img: "conc1.png",
    title: "БИ 2",
    body: 'Стадион "Динамо"',
  },
  {
    img: "tour1.jpg",
    title: "RAMMSTEIN",
    body: 'EUROPE STADIUM TOUR',
  },
  {
    img: "tour2.jpg",
    title: "IRONMAN",
    body: '',
  },
]

class Concerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      concerts: [],
    }
  }

  componentDidMount() {

    const loadFakeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(FAKE_DATA);
      }, 1000);
    });

    loadFakeData.then(data => this.setState({ concerts: data }))


    /*fetch('json/concerts')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      const data = JSON.parse(json);
      this.setState({ concerts: data });
    })*/
  }

  render() {
    const concerts = this.state.concerts;
    if (!concerts.length) {
      return <div>Loading...</div>
    }

    return (
      <main>
        <h5> Some Concerts</h5>

        { concerts.map((concert, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img className="concerts w-100" src="твое изображение для всех"  alt="concert1" />
            <div className="card-body">
              <h5 className="card-title">
                {concert.title}
              </h5>
              <p className="card-text">
                {concert.body}
              </p>
              <p className="card-text">
                {concert.date}
              </p>
              <a href={`/translation?id=${concert.id}`} className="btn btn-success moren"></a>
            </div>
          </div>
        )) }

      </main>
    );
  }
}

export default Concerts;
