import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonIcon } from 'react-octicons';

// TODO: Add a listener for change in window size
// addEventListener or onresize
const UserProfileView = props => {
  if (window.innerWidth < 768) {
    if (props.currentUser) {
      return (
        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}>
            {props.currentUser.username}
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
    if (props.currentUser) {
      return (
        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}>
            {props.currentUser.username}
          </Link>
        </li>
      );
    } else {
      return (
        <ul class="navbar-nav">
          <div class="btn-group">
            <button type="button" className="btn bg-white text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <PersonIcon />
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <a class="dropdown-item" href="/signin">Sign In</a>
              <a class="dropdown-item" href="/signup">Sign Up</a>
            </div>
          </div>
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
          <a className="nav-link" href="/tech">Tech</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/world">World</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/science">Science</a>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="navbar-nav mr-auto">
        <div className="btn-group">
          <button type="button" class="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Topics
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="/tech">Tech</a>
            <a class="dropdown-item" href="/business">Business</a>
            <a class="dropdown-item" href="/world">World</a>
            <a class="dropdown-item" href="/science">Science</a>
          </div>
        </div>
      </ul>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbarBrand navbar-expand-md navbar-light">
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

export default Header;
