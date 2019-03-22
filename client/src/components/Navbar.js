import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Payments from './Payments';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link text-md-right pr-5" href="/auth/google/">
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          // <li key="1">
          //   <Payments />
          // </li>,
          // <li key="2">Credits: {this.props.auth.credits}</li>,
          <li key="3" className="nav-item ">
            <a className="nav-link text-md-right pr-5" href="/api/logout">
              Logout
            </a>
          </li>,
        ];
    }
  }
  render() {
    console.log(this.props);
    return (
      // <div style={{ backgroundColor: 'gray' }}>
      //   <Link to={this.props.auth ? '/dashboard' : '/'}>LendThat</Link>
      //   {this.renderContent()}
      // </div>
      <nav
        className="navbar  navbar-expand-lg navbar-light"
        style={{ backgroundColor: '#34f9d8' }}
      >
        {/* <a className="navbar-brand text-secondary" href="#">
          Navbar
        </a> */}
        <Link
          to={this.props.auth ? '/dashboard' : '/'}
          className="navbar-brand text-dark"
        >
          LendThat
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse  "
          id="navbarNav"
          style={{ width: '100%' }}
        >
          <ul
            className="navbar-nav d-flex justify-content-between "
            style={{ width: '100%' }}
          >
            <div className="d-flex justify-content-centeralign-items-center ">
              <li className="nav-item active">
                <Link to="/dashboard" className="nav-link text-secondary">
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/browse" className="nav-link text-secondary">
                  Browse
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-secondary" href="#">
                  Pricing
                </a>
              </li>
            </div>
            <div>{this.renderContent()}</div>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Navbar);
