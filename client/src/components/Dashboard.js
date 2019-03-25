import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="container text-center">
        <h1 className="mt-5">Dashboard</h1>
        <h3 className="text-auto">Hello {auth && auth.displayName}!</h3>
        <Link to="/update-profile">Update Profile</Link>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
