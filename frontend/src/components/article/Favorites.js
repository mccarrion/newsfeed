import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/appConstants';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
      error: false
    };
  }

  componentDidMount() {
    const {match: { params }} = this.props;
    return axios.get(`${API_URL}/profiles/${params.user}/${params.favorites}`)
      .then(res => {
        this.setState({ boolean: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    const { boolean } = this.state;
    if (boolean === true) {
      return (
        <div></div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}


export default Favorites;
