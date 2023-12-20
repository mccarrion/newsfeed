import {
  useQuery,
} from '@tanstack/react-query'

export default function ArticleList() {
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
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{article.title}</h5>
        </div>
        <p lass="mb-1" c>{article.body}</p>
      </a>
    );
    return (
      <div class="list-group">
        {listArticles}
      </div>
    );
  }
}