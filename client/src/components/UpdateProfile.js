import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateProfile } from '../actions/index';

class UpdateProfile extends Component {
  state = {
    displayName: '',
    city: '',
  };
  componentDidMount() {
    this.props.fetchUser();
    // console.log('did mount**', this.props);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('nextProps', nextProps, 'prevState', prevState);
  //   if (nextProps.auth.displayName != prevState.auth.displayName) {
  //     return { displayName: nextProps.auth.displayName };
  //   }
  //   return null;
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth) {
      this.setState({
        displayName: nextProps.auth.displayName,
        city: nextProps.auth.city,
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      displayName: this.state.displayName,
      city: this.state.city,
    };
    console.log('submitting');
    this.props.updateProfile(profileData);
  };
  render() {
    // console.log('render', this.props);

    return (
      <div>
        <h3 className="text-center mt-5">Update Profile</h3>
        <form onSubmit={this.onSubmit} className="text-center ">
          {/* <div className="form-group row col-md-4 mx-auto mt-5">
            <label htmlFor="exampleFormControlFile1">Display Photo</label>
            <input type="file" className="form-control-file" />
          </div> */}
          <div>
            <img
              className="col-md-4 mb-2 mt-5"
              alt="avatar"
              style={{ width: '200px', height: '200px' }}
              src="https://feedback.seekingalpha.com/s/cache/72/3d/723d8a2e1fe33239a23ce16590b489f3.png"
            />
          </div>
          <div className="custom-file col-md-4 mt-4">
            <input type="file" className="custom-file-input" id="customFile" />
            <label className="custom-file-label" htmlFor="customFile">
              Update Display Photo
            </label>
          </div>
          {/* <div className="mt-2"> */}
          <div className="form-group row col-md-4 mx-auto mt-3">
            <label htmlFor="validationServer01">Display Name</label>
            <input
              type="text"
              className="
                form-control

                "
              // className="
              // form-control
              // is-valid
              // "
              id="validationServer01"
              name="displayName"
              placeholder="First name"
              value={this.state.displayName}
              onChange={this.onChange}
              // required
            />
            {/* <div className="valid-feedback">Looks good!</div> */}
          </div>

          <div className="form-group row col-md-4 mb-3 mx-auto">
            <label htmlFor="validationServer01">City</label>
            <input
              type="text"
              className="
                form-control"
              // className="
              // form-control
              // is-valid
              // "
              id="validationServer01"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.onChange}
              // required
            />
            {/* <div className="valid-feedback">Looks good!</div> */}
          </div>
          {/* </div> */}

          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  {
    updateProfile,
    fetchUser,
  }
)(UpdateProfile);
