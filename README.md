Newsfeed Website
========================

This is a newsfeed with a top articles app. The frontend is written in 
JavaScript using React and Redux libraries. The backend is implemented with 
Python and Django.  

## Table of Contents

- [Running the App](#running-the-app)
- [Users](#users)
- [Articles](#top-articles-app)
- [Acknowledgement](#acknowledgement)

### Running the App

The app is run locally through Docker containers. In production the app runs
on Heroku Dynos.

### Users

Users are authenticated using JWT tokens. Once a user is authenticated, they are
authorized to make comments, favorite, and access their user profile.

### Acknowledgement

Thank you to Thinkster for providing a solid example of how to implement a feed
of articles. Also, thank you to React, Redux, Django, Stackoverflow, et al. for
providing free and open resources that make independent projects like this 
possible.
