import {
  Link,
} from '@tanstack/react-router'
import {
  useQuery,
} from '@tanstack/react-query'

function GetArticle() {
  const { isPending, error, data } = useQuery({
    queryKey: ['article'],
    queryFn: () =>
      fetch('http://0.0.0.0:8000/articles/3/').then( // 1 needs to be changed to a varible value
        (response) => response.json(),
      ),
  })

  if (isPending) {
    return 'Loading...'
  } else if (error) {
    return 'An error has occurred: ' + error.message
  } else {
    return (
      <div>
        <br></br>
        <h2 class="border-bottom border-dark">
          {data.title}
        </h2>
        <br></br>
        <p lass="mb-1" c>{data.body}</p>
      </div>
    );
  }
}

function GetArticleList() {
  const { isPending, error, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch('http://0.0.0.0:8000/articles/').then(
        (response) => response.json(),
      ),
  })

  if (isPending) {
    return 'Loading...'
  } else if (error) {
    return 'An error has occurred: ' + error.message
  } else {
    const listArticles = data.map(article =>
      <Link to={"articles/" + article.id} class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{article.title}</h5>
        </div>
        <p lass="mb-1" c>{article.body}</p>
      </Link>
    );
    return (
      <div class="list-group">
        {listArticles}
      </div>
    );
  }
}

export { GetArticle, GetArticleList };