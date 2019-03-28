import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, updateProfile } from '../actions/index';

class UpdateProfile extends Component {
  state = {
    displayName: '',
    city: '',
    submitted: false,
  };
  componentDidMount() {
    this.props.fetchUser();
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
      submitted: false,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const profileData = {
      displayName: this.state.displayName,
      city: this.state.city,
    };
    this.props.updateProfile(profileData);
    this.setState({
      submitted: true,
    });
  };
  render() {
    const { auth } = this.props;
    const { displayName, submitted, city } = this.state;
    return (
      <div>
        <h3 className="text-center mt-5">Update Profile</h3>
        {submitted && displayName && city && (
          <div
            className="alert container alert-success text-center col-md-6"
            role="alert"
          >
            Success! Your details have been updated
          </div>
        )}

        <form onSubmit={this.onSubmit} className="text-center ">
          <div>
            <img
              className="col-md-4 mb-2 mt-5"
              alt="Avatar"
              style={{ width: '250px', height: '220px' }}
              src={auth && auth.avatar}
            />
          </div>

          <div className="form-group row col-md-4 mx-auto mt-3">
            <label htmlFor="validationServer01">Display Name</label>
            <input
              type="text"
              className={`form-control ${submitted &&
                !displayName &&
                'is-invalid'}`}
              name="displayName"
              placeholder="First name"
              value={displayName}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">Display Name cannot be blank</div>
          </div>

          <div className="form-group row col-md-4 mb-3 mx-auto">
            <label htmlFor="validationServer01">City</label>
            <input
              type="text"
              className={`form-control ${submitted && !city && 'is-invalid'}`}
              name="city"
              placeholder="City"
              value={city}
              onChange={this.onChange}
            />
            <div className="invalid-feedback">City cannot be blank</div>
          </div>

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
