import React, { Component } from "react";
import { FAKE_DATA } from './fakeData'

class Translation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            concert: null,
        }
    }

    componentDidMount() {
        const loadFakeData = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(FAKE_DATA.find(concert => concert.id == this.props.match.params.id));
          }, 1000);
        });

        loadFakeData.then(data => this.setState({ concert: data }))

        /*const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        fetch('json/translation?id='+ id)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                const data = JSON.parse(json);
                this.setState({ concert: data });
            })

         */
    }

    render() {
        const concert = this.state.concert;
        if (!concert) {
            return <div>Loading...</div>
        }

        return (
            <main>
                <h5> Some Concerts</h5>

                {
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="concerts w-100" src={concert.img} alt="твое изображение для всех" />
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
                }

            </main>
        );
    }
}

export default Translation;
