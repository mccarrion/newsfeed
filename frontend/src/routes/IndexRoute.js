import {
  Link,
  Outlet,
  RootRoute,
  Route
} from '@tanstack/react-router'
import { useAtom } from "jotai";
import { GetArticleList } from '../components/Articles';
import { authTokenAtom } from '../main/atoms';

function CreateHeader() {
  const [authToken] = useAtom(authTokenAtom);
  function showEditorTab() {
    if (authToken !== null) {
      return (
        <li className="nav-item">
          <a className="nav-link" href="/#">Editor</a>
        </li>
      )
    }
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
                {showEditorTab()}
              </ul>
              <Link to="/users/login" className="btn btn-outline-primary" type="button">Login</Link>
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