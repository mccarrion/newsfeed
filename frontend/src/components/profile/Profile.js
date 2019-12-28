import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import Favorites from './Favorites';
import isAuthenticated, { users } from '../auth/Auth';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: false
    };
  }
  
  componentWillMount() {
    return users.get(`/auth/users/me`)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  render() {
    const { user } = this.state;
    if (isAuthenticated() && user !== null) {
      return (
        <div className="container">
          <div className="profile">
            {/* <img src={user.image} alt="user" /> */}
            <h5>{user.username}</h5>
            <Comments user={user}/>
            <Favorites />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">Loading...</div>
      )
    }
  }
}

export default Profile;
