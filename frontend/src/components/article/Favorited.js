import React, { Component } from 'react';
import { API_URL } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Favorited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };

    this.handleFavorited = this.handleFavorited.bind(this);
  }

  async componentDidMount() {
    let req;
    try {
      req = await fetch(`${API_URL}/articles/${this.props.article}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('id_token')}`,
      }})
      .then(res => res.json());
      this.setState({ favorited: req.favorited });
    } catch (error) {
      console.log('You are not authorized!', error);
    }
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
          <button 
            className="btn btn-flat float-right"
            onClick={this.handleFavorited}>
            <FontAwesomeIcon icon={['fas','bookmark']} />
          </button>
        );
      } else {
        return (
          <button 
            className="btn btn-flat float-right"
            onClick={this.handleFavorited}>
            <FontAwesomeIcon icon={['far','bookmark']} />
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
