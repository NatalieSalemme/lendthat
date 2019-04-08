import React, { Component } from 'react';
import BrowseItem from './BrowseItem';

class BrowseItemsMap extends Component {
  render() {
    const { items } = this.props;
    console.log('items from map', items);
    let browseItems;
    if (!items) {
      browseItems = (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    } else {
      if (items.length > 0) {
        browseItems = items.map(item => (
          <BrowseItem key={item._id} item={item} />
        ));
      } else {
        browseItems = <h3>No Items Found</h3>;
      }
    }

    return (
      <div
        className="mx-auto text-center row"
        style={{ border: '1px dotted red' }}
      >
        {browseItems}
      </div>
    );
  }
}

export default BrowseItemsMap;
