import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="black-text">Contacts</h5>
              <p className="grey-text text-lighten-4">Minsk, Belarus.</p>
              <p className="grey-text text-lighten-4">
                +375(29)3065876, +375(44)5180078.
              </p>
            </div>
          </div>
        </div>
        <div className="icons"> </div>
        <div className="footer-copyright">
          <div className="container">© 2020 By Ruby</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
