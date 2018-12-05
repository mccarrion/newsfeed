import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  componentWillMount() {

  }

  renderTabs() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}`}>
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}/comments`}>
            Comments
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${this.props.profile.username}/favorites`}>
            Favorites
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div className="profile">
        <img src={user.image} />
        <h5>{user.username}</h5>
      </div>
    );
  }
}

export default Profile;
