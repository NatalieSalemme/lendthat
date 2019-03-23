import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions/index';

class UpdateProfile extends Component {
  componentDidMount() {
    this.props.updateProfile();
  }
  render() {
    console.log(this.props.auth);
    return (
      <div>
        <h3 className="text-center mt-5">Update Profile</h3>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  { updateProfile }
)(UpdateProfile);
