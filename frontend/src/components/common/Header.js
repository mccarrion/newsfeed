import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PersonIcon } from 'react-octicons';
import axios from 'axios';
import isAuthenticated from '../Auth';
import { API_URL } from '../../constants/appConstants';

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
    return axios.get(`${API_URL}/auth/users/me/`)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log('Error while fetching!', error);
    });
  }

  render() {
    const { user } = this.state;
    const UserProfileView = props => {
      if (window.innerWidth < 768) {
        if (user.username) {
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
        if (isAuthenticated()) {
          return (
            <li className="nav-item">
              <Link
                to={`/@${user}`}>
                {user.username}
              </Link>
            </li>
          );
        } else {
          return (
            <ul className="navbar-nav">
              <div className="btn-group">
                <button type="button" className="btn bg-white text-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <PersonIcon />
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="/signin">Sign In</a>
                  <a className="dropdown-item" href="/signup">Sign Up</a>
                </div>
              </div>
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
            <div className="btn-group">
              <button type="button" className="btn bg-white text-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Topics
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/tech">Tech</a>
                <a className="dropdown-item" href="/business">Business</a>
                <a className="dropdown-item" href="/world">World</a>
                <a className="dropdown-item" href="/science">Science</a>
              </div>
            </div>
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
