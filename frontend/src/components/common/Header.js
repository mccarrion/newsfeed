import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
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
      <Nav>
        <NavItem>
          <Link to="/login" className="nav-link">
            Log In
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </NavItem>
      </Nav>
    );
  }
}

const Subjects = props => {
  const subjects = props.subjects;
  if (subjects) {
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
                href="$"
                className="subject-default subject-pill"
                key={subject}
                onClick={handleClick}>
                {subject}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <Nav>
        <NavItem><NavLink>Tech</NavLink></NavItem>
        <NavItem><NavLink>Business</NavLink></NavItem>
        <NavItem><NavLink>World</NavLink></NavItem>
        <NavItem><NavLink>Science</NavLink></NavItem>
      </Nav>
    );
  }
};

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand>
            <Link to="/" className="navbar-brand">
              NewsFeed
            </Link>
          </NavbarBrand>
          <Nav>
            {/* Need to have for loops to create links. */}
            <Subjects
              subjects={this.props.subjects}
              onClickSubject={this.props.onClickSubject} />
            <UserProfileView currentUser={this.props.currentUser} />
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
