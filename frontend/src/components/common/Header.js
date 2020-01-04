import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Subjects from './Subjects';
import UserProfileView from './UserProfileView';
import * as subjectActions from '../../actions/subjectActions';

/**
 * This component handles the Header for the UI.
 * TODO: Add listener for change in window size -> addEventListener or onresize
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: false,
      subject: null,
    };
    this.signOut = this.signOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    // TODO: add signOut functionality
    // this.props.actions.signOut();
  }

  handleClick(subject) {
    this.props.actions.setSubject(subject);
  }

  render() {
    const { user } = this.state.user;
    const { auth } = this.state.auth;
        
    return (
      <div className="navbar-padding">
        <nav className="navbar underline navbar-expand-md navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand text-dark">
              NewsFeed
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Subjects />
              <UserProfileView user={user} auth={auth} />
            </div>
          </div>

        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
