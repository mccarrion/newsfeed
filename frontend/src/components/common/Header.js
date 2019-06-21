import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonIcon } from 'react-octicons';
import isAuthenticated, { users } from '../user/Auth';

// TODO: Add a listener for change in window size
// addEventListener or onresize
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: false
    };
  }

  componentDidMount() {
    return users.get(`/auth/users/me/`)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  // This removes the JWT token from localStorage, thus logging out the user
  removeToken() {
    localStorage.removeItem('id_token');
  }

  render() {
    const { user } = this.state;
    const UserProfileView = props => {
      // TODO: Find a less verbose way of handling window size changes
      if (window.innerWidth < 768) {
        if (isAuthenticated() && user !== null) {
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
        if (isAuthenticated() && user !== null) {
          return (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href={`/${user.username}`}>{user.username}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/logout">Log Out</a>
              </li>
            </ul>
          );
        } else {
          return (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a role="button" className="btn btn-outline-secondary" href="/signin">Sign In</a>
              </li>
              <li className="nav-item">
                <a role="button" className="btn btn-outline-secondary" href="/signup">Sign Up</a>
              </li>
            </ul>
          );
        }   
      }
    }
    
    const Subjects = props => {
      if (window.innerWidth < 768) {
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <b>Topics</b>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tech">Tech</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/world">World</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science">Science</a>
            </li>
          </ul>
        );
      } else {
        return (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/tech">Tech</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/business">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/world">World</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/science">Science</a>
            </li>
          </ul>
        );
      }
    }
    
    return (
      <div className="navbar-padding">
        <nav className="navbar underline navbar-expand-md navbar-light">
          <div className="container">
            <Link to="/" className="navbar-brand text-dark">
              NewsFeed
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <Subjects />
              <UserProfileView currentUser={this.props.currentUser} />
            </div>
          </div>

        </nav>
      </div>
    );
  }
}

export default Header;
