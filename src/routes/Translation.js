import React, { Component } from "react";

const FAKE_DATA = [
    {
        title: "conc1",
        body: "Мы продаем пирожки",
        date: 'Стадион "Динамо"',
    }
]

class Translation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Translation: null,
        }
    }

    componentDidMount() {

        const loadFakeData = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(FAKE_DATA);
          }, 1000);
        });

        loadFakeData.then(data => this.setState({ concerts: data }))

        /*const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        fetch('json/translation?id='+ id)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                const data = JSON.parse(json);
                this.setState({ Translation: data });
            })

         */
    }

    render() {
        const Translation = this.state.Translation;
        if (!Translation) {
            return <div>Loading...</div>
        }

        return (
            <main>
                <h5> Some Concerts</h5>

                {
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="concerts w-100" src="твое изображение для всех" alt="твое изображение для всех" />
                        <div className="card-body">
                            <h5 className="card-title">
                                {Translation.title}
                            </h5>
                            <p className="card-text">
                                {Translation.body}
                            </p>
                            <p className="card-text">
                                {Translation.date}
                            </p>
                        </div>
                    </div>
                }

            </main>
        );
    }
}

export default Translation;