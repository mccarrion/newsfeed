import {
  Link,
  Outlet,
  RootRoute,
  Route
} from '@tanstack/react-router'
import { GetArticleList } from '../components/Articles';
import { useStore } from '../main/store';
import Dropdown from 'react-bootstrap/Dropdown';

function CreateHeader() {
  const authToken = useStore((state) => state.authToken)
  const userData = useStore((state) => state.userData)
  console.log(authToken)
  console.log(userData)
  var editorTab
  var navBarRight

  if (authToken !== null && userData !== null) {
    editorTab = <li className="nav-item"><Link to="/editor" className="nav-link" aria-current="page">Editor</Link></li>
    navBarRight =
      <Dropdown>
        <Dropdown.Toggle>
          Hello! {userData.uname}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/users/profile">Profile</Dropdown.Item>
          <Dropdown.Item as={Link} to="/users/logout">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  } else {
    editorTab = null
    navBarRight = <Link to="/users/login" className="btn btn-outline-primary" type="button">Login</Link>
  }

  return (
    <>
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">Newsfeed</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                {editorTab}
              </ul>
              {navBarRight}
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  )
}

export const rootRoute = new RootRoute({
  component: CreateHeader
})

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: GetArticleList
})