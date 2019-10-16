import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Favorited extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
    };
  }

  componentDidMount() {
    return axios.get(`${API_URL}/articles/${this.props.article}/favorites/`)
      .then(res => {
        this.setState({ favorted: res.data});
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Favorited;
