import React, { Component } from 'react';
import UpdateProfile from './UpdateProfile';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <Link to="/update-profile">Update Profile</Link>
      </div>
    );
  }
}

export default Dashboard;
