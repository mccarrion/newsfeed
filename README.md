Newsfeed Website
========================

This repository contains the code for a newsfeed, news, blog, etc. website. The
licensing for this code will be a standard MIT license. Anyone who comes across
this code and likes the functionality implemented in this codebase is free to
clone the code and use it for personal or commercial purposes.

## The User Interface (UI):

The UI follows principles gleaned from Thinkster's [realworld.io](https://github.com/gothinkster/realworld), the super-blog [Medium](https://medium.com/), and the new news website [Axios](https://www.axios.com/).

## Local and Production Configuration

This project only has two sets of settings at this current time. The local
settings are two Docker containers. One runs Django and another runs an image
of PostgreSQL that is maintained by the Docker company itself.

The production settings are being revised to upload the web app on a Kubernetes
cluster.
