import {
  Outlet,
  Route
} from '@tanstack/react-router'
import { rootRoute } from './IndexRoute';
import { Login, Logout, SignUp } from '../components/Users';

export const usersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: () => {
    return (
      <div className="container">
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
      <div className="container">
        <p>Hello there fellow User.</p>
      </div>
    )
  }
})

export const loginRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/login',
  component: Login
})

export const logoutRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/logout',
  component: Logout
})

export const signupRoute = new Route({
  getParentRoute: () => usersRoute,
  path: '/signup',
  component: SignUp
})