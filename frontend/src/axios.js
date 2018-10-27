import axios from 'axios';

// This was written out in order to visualize how axios works as a starting
// point on how to refactor and expand this file going forward
axios.get('http://localhost:8000/api')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

function ArticleList() {
  return axios.get('/articles');
}
