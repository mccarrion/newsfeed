Newsfeed Website
========================

This repository contains the code for a newsfeed, news, blog, etc. website. The
licensing for this code will be a standard MIT license. Anyone who comes across
this code and likes the functionality implemented in this codebase is free to
clone the code and use it for personal or commercial purposes.

The following will be notes on the design and functionality of the app, along 
with my thought process behind why and how things were developed the way they
are. As the notes grow, they might be broken up and put into a folder, but that
is unlikely due to my aversion to having more than two folders in the main repo.

## Table of Contents

- [User Interface](#user-interface)
- [Docker and Kubernetes](#docker-and-kubernetes)
- [Authentication](#authentication)
- [User Integration](#user-integration)
- [Top Articles App](#top-articles-app)
- [Ideas for the Future](#ideas-for-the-future)

### User Interface (UI):

The UI follows principles gleaned from Thinkster's [realworld.io](https://github.com/gothinkster/realworld), the super-blog [Medium](https://medium.com/), and the news website [Axios](https://www.axios.com/).

The UI was build with React.js. Redux is currently not used in the frontend as 
that would add an additional layer of complexity beyond learning React. Redux 
may be added at a later time depending on how well it ties into the new API 
spec that this app will eventually migrate to, specifically the JSON:API spec.

### Docker and Kubernetes

This project has containerized the sub-applications making up the webapp. The 
sub-apps in this project are specifically: React.js for rendering data, Django 
for processing data, and PostgreSQL for storage of data. Redis is likely to be 
added in the near future for storing data in a cache like page hits.

Docker was chosen as the method of locally running and testing the application
given its ease of use and extensibility.

Kubernetes was chosen for deployment given that it is more effective at handling
applications that have a variety of decoupled sub-apps (microservices) that are 
connected into one larger webapp than Heroku is and it is far far better than 
trying to manually upload everything to a VPS. 

### Authentication

User authentication will be handled through JWT tokens. Authorization of clients
will be handled through OAuth2 (eventually).

### User Integration

There are two primary ways for the User to interact with this webapp: commenting
on and favoriting articles.

### Top Articles App

The Top Articles app will become a part of the sidebar for the newsfeed app. 
This open source library will be used to store the number of hits that each 
article receives: [django-hitcount](https://github.com/thornomad/django-hitcount).
From there, an API endpoint will be created that lists the top five articles in 
order of quantity of hits. The JSON data will be rendered by React as a part of 
the sidebar.

### Ideas for the Future

The first thing on the list for the future is to transcribe this app from Django
to Flask as the backend framework. The driving force behind this is that Flask 
is ORM agnostic meaning that one can import SQLAlchemy and use that as the ORM 
for creating database objects. The main advantage of SQLAlchemy over Django's 
ORM is that it has a database abstraction layer allowing developers to create 
scripts directly giving commands to PostgreSQL's API on the rare case that such 
a thing is needed.

A couple other things are: shift REST API's to JSON:API spec, develop a system 
of signals for tracking how the app is being used, integrate a CMS, and the list
goes on.