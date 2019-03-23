import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Landing from './Landing';
import Browse from './Browse';
import Lend from './Lend';
import Borrow from './Borrow';
import UpdateProfile from './UpdateProfile';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/lend" component={Lend} />
            <Route exact path="/borrow" component={Borrow} />
            <Route exact path="/update-profile" component={UpdateProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
