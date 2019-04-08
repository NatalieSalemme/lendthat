import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browseItems} from 'itemActions';

class Browse extends Component {
  componentDidMount() {
    this.props.browseItems();
  }
  render() {
    return (
      <div>
        <h3>Browse</h3>
      </div>
    );
  }
}

const mapStateToProps({ items}) {
  return items;
}
export default connect(mapStateToProps, { browseItems })(Browse);
