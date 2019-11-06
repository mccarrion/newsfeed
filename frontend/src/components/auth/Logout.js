import React, { Component } from 'react';

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem('id_token');
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <h3 className="text-md-center">Successfully Logged Out</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;