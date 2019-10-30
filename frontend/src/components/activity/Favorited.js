import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Favorited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.article.favorited,
    };

    this.handleFavorited = this.handleFavorited.bind(this);
  }

  handleFavorited(event) {
    event.preventDefault();
    const res = await fetch(`${API_URL}/articles/${this.props.article}/favorited/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('id_token')}`,
      }
    })
    
  }

  render() {
    const { favorited } = this.state;
    const BookmarkView = props => {
      if (favorited === true) {
        return (
          <div>{/* Bookmarked, use font-awesome-react */}</div>
        );
      } else {
        return (
          <div>{/* Not bookmarked */}</div>
        );
      }
    }
    return (
      <div><BookmarkView /></div>
    )
  }
}

export default Favorited;
