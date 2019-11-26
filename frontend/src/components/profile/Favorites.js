import React, { Component } from 'react';
import { API_URL } from '../../constants';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      error: false
    };
  }

  async componentDidMount() {
    let req;
    try {
      req = await fetch(`${API_URL}/articles/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('id_token')}`,
        }})
        .then(res => res.json());
    } catch (error) {
      console.log('Error fetching!', error);
    }
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
