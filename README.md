Newsfeed Website
========================

This repository contains the code for a newsfeed, news, blog, etc. website. The
licensing for this code will be a standard MIT license. Anyone who comes across
this code and likes the functionality implemented in this codebase is free to
clone the code and use it for personal or commercial purposes.

The following will be notes on the design and functionality of the app, along 
with my thought process behind why and how things were developed the way they
are.

## Table of Contents

- [User Interface](#user-interface)
- [Heroku](#heroku)
- [Docker](#docker)
- [Authentication](#authentication)
- [User Integration](#user-integration)
- [Top Articles App](#top-articles-app)
- [Ideas for the Future](#ideas-for-the-future)

### User Interface:

The UI follows principles gleaned from Thinkster's [realworld.io](https://github.com/gothinkster/realworld), the super-blog [Medium](https://medium.com/), and the news website [Axios](https://www.axios.com/).

The UI was build with React.js. Redux is currently not used in the frontend as 
that would add an additional layer of complexity beyond learning React. Redux 
will be added at a later time given that the available libraries for pulling 
data from an API spec that this app will migrate too use Redux as the way of 
pulling and rendering that data. The API spec that this app will migrate to is 
specifically the JSON:API spec.

### Heroku

Using Heroku to serve the frontend and backend webapps. Images are served from an
Amazon S3 bucket.

### Docker

This project has containerized the sub-applications making up the webapp. The 
sub-apps in this project are specifically: React.js for rendering data, Django 
for processing data, and PostgreSQL for storage of data. Redis is likely to be 
added in the near future for storing data in a cache like page hits.

Docker was chosen as the method of locally running and testing the application
given its ease of use and extensibility.

### Authentication

User authentication will be handled through JWT tokens. Authorization of clients
will be handled through OAuth2 (eventually). Using Djoser library for REST API
endpoints for user authentication.

### User Integration

There are two primary ways for the User to interact with this webapp: commenting
on and favoriting articles. Also, users will be able to manage their accounts 
through a profile that pulls and displays relevant information to them, like a 
list of their comments in descending order.

### Top Articles App

The Top Articles app will become a part of the sidebar for the newsfeed app. 
This open source library will be used to store the number of hits that each 
article receives: [django-hitcount](https://github.com/thornomad/django-hitcount).
From there, an API endpoint will be created that lists the top five to ten 
articles in order of quantity of hits. The JSON data will be rendered by React 
as a part of the sidebar.

### Ideas for the Future

* Adopt an API spec like OpenAPI or GraphQL. Leaning towards OpenAPI
* Rewrite backend in Flask due to Flask's modularity, extensibility, and the fact that it maps better to the MVC design pattern
* CMS for writers and editors
* Signals and logging for how website is being used