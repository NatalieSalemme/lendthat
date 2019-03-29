import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';

class Lend extends Component {
  state = {
    name: '',
    photo: '',
    price: '',
    available: false,
    city: '',
    submitted: false,
  };
  componentDidMount() {
    this.props.fetchUser();
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };
  render() {
    const { auth } = this.props;
    const { name, photo, price, available, city, submitted } = this.state;
    return (
      <div>
        <h1 className="text-center mt-5">Add New Item to Lend</h1>
        <div>
          {submitted && name && photo && price && available && city && (
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
                src=""
              />
            </div>

            <div className="form-group row col-md-4 mx-auto mt-3">
              <label htmlFor="validationServer01">Name</label>
              <input
                type="text"
                className={`form-control ${submitted && !name && 'is-invalid'}`}
                name="displayName"
                placeholder="First name"
                value={name}
                onChange={this.onChange}
              />
              <div className="invalid-feedback">Name cannot be blank</div>
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

            <div className="form-group row col-md-4 mx-auto mt-3">
              <label htmlFor="validationServer01">Price</label>
              <input
                type="text"
                className={`form-control ${submitted &&
                  !price &&
                  'is-invalid'}`}
                name="price"
                placeholder="Price"
                value={price}
                onChange={this.onChange}
              />
              <div className="invalid-feedback">Price cannot be blank</div>
            </div>
            <div className="text-center">
              <label htmlFor="availability" className="text-left">
                Available?
              </label>
              <br />
              <div
                className="
                   form-check
             form-check-inline form-group"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="available"
                  id="availability-false"
                  value="false"
                />
                <label class="form-check-label" for="inlineRadio1">
                  No
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="available"
                  id="availability-yes"
                  value="yes"
                />
                <label className="form-check-label" for="inlineRadio2">
                  Yes
                </label>
              </div>
            </div>
            <br />

            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(
  mapStateToProps,
  { fetchUser }
)(Lend);
