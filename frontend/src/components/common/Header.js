import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

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
            <NavItem>
              <NavLink href="/tech">Tech</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/business">Business</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/world">World</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/science">Science</NavLink>
            </NavItem>
            <UserProfileView currentUser={this.props.currentUser} />
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
