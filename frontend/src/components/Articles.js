import { Link } from '@tanstack/react-router'
import { useMutation, useQuery } from '@tanstack/react-query'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { articleRoute } from '../routes/ArticleRoutes';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';

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
  const saveArticle = useMutation({
    mutationFn: (articleId) => fetch('http://localhost:8000/articles/' + articleId + '/favorite/', {
      method: "POST",
      mode: "cors",
      credentials: "include", // TODO: should be same-origin, but needs to be 'include' for local testing
      headers: {
        "Content-Type": "application/json",
      }
    }).then(
      (response) => {
        response.json()
      },
    )
  })

  if (saveArticle.isSuccess) {
    console.log("success")   // TODO: need to dynamically update state of likes and favorites based on response from mutation call
  }

  const likeArticle = useMutation({
    mutationFn: (articleId) => fetch('http://localhost:8000/articles/' + articleId + '/like/', {
      method: "POST",
      mode: "cors",
      credentials: "include", // TODO: should be same-origin, but needs to be 'include' for local testing
      headers: {
        "Content-Type": "application/json",
      }
    }).then(
      (response) => {
        response.json()
      },
    )
  })

  if (likeArticle.isSuccess) {
    console.log("success")   // TODO: need to dynamically update state of likes and favorites based on response from mutation call
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () =>
      fetch('http://localhost:8000/articles/', {
        credentials: "include", // TODO: should be same-origin, but needs to be 'include' for local testing
      }).then(
        (response) => response.json(),
      ),
  })
  const padding = <div style={{ width: '4px', height: 'auto', display: 'inline-block' }} />

  function likeButton(article) {
    if (article.likes.length > 0) {
      return <Button onClick={(event) => {
        event.preventDefault()
        likeArticle.mutate(article.id)
      }} variant="btn btn-outline-primary" active>
        <FontAwesomeIcon icon={faThumbsUp} />{padding} Liked!
      </Button>
    } else {
      return <Button onClick={(event) => {
        event.preventDefault()
        likeArticle.mutate(article.id)
      }} variant="btn btn-outline-primary">
        <FontAwesomeIcon icon={faThumbsUp} />{padding} Like
      </Button>
    }
  }

  function favoriteButton(article) {
    if (article.favorites.length > 0) {
      return <Button onClick={(event) => {
        event.preventDefault()
        saveArticle.mutate(article.id)
      }} variant="btn btn-outline-primary" active>
        <FontAwesomeIcon icon={faBookmark} />{padding} Saved!
      </Button>
    } else {
      return <Button onClick={(event) => {
        event.preventDefault()
        saveArticle.mutate(article.id)
      }} variant="btn btn-outline-primary">
        <FontAwesomeIcon icon={faBookmark} />{padding} Save
      </Button>
    }
  }

  if (isPending) {
    return 'Loading...'
  } else if (error) {
    return 'An error has occurred: ' + error.message
  } else {
    console.log(data);
    const listArticles = data.map(article =>
      <div key={article.id}>
        <Card>
          <Card.Body as={Link} to={"articles/" + article.id} params={{ articleId: article.id }} style={{ textDecoration: 'none' }}>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.body.substring(0, 250)}...</Card.Text>
          </Card.Body>
          <Card.Footer className="text-end" >
            {likeButton(article)}
            {padding}{padding}
            {favoriteButton(article)}
          </Card.Footer>
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