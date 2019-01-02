import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../../axios';

const UserProfileView = props => {
  if (props.currentUser) {
    return (
      <li className="nav-item">
        <Link
          to={`/@${props.currentUser.username}`}>
          {props.currentUser.username}
        </Link>
      </li>
    );
  } else {
    return (
      <ul>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    );
  }
}

const Subjects = props => {
  const subjects = props.subjects;
  return (
    <div className="subject-list">
      {
        subjects.map(subject => {
          const handleClick = event => {
            event.preventDefault();
            props.onClickSubject(subject, list => fetchArticles(subject));
          };

          return (
            <a
              href=""
              className="subject-default"
              key={subject}
              onClick={handleClick}>
              {subject}
            </a>
          );
        })
      }
    </div>
  );
};

class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar-brand">
            NewsFeed
          </Link>

          {/* Need to have for loops to create links. */}
          <li className="nav-item">
            <Subjects />
          </li>

          <UserProfileView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
