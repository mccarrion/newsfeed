import React from 'react';
import { Link } from 'react-router-dom';

export const UserProfileView = ({auth, user}) => {
    // TODO: Find a less verbose way of handling window size changes
    if (window.innerWidth < 768) {
      if (auth !== false && user !== null) {
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
      if (auth !== false && user !== null) {
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
