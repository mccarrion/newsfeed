import React, { Component } from 'react';
import Comments from './Comments';
import Favorites from './Favorites';
import { connect } from 'react-redux';

/**
 * This component is used to render the user's profile.
 * TODO: May need to change Profile from Component to const
 */
class Profile extends Component {
  render() {
    console.log(this.props.auth);
    const user = this.props.user;
    const auth = this.props.auth;
    if (auth !== false && user !== null) {
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

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Profile);
