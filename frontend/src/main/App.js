import './App.css';
import {
  Router,
} from '@tanstack/react-router'
import { rootRoute, indexRoute } from '../routes/Index';
import { articleRoute, articlesIndexRoute, articlesRoute } from '../routes/Articles';
import { aboutRoute } from '../routes/About';

const routeTree = rootRoute.addChildren([
  indexRoute,
  articlesRoute.addChildren([articlesIndexRoute, articleRoute]),
  aboutRoute,
])

const App = new Router({ routeTree })

export default App;
