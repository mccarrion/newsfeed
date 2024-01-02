import {
  Outlet,
  Route
} from '@tanstack/react-router'
import { GetArticle, GetArticleList } from '../components/Articles';
import { rootRoute } from './IndexRoute';

export const articlesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: () => {
    return (
      <div class="container">
        <Outlet />
      </div>
    )
  }
})

export const articlesIndexRoute = new Route({
  getParentRoute: () => articlesRoute,
  path: '/',
  component: GetArticleList,
})

export const articleRoute = new Route({
  getParentRoute: () => articlesRoute,
  path: '/$articleId',
  component: GetArticle,
})