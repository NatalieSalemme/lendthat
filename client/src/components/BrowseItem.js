import React, { Component } from 'react';

class BrowseItem extends Component {
  render() {
    const { available, city, name, owner, price } = this.props.item;

    return (
      <div>
        <div className="card my-4 mx-2" style={{ width: '16rem' }}>
          <img
            src="https://news.virginia.edu/sites/default/files/styles/uva_basic_article/public/article_image/blood_moon_nasa_header_3-2.jpg?itok=AgnLAcQr"
            className="card-img-top mx-auto"
            style={{ height: '125px', width: '100%' }}
            alt="..."
          />
          <div className="card-body" style={{ marginBottom: '-1.5em' }}>
            <h5 className="card-title font-weight-normal">{name}</h5>
          </div>
          <p className="card-text">
            <span className="font-weight-bold" style={{ fontSize: '24px' }}>
              ${price}
            </span>
            <br />
            <span className="text-muted">{city}</span>
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default BrowseItem;
