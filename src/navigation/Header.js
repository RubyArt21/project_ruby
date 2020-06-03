import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/VisitTogether.png";

class Header extends Component {
  render() {
    return (
      <div id="outer-container">
        <nav className="navbar matshadow navbar-expand-lg navbar-light">
          <Link to="/" className="h-100">
            <img className="h-100" src={Logo} alt="logo" />
          </Link>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Concerts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tours">
                  Tours
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-info">
            Sign up
          </button>

          <button type="button" className="btn btn-info">
            Log in
          </button>
        </nav>

        <div id="page-wrap" className="App"></div>
      </div>
    );
  }
}

export default Header;
