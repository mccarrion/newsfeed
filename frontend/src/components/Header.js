import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              NewsFeed
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          {/* Need to have for loops to create links. */}
          <li className="nav-item">
            <Link to="/:subject" className="nav-link">
              Subject
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Header;
