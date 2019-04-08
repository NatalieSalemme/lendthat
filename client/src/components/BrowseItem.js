import React, { Component } from 'react';

class BrowseItem extends Component {
  render() {
    const { available, city, name, owner, price } = this.props.item;

    return (
      <div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="https://mastergolflivestream.com/images/clipart-present-item-2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Name: {name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {city}</li>
            <li className="list-group-item">Price: {price}</li>
            <li className="list-group-item">
              Available: {available ? 'Yes' : 'No'}
            </li>
            <li className="list-group-item">Owner: {owner}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseItem;
