import { Profile } from './Profile';
import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends Profile {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link
            className="link"
            to={`/@${this.props.profile.username}`}>
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="link"
            to={`/@${this.props.profile.username}/comments`}>
            Comments
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="link"
            to={`/@${this.props.profile.username}/favorites`}>
            Favorites
          </Link>
        </li>
      </ul>
    );
  }
}

export default Favorites;
