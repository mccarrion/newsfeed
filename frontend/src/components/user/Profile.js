import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: false
    };
  }
  
  componentWillMount() {
  }

  renderTabs() {
    const { user } = this.state;
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
        <img src={this.props.profile.image} alt="user" />
        <h5>{this.props.profile.username}</h5>
      </div>
    );
  }
}

export default Profile;
