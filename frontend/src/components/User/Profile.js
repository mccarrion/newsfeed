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
            to={`TODO`}>
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`TODO`}>
            Favorites
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`TODO`}>
            Comments
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
