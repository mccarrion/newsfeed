import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Footer can be on the very bottom or bottom of sidebar.
// Will be at the very bottom for this webapp.
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container footer-container">
          <div className="row">
          {/* TODO: Add a Help center and About section */}
            <div className="col-md-1">
                <Link to="/privacy" className="nav-link">
                  Privacy
                </Link>
            </div>
            <div className="col-md-1">
                <Link to="/terms" className="nav-link">
                  Terms
                </Link>
            </div>
          </div>
        </div>
      </footer>
      
    );
  }
}

export default Footer;
