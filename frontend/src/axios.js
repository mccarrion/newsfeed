import axios from 'axios';
const API_URL = 'http://localhost:8000/api/';

export const fetchArticles = async () => {
  axios
    .get(
      API_URL + 'articles'
    )
    .catch(err => {
      console.log('Error while fetching!', err);
    });
};

const getProfile = async () => {
  try {
    return await axios.get('profile/:username')
  } catch (e) {
    console.error(e)
  }
}
