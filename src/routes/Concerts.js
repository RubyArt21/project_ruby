import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Carousel from "nuka-carousel";
import { FAKE_DATA } from './fakeData'

class Concerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      concerts: [],
      redirectTo: null,
    }
  }

  componentDidMount() {
    /*
    const loadFakeData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(FAKE_DATA);
      }, 1000);
    });

    loadFakeData.then(data => this.setState({ concerts: data }))
    */

    fetch('json/concerts')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({ concerts: json });
    })
  }

  goToConcert(id) {
    this.setState({ redirectTo: `/concerts/${id}` })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push/>
    }

    const concerts = this.state.concerts;
    if (!concerts.length) {
      return <div>Loading...</div>
    }

    return (
      <main>
        <h5> Some Concerts</h5>

        { concerts.map((concert, index) => (
          <div
            key={index} className="card"
            style={{ width: "18rem" }}
            onClick={() => this.goToConcert(concert.id)}
          >
            <img className="concerts w-100" src="profil.jpg"  alt="concert1" />
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
            </div>
          </div>
        )) }

      </main>
    );
  }
}

export default Concerts;
