import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';

export function fetchArticles(subject) {
  if (subject !== null) {
    return axios.get(`${API_URL}/articles/${subject}`)
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  } else {
    return axios.get(`${API_URL}/articles`)
      .catch(error => {
        console.log('Error while fetching!', error);
      });
  }

};

export function getProfile(username) {
  return axios.get(`${API_URL}/profile/${username}`)
    .catch(error => {
      console.log('Error while fetching!', error);
    });
}
