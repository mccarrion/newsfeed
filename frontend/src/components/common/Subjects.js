import React from 'react';

export const Subjects = () => {
    if (window.innerWidth < 768) {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <b>Topics</b>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("tech")}>
              Tech
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("business")}>
              Business
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("world")}>
              World
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("science")}>
              Science
            </button>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("tech")}>
              Tech
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("business")}>
              Business
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("world")}>
              World
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={this.handleClick("science")}>
              Science
            </button>
          </li>
        </ul>
      );
    }
  }
