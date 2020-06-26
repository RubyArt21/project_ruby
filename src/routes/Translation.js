import React, { Component } from "react";
import { FAKE_DATA } from './fakeData'

class Translation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            concert: {},
            isShowHiddenButton: true,
        }
    }

    loadFakeData = () => {
      fetch('json/translation/'+ this.props.match.params.id)
          .then(response => response.json())
          .then(json => {
              this.setState({ concert: json });
          })
    }

    componentDidMount() {
        /*const loadFakeData = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(FAKE_DATA.find(concert => concert.id == this.props.match.params.id));
          }, 1000);
        });

        loadFakeData.then(data => this.setState({ concert: data }))
        */
        this.loadFakeData()


    }

    render() {
        const { isShowHiddenButton, concert } = this.state;
        if (!concert) {
            return <div>Loading...</div>
        }

        return (
            <main>
                <h5> Some Concerts</h5>

                {
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="concerts w-100" src="profil.jpg" alt="твое изображение для всех" />
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

                <button onClick={() => this.setState({isShowHiddenButton: !isShowHiddenButton})} className='btn btn-info'>
                  Change content
                </button>

                <button onClick={() => this.loadFakeData()} hidden={isShowHiddenButton} className='btn btn-info'>
                  InvisbleButton
                </button>

            </main>
        );
    }
}

export default Translation;
