import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Profile
          username="props.article.username"
          email="props.article.email"
        />
      </div>
    );
  }
}
