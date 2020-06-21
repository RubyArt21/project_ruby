import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Logo from "./../assets/images/VisitTogether.png";

const LINKS = [
  {
    path: '/',
    title: 'Concerts'
  },
  {
    path: '/tours',
    title: 'Tours'
  },
  {
    path: '/contacts',
    title: 'Contacts'
  },
]

class Header extends Component {
  render() {
    const path = this.props.location.pathname
    return (

      <div>
        <nav id="outer-container" className="navbar matshadow navbar-expand-lg navbar-light">
          <Link to="/" className="h-100">
            <img className="h-100" src={Logo} alt="logo" />
          </Link>
          <form className="form-inline mx-5 my-2 my-lg-0">
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
            <ul className="navbar-nav mx-5">
                { LINKS.map(link =>
                  <li key={link.path} className="nav-item mx-3">
                    <Link className={`nav-link ${path === link.path && 'active'}`} to={link.path}>
                      {link.title}
                    </Link>
                  </li>)
                }
            </ul>
          </div>

          <div className="registr mx-3">
          <button type="button" className="btn btn-info">
            Sign up
          </button>
          <button type="button" className="btn btn-info">
            Log in
          </button>
        </div>
        </nav>

        <div id="page-wrap" className="App"></div>

      </div>
    );
  }
}

export default withRouter(Header);
