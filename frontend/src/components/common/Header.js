import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PersonIcon} from 'react-octicons'

const UserProfileView = props => {
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
            <a class="dropdown-item" href="/login">Log In</a>
            <a class="dropdown-item" href="/signup">Sign Up</a>
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
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand text-dark">
              NewsFeed
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav mr-auto">
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
              <UserProfileView currentUser={this.props.currentUser} />
            </div>
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;
