import { useMutation, useQuery } from '@tanstack/react-query'
import {
  Link
} from '@tanstack/react-router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { useStore } from '../main/store'

function EditorIndex() {
  return (
    <div>
      <br />
      <Card as={Link} to="/editor/create" style={{ textDecoration: 'none' }}>
        <Card.Body>
          <Card.Title>Create a New Post</Card.Title>
          <Card.Text>Click on this Card to be taken to a form to create a new article post.</Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card as={Link} to="/editor/update" style={{ textDecoration: 'none' }}>
        <Card.Body>
          <Card.Title>Update an Existing Post</Card.Title>
          <Card.Text>Click on this Card to be taken to a list of article posts that you can update.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

function EditorCreate() {
  const userData = useStore((state) => state.userData)
  const createArticle = useMutation({
    mutationFn: (data) => fetch('http://localhost:8000/articles/create/', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(
      (response) => response.json(),
    )
  })

  return (
    <div>
      <br />
      <Form onSubmit={(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        var data = Object.fromEntries(formData.entries())
        data.creator_id = userData.id;
        console.log(JSON.stringify(data))
        createArticle.mutate(data)
      }}>
        <Form.Group className="mb-3" controlId="formGroupTitle">
          <Form.Label>Article Title</Form.Label>
          <Form.Control name="title" type="title" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupBody">
          <Form.Label>Article Body</Form.Label>
          <Form.Control as="textarea" name="body" placeholder="Body" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

function ArticlesToUpdate() {
  const authToken = useStore((state) => state.authToken)
  console.log(authToken)
  const { isPending, error, data } = useQuery({
    queryKey: ['articles-to-update'],
    queryFn: () =>
    fetch('http://localhost:8000/articles/update/', {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + authToken
      }
    }).then(
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
          Articles That You Can Update
        </h2>
        <p />
        {listArticles}
      </div>
    );
  }
}

export { EditorIndex, EditorCreate, ArticlesToUpdate }