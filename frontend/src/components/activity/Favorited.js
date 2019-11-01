import React, { Component } from 'react';
import { API_URL } from '../../constants';

class Favorited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.article.favorited,
    };

    this.handleFavorited = this.handleFavorited.bind(this);
  }

  async handleFavorited(event) {
    event.preventDefault();
    await fetch(`${API_URL}/articles/${this.props.article}/favorited/`, {
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
          <button onClick={this.handleFavorited}>
            {/* Bookmarked, use font-awesome-react */}
          </button>
        );
      } else {
        return (
          <button onClick={this.handleFavorited}>
            {/* Not bookmarked */}
          </button>
        );
      }
    }
    return (
      <div><BookmarkView /></div>
    )
  }
}

export default Favorited;
