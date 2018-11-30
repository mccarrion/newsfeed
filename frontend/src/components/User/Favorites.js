import { Profile } from './Profile';
import React from 'react';
import { Link } from 'react-router-dom';

class Favorites extends Profile {
  render() {
    return (
      <ul className="nav">
        <Link
          className="link"
          to={`/@${this.props.profile.username}/favorites`}>
          My Favorites
        </Link>
      </ul>
    );
  }
}
