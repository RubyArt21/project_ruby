import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Tours from "./routes/Tours";
import Concerts from "./routes/Concerts";
import Contacts from "./routes/Contacts";
import RegForm from "./routes/RegForm";
import User from "./routes/User";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideMenu: false
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Header />

          <Switch>
            <Route exact path="/" component={Concerts} />
            <Route exact path="/tours" component={Tours} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/registration" component={RegForm} />
            <Route exact path="/user" component={User} />

            <Route exact path="*">
              404
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
