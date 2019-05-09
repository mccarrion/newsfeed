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
    return axios.get(`${API_URL}/auth/users/me`)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  renderTabs() {
    const { user } = this.state;
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${user.username}`}>
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${user.username}/comments`}>
            Comments
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link active"
            to={`/@${user.username}/favorites`}>
            Favorites
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    const { user } = this.state;
    return (
      <div className="profile">
        <img src={user.image} alt="user" />
        <h5>{user.username}</h5>
      </div>
    );
  }
}

export default Profile;
