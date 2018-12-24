import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Footer will start on the sidebar for this app.
class Footer extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          {/* TODO: Also would be nice to have help center */}
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/privacy" className="nav-link">
              Privacy
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/terms" className="nav-link">
              Terms
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default Footer;
