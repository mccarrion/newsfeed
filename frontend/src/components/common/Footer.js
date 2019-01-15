import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Footer can be on the very bottom or bottom of sidebar.
// Will be at the very bottom for this webapp.
class Footer extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          {/* TODO: Add a Help center and About section */}
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
