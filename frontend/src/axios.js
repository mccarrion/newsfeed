import axios from 'axios';
const API_URL = 'http://localhost:8000/api';

// export function fetchArticles(subject) {
//   if (subject !== null) {
//     return axios.get(`${API_URL}/articles/${subject}`)
//       .catch(error => {
//         console.log('Error while fetching!', error);
//       });
//   } else {
//     return axios.get(`${API_URL}/articles/article-views`)
//       .catch(error => {
//         console.log('Error while fetching!', error);
//       });
//   }
// };

export function fetchArticles() {
  return axios.get(`http://localhost:8000/api/articles/article-views/`)
    .catch(error => {
      console.log('Error while fetching!', error);
  });
};

export function getArticle(subject, slug) {
  return axios.get(`${API_URL}/articles/${subject}/${slug}`)
    .catch(error => {
      console.log('Error while fetching!', error);
    });
};

export function getProfile(username) {
  return axios.get(`${API_URL}/profile/${username}`)
    .catch(error => {
      console.log('Error while fetching!', error);
    });
};

export function postLogin(username) {
  return axios.post(`${API_URL}/login`, {
      email: '',
      password: ''
    })
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log('Error posting credentials!', error);
    });
};

export function postSignUp(username) {
  return axios.post(`${API_URL}/signup`, {
    username: '',
    email: '',
    password: ''
  })
  .then(res => {
    console.log(res)
  })
  .catch(error => {
    console.log('Error posting credentials!', error);
  });
};
