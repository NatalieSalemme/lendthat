import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index';
import { addItem, uploadPhoto } from '../actions/itemActions';

class Lend extends Component {
  state = {
    name: '',
    // photo: '',
    price: '',
    available: false,
    city: '',
    submitted: false,
  };
  componentDidMount() {
    this.props.fetchUser();
  }
  onPhotoSubmit = e => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append('photo', e.target.photo.files[0]);
    console.log(bodyFormData);
    console.log(e.target.photo.files[0]);

    this.props.uploadPhoto(bodyFormData);
    // this.props.updateAvatarStatus();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      submitted: false,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const itemData = {
      name: this.state.name,
      photo: this.state.photo,
      price: this.state.price,
      available: this.state.available,
      city: this.state.city,
      owner: this.props.auth._id,
    };
    console.log('***itemData', itemData);
    this.props.addItem(itemData);
    this.setState({
      submitted: true,
    });
  };

  render() {
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

          <div>
            <form onSubmit={this.onPhotoSubmit} encType="multipart/form-data">
              <div className="col-md-4 col-form-label my-3 mx-auto">
                <input
                  ref="photo"
                  type="file"
                  name="photo"
                  id="photo"
                  className="custome-file-input avatar"
                />
                <label htmlFor="photo" className="custom-file-label">
                  Choose File
                </label>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Upload Photo"
                  className="btn btn-primary"
                />
              </div>
            </form>
            {/* <img
                className="col-md-4 mb-2 mt-5"
                alt="Avatar"
                style={{ width: '250px', height: '220px' }}
                src=""
              />
              <br />
              <div className="custom-file col-md-4 mx-auto">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div> */}
          </div>
          <form onSubmit={this.onSubmit} className="text-center ">
            <div className="form-group row col-md-4 mx-auto mt-3">
              <label htmlFor="validationServer01">Item Name</label>
              <input
                type="text"
                className={`form-control ${submitted && !name && 'is-invalid'}`}
                name="name"
                placeholder="Item Name"
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
            {/* <div className="text-center">
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
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
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
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Yes
                </label>
              </div>
            </div> */}
            <br />

            <button className="btn btn-primary" type="submit">
              Add Item
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
  { fetchUser, addItem, uploadPhoto }
)(Lend);
