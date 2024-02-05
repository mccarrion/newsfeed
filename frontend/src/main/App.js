import './App.css';
import {
  Router,
} from '@tanstack/react-router'
import { rootRoute, indexRoute } from '../routes/IndexRoute';
import { articleRoute, articlesIndexRoute, articlesRoute } from '../routes/ArticleRoutes';
import { aboutRoute } from '../routes/AboutRoute';
import { loginRoute, logoutRoute, signupRoute, usersIndexRoute, usersRoute } from '../routes/UserRoutes';
import { editorCreateRoute, editorIndexRoute, editorRoute } from '../routes/EditorRoutes';

const routeTree = rootRoute.addChildren([
  indexRoute,
  articlesRoute.addChildren([articlesIndexRoute, articleRoute]),
  usersRoute.addChildren([usersIndexRoute, loginRoute, logoutRoute, signupRoute]),
  editorRoute.addChildren([editorIndexRoute, editorCreateRoute]),
  aboutRoute,
])

const App = new Router({ routeTree })

export default App;
