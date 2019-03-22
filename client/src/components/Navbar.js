import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google/">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a>Logout</a>
          </li>
        );
    }
  }
  render() {
    console.log(this.props);
    return (
      <div style={{ backgroundColor: 'gray' }}>
        <h3>LendThat</h3>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Navbar);
