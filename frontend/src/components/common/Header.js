import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <ul className="nav navbar-nav navbar-toggleable-md pull-md-right">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
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
            <Link to="/" className="navbar-brand">
              NewsFeed
            </Link>
            <ul className="nav navbar-nav navbar-toggleable-md pull-md-left">
              <li className="nav-item">
                <a class="nav-link" href="/tech">Tech</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/business">Business</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/world">World</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/science">Science</a>
              </li>
            </ul>
            <UserProfileView currentUser={this.props.currentUser} />
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;
