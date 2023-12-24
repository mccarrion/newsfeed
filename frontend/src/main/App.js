import './App.css';
import {
  Router,
  Route,
} from '@tanstack/react-router'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ArticleList from '../components/ArticleList';
import rootRoute from '../components/Header';

const queryClient = new QueryClient();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
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
          <ArticleList />
        </QueryClientProvider>
      </div>
    )
  }
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: function About() {
    return (
      <div class="container">
        <br></br>
        <h2 class="border-bottom border-dark">
          About this Project
        </h2>
        <br></br>
        <p>This small project represents a basic newsfeed or blog where users can post articles.</p>
      </div>
    )
  },
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

const App = new Router({ routeTree })

export default App;
