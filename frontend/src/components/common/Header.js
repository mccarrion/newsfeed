import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, users } from '../auth/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as subjectActions from '../../actions/subjectActions';

// TODO: Add a listener for change in window size
// addEventListener or onresize
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

  componentDidMount() {
    // TODO: need to check auth and return user
  }

  // This removes the JWT token from localStorage, thus logging out the user
  removeToken() {
    localStorage.removeItem('id_token');
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
    const { user } = this.state;
    const UserProfileView = props => {
      // TODO: Find a less verbose way of handling window size changes
      if (window.innerWidth < 768) {
        if (isAuthenticated() && user !== null) {
          return (
            <li className="nav-item">
              <Link
                to={`/@${user.username}`}>
                {user.username}
              </Link>
            </li>
          );
        } else {
          return (
            <ul className="navbar-nav">
              <li className="nav-item">
                <b>Profile</b>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signin">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Sign Up</a>
              </li>
            </ul>
          );
        }
      } else {
        if (isAuthenticated() && user !== null) {
          return (
            <ul className="navbar-nav">
              <div className="btn-group">
                <button type="button" className="btn bg-white text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {user.username}
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href={`/${user.username}`}>Profile</a>
                  <a className="dropdown-item" href="/logout">Log Out</a>
                </div>
              </div>
            </ul>
          );
        } else {
          return (
            <ul className="navbar-nav">
              <li className="nav-item btn-item">
                <a role="button" className="btn btn-outline-secondary" href="/signin">Sign In</a>
              </li>
              <li className="nav-item btn-item">
                <a role="button" className="btn btn-outline-secondary" href="/signup">Sign Up</a>
              </li>
            </ul>
          );
        }   
      }
    }
    
    const Subjects = props => {
      if (window.innerWidth < 768) {
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <b>Topics</b>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("tech")}>
                Tech
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("business")}>
                Business
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("world")}>
                World
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("science")}>
                Science
              </button>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("tech")}>
                Tech
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("business")}>
                Business
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("world")}>
                World
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={this.handleClick("science")}>
                Science
              </button>
            </li>
          </ul>
        );
      }
    }
    
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
              <UserProfileView currentUser={this.props.currentUser} />
            </div>
          </div>

        </nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(subjectActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
