import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:

      case false:

      default:
    }
  }
  render() {
    return <div />;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Navbar);
