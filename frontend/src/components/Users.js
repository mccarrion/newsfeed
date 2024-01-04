import {
  Link,
} from '@tanstack/react-router'
import {
  useQuery,
} from '@tanstack/react-query'

function Login() {
  function LoginUser(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const { isPending, error, data } = useQuery({
      queryKey: ['article'],
      queryFn: () =>
        fetch('http://0.0.0.0:8000/users/login').then(
          (response) => response.json(),
        ),
    })

    if (isPending) {
      return 'Logging in...'
    } else if (error) {
      return 'An error has occurred: ' + error.message
    } else {
      // TODO: redirect to Home page
    }
  }
  return (
    <div class="container">
      <br></br>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h2 class="border-bottom border-dark">
            Sign In
          </h2>
          <p></p>
          <form action={LoginUser}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <p></p>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <p>Not a user yet? Please <Link to="/users/signup"><b>sign up</b></Link></p>
            <p></p>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  );
}

function SignUp() {
  function CreateUser(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const { isPending, error, data } = useQuery({
      queryKey: ['article'],
      queryFn: () =>
        fetch('http://0.0.0.0:8000/users/create').then(
          (response) => response.json(),
        ),
    })

    if (isPending) {
      return 'Logging in...'
    } else if (error) {
      return 'An error has occurred: ' + error.message
    } else {
      // TODO: redirect to Home page
    }
  }
  return (
    <div class="container">
      <br></br>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h2 class="border-bottom border-dark">
            Create New Account
          </h2>
          <p></p>
          <form action={CreateUser}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <p></p>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form></div>
        <div class="col-md-4"></div>
      </div>
    </div>
  )
}

export { Login, SignUp };