import {
  Link, Navigate, redirect,
} from '@tanstack/react-router'
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query'

function Login() {
  function LoginUser(formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const { isPending, error, data } = useQuery({
      queryKey: ['article'],
      queryFn: () =>
        fetch('http://localhost:8000/users/login').then(
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
              <label for="exampleInputUsername1">Username</label>
              <input name="username" type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username"></input>
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
  const createUser = useMutation({
    mutationFn: (data) => fetch('http://localhost:8000/users/create', {
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

  if (createUser.isSuccess) {
    return <Navigate to="/" />
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
          <form onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget);
            var data = Object.fromEntries(formData.entries());
            console.log(JSON.stringify(data))
            createUser.mutate(data)
          }}>
            <div class="form-group">
              <label for="exampleInputUsername1">Username</label>
              <input name="username" type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username"></input>
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