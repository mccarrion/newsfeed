Newsfeed Website
========================

This is a newsfeed with a top articles app. The frontend is written in 
JavaScript using React and Redux libraries. The backend is implemented with 
Python and Django.  

### Core Features

The core features of this app is a scrollable list of articles descending by 
time. This list of articles can be filtered by subject. User accounts can be 
created allowing users to comment and favorite on articles. Users can also see
all of their own comments and favorites in their user profile. There is a top 
5-10 articles list on the sidebar.

Some of these features are still a work in progress, but are close to being 
taken to completion.

### Goals for this application

- [x] Comments
- [x] Users
- [x] Articles
- [ ] Redux for saving global state -> specifically user and subjects
- [ ] Favorites
- [x] REST API's
- [x] JWT
- [ ] 50% minimum code coverage between unit and integration tests -> 70% or greater target

A content management system would be ideal, but even integrating an open-source
one increases scope too much.

### Credit

I want to specifically acknowledge Thinkster and their 
[realworld.io](https://github.com/gothinkster/realworld) project. It provided 
an excellent path on how to create and connect the components of a news or blog
website.
