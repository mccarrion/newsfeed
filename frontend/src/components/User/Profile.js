import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  componentWillMount() {

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
