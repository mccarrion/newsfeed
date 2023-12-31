import './App.css';
import {
  Router,
} from '@tanstack/react-router'
import { rootRoute, indexRoute } from '../routes/IndexRoute';
import { articleRoute, articlesIndexRoute, articlesRoute } from '../routes/ArticleRoutes';
import { aboutRoute } from '../routes/AboutRoute';

const routeTree = rootRoute.addChildren([
  indexRoute,
  articlesRoute.addChildren([articlesIndexRoute, articleRoute]),
  aboutRoute,
])

const App = new Router({ routeTree })

export default App;
