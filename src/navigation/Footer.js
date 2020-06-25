import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="d-flex flex-row align-items-end">
            <div className="">
              <h5 className="black-text">Contacts</h5>
              <p className="grey-text text-lighten-4">Minsk, Belarus.</p>
              <p className="grey-text text-lighten-4">
                +375(29)306-58-76, +375(44)518-00-78.
              </p>
              </div>

        <div className="icons d-flex ml-auto">
          <img class='social_icon' src="ig.png" alt="socmed" />
          <img class='social_icon mx-2' src="tr.png" alt="socmed" />
          <img class='social_icon' src="fb.png" alt="socmed" />
         </div>
         </div>
       </div>
        <div className="footer-copyright">
          <div className="container">© 2020 By Ruby</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
