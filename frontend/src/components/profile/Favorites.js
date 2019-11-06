import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      error: false
    };
  }

  componentDidMount() {
    return axios.get(`${API_URL}/users/${user.username}/favorites/`)
      .then(res => {
        this.setState({ favorites: res.data });
      })
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

  render() {
    const { favorites } = this.state;
    return(
      <div className="container">
        {
          favorites.map((favorite, index) => 
            <div className="col-md-8">
              <div key={index}>
                <div className="row">
                  <p>{favorite.text}</p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}


export default Favorites;
