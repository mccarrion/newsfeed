import {
  Outlet,
  Route
} from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { GetArticle, GetArticleList } from '../components/Articles';
import { rootRoute } from './Index';

const queryClient = new QueryClient();

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
  component: function Home() {
    return (
      <div class="container">
        <br></br>
        <h2 class="border-bottom border-dark">
          News for Today
        </h2>
        <br></br>
        <QueryClientProvider client={queryClient}>
          <GetArticleList />
        </QueryClientProvider>
      </div>
    )
  }
})

export const articleRoute = new Route({
  getParentRoute: () => articlesRoute,
  path: '/$slug',
  component: () => (
    <>
      <div class="container">
        <br></br>
        <h2 class="border-bottom border-dark">
          News for Today
        </h2>
        <br></br>
        <QueryClientProvider client={queryClient}>
          <GetArticle />
        </QueryClientProvider>
      </div>
    </>
  ),
})