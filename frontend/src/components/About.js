import { Route } from '@tanstack/react-router'

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

export default aboutRoute;