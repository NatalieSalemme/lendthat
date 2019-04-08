import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseItems } from '../actions/itemActions';
import BrowseItemsMap from './BrowseItemsMap';

class Browse extends Component {
  componentDidMount() {
    this.props.browseItems();
    console.log(this.props.item);
  }
  render() {
    console.log(this.props.item);
    const { item } = this.props;
    return (
      <div>
        <h3>Browse</h3>
        <BrowseItemsMap items={item} />
      </div>
    );
  }
}

function mapStateToProps({ item }) {
  return { item };
}
export default connect(
  mapStateToProps,
  { browseItems }
)(Browse);
