import axios from 'axios';
const URL = 'http://localhost:8000/api/'

const getArticles = async () => {
  try {
    return await axios.get(':subject/articles')
  } catch (e) {
    console.error(e)
  }
}

const getProfile = async () => {
  try {
    return await axios.get('profile/:username')
  } catch (e) {
    console.error(e)
  }
}
