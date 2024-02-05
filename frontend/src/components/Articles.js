import {
  Link,
} from '@tanstack/react-router'
import {
  useQuery,
} from '@tanstack/react-query'
import { articleRoute } from '../routes/ArticleRoutes';
import Card from 'react-bootstrap/Card'

function GetArticle() {
  const { articleId } = articleRoute.useParams();
  const { isPending, error, data } = useQuery({
    queryKey: ['article'],
    queryFn: () =>
      fetch('http://localhost:8000/articles/' + articleId + "/").then(
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
        <h2 className="border-bottom border-dark">
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
      fetch('http://localhost:8000/articles/').then(
        (response) => response.json(),
      ),
  })

  if (isPending) {
    return 'Loading...'
  } else if (error) {
    return 'An error has occurred: ' + error.message
  } else {
    console.log(data);
    const listArticles = data.map(article =>
      <div key={article.id}>
        <Card as={Link} to={"articles/" + article.id} params={{ articleId: article.id }} style={{ textDecoration: 'none' }}>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.body.substring(0,250)}...</Card.Text>
          </Card.Body>
        </Card>
        <p />
      </div>
    );
    return (
      <div className="container">
        <br></br>
        <h2 className="border-bottom border-dark">
          News for Today
        </h2>
        <p />
        {listArticles}
      </div>
    );
  }
}

export { GetArticle, GetArticleList };