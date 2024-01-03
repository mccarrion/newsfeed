import {
  Link,
  Outlet,
  Route
} from '@tanstack/react-router'
import { rootRoute } from './IndexRoute';

export const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: () => {
    return (
      <div class="container">
        <Outlet />
      </div>
    )
  }
})

export const usersIndexRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/',
  component: () => {
    return (
      <div class="container">
        <p>Hello there fellow User.</p>
      </div>
    )
  }
})

export const loginRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/login',
  component: () => {
    return (
      <div class="container">
        <br></br>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"><form>
            <h2 class="border-bottom border-dark">
              Sign In
            </h2>
            <p></p>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <p></p>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <p>Not a user yet? Please <Link to="/users/signup"><b>sign up</b></Link></p>
            <p></p>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form></div>
          <div class="col-md-4"></div>
        </div>
      </div>
    )
  }
})

export const signupRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/signup',
  component: () => {
    return (
      <div class="container">
        <br></br>
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4"><form>
            <h2 class="border-bottom border-dark">
              Create New Account
            </h2>
            <p></p>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <p></p>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <p></p>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form></div>
          <div class="col-md-4"></div>
        </div>
      </div>
    )
  }
})