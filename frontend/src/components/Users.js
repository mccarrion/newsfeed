import {
  Link, Navigate, useNavigate,
} from '@tanstack/react-router'
import {
  useMutation, useQuery,
} from '@tanstack/react-query'
import { useEffect } from 'react';
import { useStore } from '../main/store';

function Login() {
  const navigate = useNavigate({ from: '/login' })
  const updateToken = useStore((state) => state.setAuthToken)
  const loginUser = useMutation({
    mutationFn: (data) => fetch('http://localhost:8000/token', {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: data,
    }).then(
      (response) => response.json(),
    )
  })

  useEffect(() => {
    if (loginUser.isSuccess) {
      updateToken(loginUser.data.access_token)
      navigate({ to: '/' })
    }
  })

  return (
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="border-bottom border-dark">
            Sign In
          </h2>
          <p></p>
          <form onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            var data = []
            for (const key of formData.keys()) {
              var encodedKey = encodeURIComponent(key);
              var encodedValue = encodeURIComponent(formData.get(key))
              data.push(encodedKey + "=" + encodedValue)
            }
            data = data.join("&")
            loginUser.mutate(data)
          }}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">Username</label>
              <input name="username" type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username"></input>
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <p>Not a user yet? Please <Link to="/users/signup"><b>sign up</b></Link></p>
            <p></p>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

function Logout() {
  const navigate = useNavigate({ from: '/logout' })
  const removeAuthToken = useStore((state) => state.removeAuthToken)
  useEffect(() => {
    removeAuthToken()
    navigate({ to: '/' })
  })
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
    <div className="container">
      <br></br>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h2 className="border-bottom border-dark">
            Create New Account
          </h2>
          <p></p>
          <form onSubmit={(event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            var data = Object.fromEntries(formData.entries())
            console.log(JSON.stringify(data))
            createUser.mutate(data)
          }}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername1">Username</label>
              <input name="username" type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username"></input>
            </div>
            <p></p>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

function Profile() {
  const userData = useStore((state) => state.userData)
  console.log(userData)
  const { isPending, error, data } = useQuery({
    queryKey: ['article'],
    queryFn: () =>
      fetch('http://localhost:8000/users/me/', {
        method: "GET",
        mode: "cors",
        credentials: "include", // TODO: should be same-origin, but needs to be 'include' for local testing
        headers: {
          "Content-Type": "application/json",
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
    console.log(data)
  }
}

export { Login, Logout, SignUp, Profile };