import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="container text-center">
        <h1 className="text-auto mt-5">Hello {auth && auth.displayName}!</h1>
        <Link to="/update-profile">Update Profile</Link>
        <div class="card" style={{ width: '18rem' }}>
          <h3>Things I'm Lending</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>

        <div class="card" style={{ width: '18rem' }}>
          <h3>Things I'm Borrowing</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
